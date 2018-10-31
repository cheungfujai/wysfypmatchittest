(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = function(){};
	var priceChart = function() {
		this.defaultCfg = defaultCfg();
	};
	priceChart.prototype.price = function(containerid, priceData){
		 //------------ CHART 1
		var chart;
			var baseData = {
					data: [],
					guideline: true,
					xFormatter: function(d,i){ return d3.time.format('%d/%m/%Y')(new Date(d));},
            		yFormatter: d3.format(',.3f'),
					yAxisLabel: "HKD",
					showLegend: false,
					margin: {right: 0, left:0, top:0, bottom:0},
					auxOptions: {
						forceY: 0
					}
			};
			priceData = $.extend(baseData,priceData);
			var data = [];
			priceData.data.forEach(function(val,idx){
				var item = {};
				item = $.extend({},val);
				data.push(item);
			})
			var guideline = priceData.guideline;
			var useDates = priceData.useDates;
			var auxOptions = priceData.auxOptions;
			 if(data.length>0&&data[0].values.length>0){
				var getStartDate = data[0].values[0].setDate;
				var getEndDate = data[0].values[data[0].values.length-1].setDate;
				var arrColor = [];
				data.forEach(function(val,idx){
					if(val.color){
						arrColor.push(val.color); 	
					} else {
						arrColor.push(d3.scale.category20().range()[idx]); 	
					}
				})
				 if(data[0].values.length>0){
					 daysToNow = data[0].values[data[0].values.length-1].setDate;
					 daysToNow = getSetTime(daysToNow);
					 daysToNow =  Math.floor((new Date()-new Date(daysToNow))/86400/1000);	 
				 }
			 } else{
				 daysToNow =  0;
			 }
			 //$("#"+containerid+">svg.nvd3-svg").empty();
			 if (auxOptions === undefined) auxOptions = {};
			 if (guideline === undefined) guideline = true;
			 nv.addGraph(function() {
			     chart = nv.models.lineChart().useInteractiveGuideline(guideline);

			     chart
			     .showLegend(priceData.showLegend)
			         .x(function(d,i) {
			           return new Date(d.setDate);
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
			     if (priceData.xFormatter) {
			         formatter = priceData.xFormatter
			     }else {
			         formatter = d3.format(",.1f");
			     }
			     if(arrColor&&arrColor.length>0){
			    	 chart.color(arrColor);
			     }
			     chart.margin(priceData.margin);
			     chart.xAxis.rotateLabels(-30) // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
			         .ticks(10).tickFormat(
			             formatter
			           );
			     chart.yAxis
			         .axisLabel(priceData.yAxisLabel)
			         .tickFormat(priceData.yFormatter);//3位小数


			     d3.select('#' + containerid + ' svg')
			         .datum(data)
			       .transition()
			         .call(chart);

			     nv.utils.windowResize(chart.update);

			     chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

			     return chart;
			 });
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
			 };
			 if(priceData.callBack){
				 setTimeout(function(){
					 priceData.callBack(data,chart)
				 },0)
			 };

	};
	xaa.addModule("priceChart", new priceChart());
})(window, $, xaa);
