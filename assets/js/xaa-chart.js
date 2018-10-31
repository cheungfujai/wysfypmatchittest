(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = function(){};
	var chart = function() {
		this.defaultCfg = defaultCfg();
	};
	chart.prototype.dpie = function(containerId, data){
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
	chart.prototype.dbar = function(ele, dBarData){
		stackTest(ele,dBarData);
		function stackTest(ele,dBarData){
			$("#"+ele+">svg.nvd3-svg").empty();
			var data = dBarData.data;
			nv.addGraph(function() {
				var allSum=[];
				data.forEach(function(ele,i){
					ele.values.forEach(function(item,j){
						if(allSum[j]){
							allSum[j] = (allSum[j]*1000+item.value*1000)/1000;
						} else {
							allSum[j]=0;
							allSum[j] = (allSum[j]*1000+item.value*1000)/1000;
						};
					});
				});
				data.forEach(function(ele,i){
					ele.values.forEach(function(item,j){
						data[i].values[j].value = Math.round(data[i].values[j].value/allSum[j]*100)/100
					});
				});
				var getPerSum = [];
				data[0].values.forEach(function(item,i){
					getPerSum[i]=0
					data.forEach(function(item,j){
						
							getPerSum[i] = (getPerSum[i]*1000+data[j].values[i].value*1000)/1000;
							
					});
				})
				getPerSum.forEach(function(item,i){
					if(item!=1){
						data[data.length-1].values[i].value = (data[data.length-1].values[i].value*1000 +1000-getPerSum[i]*1000)/1000;
						
					}
				});
			  var chart = nv.models.multiBarHorizontalChart()
			      .x(function(d) { return d.label })
			      .y(function(d) { return d.value })
			      .height(240)
			      .showControls(false)
			      .legendPosition("top")
			      //.color(["#000","#999","#ccc"])
			      .margin({top: 30, right: 20, bottom: 0, left: 135})
			      //.showValues(true)
			      //.tooltips(false)
			      //.barColor(["red"])
			      .stacked(true)
			      //.barColor(["red","green","black"])
			      .groupSpacing(0.5)
			      chart.legend.updateState(dBarData.clickAble);
			      //.showControls(false);
			
			  chart.yAxis
			      .ticks(5).tickFormat(d3.format(',%'));
			chart.duration(100);//chart enter time
			  d3.select('#'+ele+' svg')
			      .datum(data)
			      .call(chart);
			  var getValue = [];
				data.forEach(function(ele,i){
					ele.values.forEach(function(item,j){
						if(data[i].values[j].value){
							getValue.push(data[i].values[j].value);
						}
					});
				});
				if(getValue.length==0){
					resertPer();
				}
	    	$(window).resize(function(){
				if(getValue.length==0){
					resertPer();
				}
	    	})
	    	 nv.models.furiousLegend
			  nv.utils.windowResize(chart.update);
			
			  chart.dispatch.on('stateChange', function(e) {
				  nv.log('New State:', JSON.stringify(e)); 
				  perBarAddClick();
				  });
			
			  return chart;
			});
		};
		function resertPer(){
			$("#"+ele+" .nv-y.nv-axis.nvd3-svg .axis--y").remove();
			var getWidth = $("#"+ele).width()-135-20;
		    var per = d3.scale.linear()
				.domain([0,1])
				.rangeRound([0, getWidth]);
		    var yAxis = d3.svg.axis().scale(per).orient("bottom").ticks(5).tickSize(-210).tickFormat(d3.format(',%'));
		    var svg = d3.select("#"+ele+" .nv-y.nv-axis.nvd3-svg");
	    	svg.append("g")
	    	.attr("class","axis--y")
	    	.call(yAxis);
	    	$("#"+ele+" .nv-y.nv-axis.nvd3-svg .axis--y").find("path").attr("d","");
	    	$("#"+ele+" .nv-y.nv-axis.nvd3-svg .axis--y g").eq(-1).find("line").attr("y2",0);
			  
		};

		perBarAddClick();
		function perBarAddClick(){
			window.clearInterval(timeOut);
			var timeOut = setTimeout(function(){
				//$("#chart1").find(".nv-legendWrap>g>g").attr("transform","translate(0,5)");
				$("#"+ele).find(".nv-group g rect").off("click").on("click",function(a) {
					var item = Math.round(a.currentTarget.__data__.value*100)+"%";
					if(dBarData.callback){
						dBarData.callback(item);
					}
				})
				
			},250)
		}
	};
	chart.prototype.priceData = function(ele, priceData){
		var baseData = {
				data: [],
				guideline: true,
				useDates: false,
				auxOptions: {
					width: "",
					height: "",
					forceY: 0
				}
		};
		priceData = $.extend(baseData,priceData);
		var data = priceData.data;
		var guideline = priceData.guideline;
		var useDates = priceData.useDates;
		var auxOptions = priceData.auxOptions;
		var getStartDate = data[0].values[0].setDate;
		var allDataLength = data[0].values.length;
		var getEndDate = data[0].values[data[0].values.length-1].setDate;
		var lineData=[],areaData=[],showData=[];
		 data.forEach(function(val,idx){
			 val.value = idx;
			 val.content = val.key;
			 if(val.area){
				 areaData.push(val);
			 }else{
				 lineData.push(val);
			 }
		 })
		
		 //------------ CHART 1
		 defaultChartConfig(ele, showData, guideline, useDates, auxOptions);
		 
		 function defaultChartConfig(containerid, data, guideline, useDates, auxOptions) {
			 if(data.length>0){
				 if(data[0].values.length>0){
					 daysToNow = data[0].values[data[0].values.length-1].setDate;
					 daysToNow = getSetTime(daysToNow);
					 daysToNow =  Math.ceil((new Date()-new Date(daysToNow))/86400/1000);	 
				 }
			 } else{
				 daysToNow =  0;
			 }
			 
			 $("#"+containerid+">svg.nvd3-svg").empty();
			 if (auxOptions === undefined) auxOptions = {};
			 if (guideline === undefined) guideline = true;
			 nv.addGraph(function() {
			     var chart;
			     chart = nv.models.lineChart().useInteractiveGuideline(guideline);

			     chart
			     .showLegend(false)
			         .x(function(d,i) {
			           return d.x;
			         });

			     if (auxOptions.width)
			       chart.width(auxOptions.width);

			     if (auxOptions.height)
			       chart.height(auxOptions.height);

			     if (auxOptions.forceY){
			       chart.forceY([auxOptions.forceY]);//y轴从什么数值开始	 
			     } else {
			    	 chart.forceY([0])
			     }
			     	
			     var formatter;
			     if (useDates !== undefined) {
			         formatter = function(d,i) {
			                 var now = (new Date()).getTime();
			                 now = new Date(now + (d-allDataLength) * 86400 * 1000);
			                 return d3.time.format('%d/%m/%Y')(now);
			         }
			     }
			     else {
			         formatter = d3.format(",.1f");
			     }
			     chart.margin({right: 40});
			     chart.xAxis // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
			         .ticks(10).tickFormat(
			             formatter
			           );

			     chart.yAxis
			         .axisLabel('HKD')
			         .tickFormat(d3.format(',.3f'));//2位小数


			     d3.select('#' + containerid + ' svg')
			         .datum(data)
			       .transition()
			         .call(chart);

			     nv.utils.windowResize(chart.update);

			     chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

			     return chart;
			 });
			 setTitleShow();
			 function setTitleShow(){
				 if(data.length>0){
					 if(data[0].values.length>0){
						 $("#"+ele).find(".xaa-d3-price-title").remove();
						 var lenth = data[0].values.length-1;
						 var getStartDate = data[0].values[0].setDate;
						 var getEndDate = data[0].values[lenth].setDate;
						 var titleDom =	'<div class="xaa-d3-price-title col-sm-12">' +
								      		'<p class="xaa-d3-price-area">data from <span class="xaa-d3-price-startdate">'+getStartDate+'</span> to <span class="xaa-d3-price-enddate">'+getEndDate+'</span></p>' +
								      	'</div>'
						 $("#"+ele).prepend(titleDom);
						 data.forEach(function(val,idx){
							 var getLastVal = val.values[lenth].y;
							 var item = '<p><span class="xaa-d3-price-fund" style="color: '+val.color+'">'+val.key+'</span> - NAV/Unit HKD <span>'+getLastVal+'</span> as of <span class="xaa-d3-price-startdate">'+getEndDate+'</span></p>';
							 $("#"+ele).find(".xaa-d3-price-title>.xaa-d3-price-area").before(item);
						 })
					 }
				 }
			 }; 
		};
		xaa.ui.select($("#selectFund"),{
		    name : "selectFund",
		    data : lineData,
		    width: "100%",
			onChange : function(value,content){}
		})
		 var setTimeFrameData = [
			 {
				 value: "1 month",
				 content: "1 month"
			 },
			 {
				 value: "3 months",
				 content: "3 months"
			 },
			 {
				 value: "6 months",
				 content: "6 months"
			 },
			 {
				 value: "1 year",
				 content: "1 year"
			 },
			 {
				 value: "2 years",
				 content: "2 years"
			 },
			 {
				 value: "3 years",
				 content: "3 years"
			 },
			 {
				 value: "4 years",
				 content: "4 years"
			 },
			 {
				 value: "5 years",
				 content: "5 years"
			 },
			 {
				 value: "10 years",
				 content: "10 years"
			 }]
		 var setTimeFn = xaa.ui.select($("#selectTimeFrame"),{
			    name : "selectTimeFrame",
			    data : setTimeFrameData,
			    width: "105px",
				onChange : function(value,content){}
			});
		 setTimeFn.setValue(["1 month"]);
		 xaa.ui.select($("#selectSecondFund"),{
			    name : "selectSecondFund",
			    data : areaData,
			    width: "100%",
				onChange : function(value,content){}
			});
		 xaa.ui.dateInput("dateStart",{
				autoclose: true,
				orientation:"bottom left",
				todayHighlight: true,
				todayBtn: "linked",
			});
		 xaa.ui.dateInput("dateEnd",{
			autoclose: true,
			orientation:"bottom left",
			todayHighlight: true,
			todayBtn: "linked",
		 });
		 $("#"+ele).find("[data-provide='datepicker']").prop("disabled","disabled");
		 $("#"+ele).find(".xaa-data-input>input").prop("disabled","disabled");
		 $("#"+ele).find(".xaa-d3-price-reload>input").on("click",function(){
			 showData = [];
			 var getFundLine = $("#"+ele).find("#selectFund .secondSelectShow").attr("value");
			 var getFundArea = $("#"+ele).find("#selectSecondFund .secondSelectShow").attr("value");
			 var getFundTime = $("#"+ele).find("#selectTimeFrame .secondSelectShow").attr("value");
			 var numDays;
			 if(getFundLine){
				 getFundLine = parseInt(getFundLine);
				 var item = {};
				 item = $.extend({},data[getFundLine]);
				 showData.push(item);
			 }
			 if(getFundArea){
				 getFundArea = parseInt(getFundArea);
				 var item1 = {};
				 item1 = $.extend({},data[getFundArea]);
				 showData.push(item1);
			 }
			 var $eleCheckedIpt = $("#"+ele).find(".xaa-radio-box input:checked");
			 if($eleCheckedIpt.parents(".xaa-radio-box").attr("class").match("xaa-d3-radio-select")){
				 var getSelectTimeVal =  $("#"+ele).find("#selectTimeFrame .secondSelectShow").attr("value");
				 numDays = getSelectTime(getSelectTimeVal);
				 showData.forEach(function(val,idx){
					 val.values = val.values.slice(-numDays);
				 });
			 } else {
				 var getSelectTimeStart = $("#"+ele).find("#dateStart input[name=time]").val();
				 var getSelectTimeEnd = $("#"+ele).find("#dateEnd input[name=time]").val();
				 getSelectTimeStart = getSetTime(getSelectTimeStart);
				 getSelectTimeEnd = getSetTime(getSelectTimeEnd);
				 var getSetTimeVal = new Date(getSelectTimeEnd) -new Date(getSelectTimeStart);
				 var getSetTimeToNow = new Date() -new Date(getSelectTimeEnd);
				 numDays = getSetTimeVal/(86400 * 1000)+1;
				 numDaysToNow = Math.floor(getSetTimeToNow/(86400 * 1000));
				 showData.forEach(function(val,idx){
					 val.values = val.values.slice(-numDays-numDaysToNow,-numDaysToNow);
				 });
			 }
			 if(numDays&&numDays>0){
				 defaultChartConfig(ele, showData, guideline, useDates, auxOptions); 
			 }
			 if(showData.length>0){
				 if(showData[0].values.length>0) {
					 setLegend(showData);
					 showPerformance(showData);
				 }
			 }
		 });
		 $("#"+ele).find(".xaa-d3-radio-select").off("click").on("click",function() {
			 $("#"+ele).find("[data-provide='datepicker']").attr("disabled","disabled");
			 $("#"+ele).find(".xaa-data-input>input").attr("disabled","disabled");
			 setTimeFn.disabled(false);
		 })
		 $("#"+ele).find(".xaa-d3-radio-set").off("click").on("click",function() {
			 $("#"+ele).find("[data-provide='datepicker']").removeAttr("disabled");
			 $("#"+ele).find(".xaa-data-input>input").removeAttr("disabled");
			 setTimeFn.disabled(true);
		 })
		 
		 if(showData.length>0){
			 setLegend(showData);
			 showPerformance(showData);
		 }
		 function setLegend(showData){
			 $("#"+ele+">.chart").find(".xaa-d3-price-legend").remove();
			 var legendContainer = '<div class="row xaa-d3-price-legend xaa-form-marginB2"></div>';
			 $("#"+ele+">.chart").append(legendContainer);
			 showData.forEach(function(val,idx){
				 var tb = '<div class="col-sm-6"><table>' +
							  	'<tr><td rowspan="4"><svg width="20" height="6"><rect width="20" height="2" fill="'+
							  	val.color+
							  	'"></rect></svg></td><td colspan="2">'+
							  	val.key+
							  	'</td>'+
							  	'</tr>'+
							  	'<tr><td>Change%</td>'+
							  	'<td>'+val.changeRate+'</td>'+
							  	'</tr>'+
							  	'<tr><td>Launch Date</td>'+
							  	'<td>'+val.launchDate+'</td>'+
							  	'</tr>'+
							  	'<tr><td>Launch Price</td>'+
							  	'<td>'+val.launchPrice+'</td>'+
							  	'</tr>'+
						  '</table></div>';
				 $("#"+ele+">.chart").find(".xaa-d3-price-legend").append(tb);
			 })
		 };
		 function showPerformance(showData){
			 $("#"+ele+">.chart").find(".xaa-d3-performance").remove();
			 var legendContainer = '<div class="row xaa-d3-performance  xaa-form-marginB2"></div>';
			 $("#"+ele+">.chart").append(legendContainer);
			 showData.forEach(function(val,idx){
				 var tr="";
				 val.yearData.forEach(function(dt,i){
					 tr += '<tr><td>'+dt.year+'</td>'+
							  	  '<td>'+dt.performance+'</td>'+
							  '</tr>';

				 })
				 var tb = '<div class="col-sm-6"><table class="xaa-d3-performance-table">' +
							  	'<tr><td colspan="2">Calendar Year Performance(%)***</td></tr>'+
							  	tr+
						  '</table></div>';
				 $("#"+ele+">.chart").find(".xaa-d3-performance").append(tb);
			 })
		 };
		 function getSelectTime(getSelectTimeVal){
			 var getNow = (new Date()).getTime();
			 var getNowYear = (new Date()).getFullYear();
			 var getNowMonth = (new Date()).getMonth()+1;
			 var getNowDate = (new Date()).getDate();
			 var getStartYear = getNowYear;
			 var getStartMonth = getNowMonth;
			 var getStartDate = getNowDate;
			 if(getSelectTimeVal.match("year")){
				 getStartYear = getNowYear - parseInt(getSelectTimeVal);
				 if(getNowMonth==2&&getNowDate==29){
					 getStartDate = getStartDate-1;
				 };
			 } else { 
				 getStartMonth = getNowMonth - parseInt(getSelectTimeVal);
				 if(getStartMonth<=0){
					 var getStartYear = getNowYear-1;
					 getStartMonth = 12+getStartMonth;
				 }
				 var newDate = getStartYear+"/"+getStartMonth+"/"+1;
				 var getStartMonthDays = getCountDays(newDate);
				 if(getStartMonthDays<getStartDate){
					 getStartDate = getStartMonthDays;
				 }
			 };
			 var startDate = getStartYear+"/"+getStartMonth+"/"+getStartDate;
			 startDate = (new Date(startDate)).getTime();
			 var numDays = Math.ceil((getNow-startDate)/(86400 * 1000));
			 return numDays;
		 }
		 function getSetTime(getSetTime){
			 var arr = [];
			 if(getSetTime.match("-")){
				 arr = getSetTime.split("-");
			 } else if(getSetTime.match("/")){
				 arr = getSetTime.split("/");
			 }
			 arr = arr.reverse();
			 getSetTime = arr.join("/");
			 return getSetTime;
		 }
		 //Choose a month and know how many days in this month;
		 function getCountDays(curDate){
			 var curDate = new Date(curDate);
			 var curMonth = curDate.getMonth();
			 curDate.setMonth(curMonth+1);
			 curDate.setDate(0);
			 return curDate.getDate();
		 }
	};
	xaa.addModule("chart", new chart());
})(window, $, xaa);
