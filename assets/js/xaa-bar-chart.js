(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = function(){};
	var barChart = function() {
		this.defaultCfg = defaultCfg();
	};
	barChart.prototype.dbar = function(ele, dBarData){
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
				var height = $("#"+ele+">svg").height();
			  var chart = nv.models.multiBarHorizontalChart()
			      .x(function(d) { return d.label })
			      .y(function(d) { return d.value })
			      .height(height-20)
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
					resertPer(height);
				}
	    	$(window).resize(function(){
				if(getValue.length==0){
					resertPer(height);
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
		function resertPer(height){
			$("#"+ele+" .nv-y.nv-axis.nvd3-svg .axis--y").remove();
			var getWidth = $("#"+ele).width()-135-20;
		    var per = d3.scale.linear()
				.domain([0,1])
				.rangeRound([0, getWidth]);
		    var yAxis = d3.svg.axis().scale(per).orient("bottom").ticks(5).tickSize(50-height).tickFormat(d3.format(',%'));
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
	xaa.addModule("barChart", new barChart());
})(window, $, xaa);
