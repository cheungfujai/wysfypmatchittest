$(document).ready(function() {
	var industrialEle = document.getElementById("industrial");
	showEchart(industrialEle, 'bar', '#1ccc18', [12, 25, 35, 42, 27, 20, 8, 48, 30]);
	
	var indexEle = document.getElementById("index");
	showEchart(indexEle, 'bar', '#ed171f', [12, 32, 35, 24, 48, 35, 46, 24, 50]);
	
	var pendingEle = document.getElementById("pending");
	var callList1 = document.getElementById("callList1");
	showEchartList(callList1);
	var callList2 = document.getElementById("callList2");
	showEchartList(callList2);
	var callList3 = document.getElementById("callList3");
	showEchartList(callList3);
	function showEchart(ele, type, eColor, eData) {
		var myChart = echarts.init(ele);
		myChart.setOption({
			title: {
				text: ''
			},
			tooltip: {},
			grid: {
				x: 0,
				y: 15,
				x2: 20,
				y2: 20
			},
			xAxis: {
				show:false,
				data:[]
			},
			yAxis: {
				show: false
			},
			radius: '100%',
			series: [{
				name: '',
				type: type,
				itemStyle: {
					normal: {
						color: eColor
					}
				},
				data: eData
			}],
			barWidth: 5,
		});
	}
	
	var myChart = echarts.init(pendingEle);
	myChart.setOption({
		title: {
			text: ''
		},
		series: [{
			name: 'seriesData',
			center: ["30%", "50%"],
			avoidLabelOverlap: false,
			radius: ['40%', '60%'],
			type: 'pie',
			y: '55%',
			x: '80%',
			label: {
				normal: {
					show: false,
					position: 'center'/*,
					formatter: "{d}%\n{b}"*/
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [
			{
				name: 'Agree',
				value: 60,
				itemStyle: {
					normal: {
						show: true,
						color: '#b70007'
					}
				}
			},
			{
				name: 'other',
				value: 40,
				itemStyle: {
					normal: {
						color: '#fc8d18'
					},
					emphasis: {
						color: '#fc8d18',
					}
				}
			}
			]
		}],
	});
		
	function showEchartList(ele) {
        var myChartList = echarts.init(ele);
		myChartList.setOption({
			tooltip: {
				trigger: 'item',
				formatter: "{a}<br/>{b}:{c}({d}%)"
			},
			legend: {
				orent: 'vertical',
				x: 'center',
				right: 0,
				width: 100,
				itemWidth: 15,
				itemHeight: 15,
				itemGap: 8,
				data: ['Success','Failed','Outstanding']
			},
			series: [{
				name: '',
				center: ["50%", "40%"],
				radius: ["40%", "60%"],
				avoidLabelOverlap: false,
				type: 'pie',
				y: '55%',
				x: '80%',
				label: {
					normal: {
						show: false,
						position: 'center',
						formatter: "{d}%\n{b}"
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '12',
							fontWeight: 'bold'
						}
					}
				},
				tooltip: {
					show: false,
					trigger: 'item',
					formatter: "{a}<br/>{b}:{c}({d}%)"
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [
				{
					name: 'Failed',
					value: 50,
					itemStyle: {
						normal: {
							color: '#ed171f'
						}
					}
				},
				{
					name: 'Outstanding',
					value: 16,
					itemStyle: {
						normal: {
							color: '#b70007'
						}
					}
				},
				{
					name: 'Success',
					value: 34,
					itemStyle: {
						normal: {
							color: '#fc8d18'
						}
					}
				}
				]
			}],
		});
	}	
	
    setTableChose();
	
});