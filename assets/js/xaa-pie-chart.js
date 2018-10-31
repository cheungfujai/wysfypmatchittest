(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = function(){};
	var pieChart = function() {
		this.defaultCfg = defaultCfg();
	};
	pieChart.prototype.dpie = function(containerId, data){
			$("#"+containerId+">svg").empty();
			$("#"+containerId+">table").remove();
			var rawData = [];
			var defaultColor = d3.scale.category20().range();
			var width,height;
			data.data.forEach(function(val,idx){
				var item = {};
				item = $.extend({},val);
				rawData.push(item);
			})
			rawData.forEach(function(val,idx){
				if(!val.color){
					rawData[idx].color = defaultColor[idx];
				}
			})
			var noBlankArr = [];
			var pieColorSet = [];
			var legendColorSet = [];
			rawData.forEach(function(val,idx){
				var getNoBlankVal = {};
				if(val.value!=0&&val.value!=""){
					getNoBlankVal = $.extend({},val);
					noBlankArr.push(getNoBlankVal)
					pieColorSet.push(val.color);
				}
				legendColorSet.push(val.color);
			})
			
			defaultChart(containerId, noBlankArr,data.per);
			function defaultChart(containerId, data, labelType) {
				$("#"+containerId+">svg").empty();
			  nv.addGraph(function() {
			      width = $("#"+containerId).width()/2;
			      height = $("#"+containerId).height();
			      var chart = nv.models.pieChart()
			          .x(function(d) { return d.key })
			          .y(function(d) { return d.value })
			          .showLegend(false)
			          .showTooltipPercent(true)
			          .color(pieColorSet)//可自定义数组提供颜色
			          .width(0).showTooltipPercent(false)
			          .options({width:0,height: 0, donut: false})
			          .margin({top: 0, right: 0, bottom: 0, left: 0})
			          //.title('141234').titleOffset(-150)
			          //.height(height)
			         chart.labelType(labelType);//true/false是否在图表上显示label。"percent",图表上显示百分比
			      
			        d3.select("#" + containerId + " svg")
			            .datum(data)
			            .call(chart);
				        setLastPer(noBlankArr,rawData);			        	
			      nv.utils.windowResize(chart.update);
			      window.onresize = function(){
			    	  setLastPer(noBlankArr,rawData);
			      }

	
			      return chart;
			  });
			};
			setLastPer(noBlankArr,rawData);
		    //var color = d3.scale.category10();
		    var tF = rawData.map(function(d,i){ 
		    	
		        return {key:d.key, value: d.value,color: d.color}; 
		    });
		    var leg= legend(tF);
		    function legend(lD){
		        var leg = {};
		            
		        // create table for legend.
		        var legend = d3.select("#"+containerId).append("table").attr('class','xaa-legend');
		        
		        // create one row per segment.
		        var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");
		            
		        // create the first column for each segment.
		        tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("circle")
		            .attr("cx", '8').attr("cy", '7').attr("r","6")
					.attr("fill",function(d){ return d.color; });
		            
		        // create the second column for each segment.
		        tr.append("td").text(function(d){ return d.key;});
		
		        // create the fourth column for each segment.
		        tr.append("td").attr("class",'legendPerc')
		            .text(function(d){ return getLegend(d,rawData)});
	
		        // create the third column for each segment.
		        tr.append("td").attr("class",'legendFreq')
		            .text(function(d){ 
		            	var item = d3.format(",")(d.value);
		            	var str_n = item.toString();
		            	str_n = str_n.indexOf(".")==-1?(str_n+".00"):str_n;
		            	return "HK$"+str_n;
		            });
		        
		
		        // Utility function to be used to update the legend.
		        leg.update = function(nD){
		            // update the data attached to the row elements.
		            var l = legend.select("tbody").selectAll("tr").data(nD);
		
		            // update the frequencies.
		            l.select(".legendFreq").text(function(d){ 
		            	var item = d3.format(",")(d.value);
		            	var str_n = item.toString();
		            	str_n = str_n.indexOf(".")==-1?(str_n+".00"):str_n;
		            	return "HK$"+str_n;
		            });
		
		            // update the percentage column.
		            l.select(".legendPerc").text(function(d){ return getLegend(d,nD);});
		            //setLastPer(nD);
		        }
		    		var sum = d3.sum(rawData.map(function(t){ return t.value;}));      
			        function getLegend(d,ad){// Utility function to compute percentage.
			        	var percent = d.value/d3.sum(ad.map(function(t){ return t.value;}));
			        	percent = Math.round(percent*10000)/100+"%";
			        	if(percent == "NaN%"){
			        		percent = "0%"
			        	}
			        	//var percent = d3.formatSpecifier("f");
										//percent.precision = precisionFixed(0.01);
			            	return percent;
			        }
			        //setLastPer(lD);
				        return leg;
				    };
				    function setLastPer(data,legendData){
			    		var sum = d3.sum(data.map(function(t){ return t.value;}));      
			    		var legendSum = d3.sum(legendData.map(function(t){ return t.value;}));      
			            var itemValueSum=0;
			            var legendItemValueSum = 0;
			            var perData =[];
			            var legendPerData = [];
			            data.forEach(function(item,idx){
			            	var peritem = Math.round(item.value/sum*10000)/100;
			            	perData.push(peritem);
			            	itemValueSum+=peritem;
			            	if(peritem!=0){
			    				$("#" + containerId + ">svg g.nv-pieLabels").find(".nv-label text").eq(idx).text(perData[idx]+"%");            		
			            	}
			            });
			    		for(var i=perData.length-1;i>=0;i--){
			    			if(perData[i]!=0){
			    				perData[i] += 100-itemValueSum;
			    				$("#" + containerId + ">svg g.nv-pieLabels").find(".nv-label text").eq(i).text(Math.round(perData[i]*100)/100+"%");
			    				break;
			    			}
			    			
			    		}
			            if(noBlankArr.length>0){
				            legendData.forEach(function(item,idx){
				            	var legendPeritem = Math.round(item.value/legendSum*10000)/100;
				            	legendPerData.push(legendPeritem);
				            	legendItemValueSum+=legendPeritem;
				    				$("#" + containerId).find(" table.xaa-legend .legendPerc").eq(idx).text(Math.round(legendPerData[idx]*100)/100+"%");
				            })
				    		for(var i=legendPerData.length-1;i>=0;i--){
				    			if(legendPerData[i]!=0){
				    				legendPerData[i] += 100-legendItemValueSum;
				    				$("#" + containerId).find(" table.xaa-legend .legendPerc").eq(i).text(Math.round(legendPerData[i]*100)/100+"%");
				    				break;
				    			}
				    			
				    		}      	
			            } else {
			            	$("#" + containerId).find(" table.xaa-legend .legendPerc").text("0%");
			            }
			            var getWidth = $("#"+containerId).width();
			            if(getWidth<300){
			            	$("#"+containerId).css("display","block");
			            } else {
			            	$("#"+containerId).css("display","flex");
			            }
				    }
					var newData = [];
				    for(var i in rawData){
				    	var item = {};
				    	item = $.extend(item,rawData[i]);
				    	newData.push(item);
				    };
				    if(data.legendClick){
						$(".xaa-legend tbody tr td circle").click(function() {
							var _that = this;
							var _thatVal = $(this).parents("td").next().next().text();
							if(_thatVal!="0%"&&_thatVal!="100%"){
								$(".xaa-legend tbody tr td ").each(function(i){
									if(this == _that){
										newData[i].value = 0;
										defaultChart("d3-list1", newData, data.per)
										leg.update(newData);
										$(".xaa-legend tbody tr").eq(i).css("opacity","0.5");
									}
								});
							} else if(_thatVal=="100%"){
								$(".xaa-legend tbody tr td circle").each(function(i){
									var item = $.extend({},rawData[i]);
									newData[i] = item;
									$(".xaa-legend tbody tr").eq(i).css("opacity","0.5");
								});
								leg.update(newData);
								defaultChart("d3-list1", newData, data.per)
								$(".xaa-legend tbody tr").css("opacity","1");
	
							} else {
								$(".xaa-legend tbody tr td circle").each(function(i){
									if(this == _that){
										var item = $.extend({},rawData[i]);
										newData[i] = item;
										defaultChart("d3-list1", newData, data.per)
										leg.update(newData);
										$(".xaa-legend tbody tr").eq(i).css("opacity","1");
									}
								});
							};
							$(".xaa-legend tbody tr").each(function(){
								var getText = $(this).find("td").eq(2).text();
								if(getText == "0%"){
									$(this).css("opacity","0.5");
								}
							})
							/*var dataName = $(this).parents("td").next().html();
							$.each(data,function(i){
								if(data[i].name == dataName) {
									data.splice(i,1);
									setPie(data);
								}
							})*/
						}); 	
				    }
	return {noBlankArr:noBlankArr,rawData:rawData,
			updateValue:setLastPer
		};		
};
	xaa.addModule("pieChart", new pieChart());
})(window, $, xaa);
