////////////////////////////////////////////////////////////////////////
// JQUERY PLUGIN
// Auto convert input text to upper case
////////////////////////////////////////////////////////////////////////
(function($) {
  //Create plugin named Setcase
 $.fn.Setcase = function(settings) { 
        // Defaults
		var config = {
			caseValue: 'upper',
			changeonFocusout: false
		};
		
		//Merge settings
		if(settings) $.extend(config, settings);
		
	this.each(function() {
		// keyup event
		if(config.changeonFocusout == false)
		{
			$(this).keyup(function(e){
				
				// original caret position
				var pos = $(this).caret();
				
				// conversion
				if(config.caseValue == "upper")
				{
					var currVal = $(this).val();
					$(this).val(currVal.toUpperCase());
				}
				else if(config.caseValue == "title")
				{
					var currVal = $(this).val();
					$(this).val(currVal.charAt(0).toUpperCase() + currVal.slice(1).toLowerCase());
				}
				else if(config.caseValue == "pascal")
				{
					var currVal = $(this).val();
					currVal = currVal.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
						return txtVal.toUpperCase();
					});
					$(this).val(currVal);
				}
				
				// restore caret position
				$(this).caret(pos);
				
			});
		}
//      //blur event		
//	    $(this).blur(function(){
//	    });
	});
 };
})(jQuery);


(function(window, $, xaa) {
	var defaultConfig=function() {
		this.msg="alert infomation";
		this.minWidth=false;
		this.maxWidth=false;
		this.callback="ui info";
	}
	//set constructor
	var ui = function() {
		this.defaultConfig = defaultConfig();
	}
	
	ui.prototype.range = function(ele,obj) {
		if(ele.find(".xaa-range-slider").length<1){
		
		var rangeShow = '<div class="xaa-range-slider">' +
							'<div class="xaa-range-slider-bg">'+
								'<div class="xaa-range-slider-style xaa-range-slider-bg1">'+
									'<div class="xaa-range-slider-bt1"></div>'+
								'</div>'+
								'<div class="xaa-range-slider-style xaa-range-slider-bg2">'+
									'<div class="xaa-range-slider-bt2"></div>'+		
								'</div>'+
							'</div>'+
						'</div>';
		ele.append(rangeShow);
		
		var obj = $.extend({
				minLeft : 0,
			    maxRight : 100,
			    curLeft : 0,
			    curRight : 0,
			    showLeftVal : false,
			    showRightVal : false,
			    onChange : false,
			    speed : 10,
			    speeds: null,
			    width : "100%",
			    setNode:[],
			    showScale: false,
			    showValFormat: "",
			    rangeToSetNode: false,
			    singleModal : false
			},obj)
		if(!obj.curLeft&&obj.minLeft)
			obj.curLeft = obj.minLeft;
		if(!obj.speeds){
			if(!obj.curRight&&obj.maxRight)
				obj.curRight = obj.maxRight;			
		} else {
			obj.maxRight = obj.minLeft;
			obj.speeds.forEach(function(val,idx){
				obj.maxRight += val.speed*val.interval
			})
		}
		var $box = ele.find('.xaa-range-slider');
		var $bg = ele.find('.xaa-range-slider-bg');
		var $bg1 = ele.find('.xaa-range-slider-bg1');
		var $bg2 = ele.find('.xaa-range-slider-bg2');
		var $btn1 = ele.find('.xaa-range-slider-bt1');
		var $btn2 = ele.find('.xaa-range-slider-bt2');
		//var $text1 = ele.find('.xaa-range-slider-text1');
		//var $text2 = ele.find('.xaa-range-slider-text2');
		var statu1 = false;
		var statu2 = false;
		$bg.css("width",obj.width);
		var getBgWidth = $bg.width();
		var ox = 0;
		var lx = 0;
		var left1,left2;
		var newSetNode = [];
		var scaleFactor;
		var setNodeSpace = [];
		var setNodeSpaceMid = [];
		if(obj.speeds) {
			obj.setNode = [];
			obj.rangeToSetNode = true;
			obj.speed = null;
			var nodeNum = 0;
			obj.maxRight = obj.minLeft;
			obj.speeds.forEach(function(val,idx){
				for(var i=0;i<val.interval;i++){
					newSetNode.push(obj.maxRight+val.speed*(i+1)) ;
				}
				obj.maxRight += val.speed*val.interval;
				nodeNum += val.interval;
			});
		} else {
			newSetNode = obj.setNode;
		};
		scaleFactor = (obj.maxRight-obj.minLeft)/getBgWidth;		
		if(obj.curRight<=obj.curLeft){
			obj.curRight=obj.curLeft;
		};
		function resetPer(item){
			var stepThatNodeNum;
			item = (item+"").replace(/,/g,"");
			item = item-obj.minLeft;
			if(obj.speed){
				var item = (parseInt(item/obj.speed)+(item%obj.speed?1:0))*obj.speed + obj.minLeft;
				var per = ((item-obj.minLeft)/(obj.maxRight-obj.minLeft)*100+"%");				
			} else {
				var stepMaxVal = obj.minLeft,stepMaxNodeNum = 0;
				$.each(obj.speeds,function(idx,val){
					stepMaxVal += val.speed*val.interval;
					if(stepMaxVal>=item){
						stepThatNodeNum = parseInt((item-(stepMaxVal-val.speed*val.interval))/val.speed)+((item-(stepMaxVal-val.speed*val.interval))%val.speed?1:0);
						item = stepThatNodeNum*val.speed+stepMaxVal-val.speed*val.interval;
						return false;
					}
					stepMaxNodeNum += val.interval;
				})
				var per = ((stepMaxNodeNum+stepThatNodeNum)/nodeNum)*100+"%";							
			}
			return {per:per,item:item};
		};
		// set node Arr;

		if(newSetNode.length>0){
			if(obj.setNode.length){
				if(obj.setNode[0]!= obj.minLeft){
					newSetNode.unshift(obj.minLeft);
				};
				if(obj.setNode[obj.length-1]!= obj.maxRight){
					newSetNode.push(obj.maxRight);
				}
			} else {
				newSetNode.unshift(obj.minLeft);
			}
			newSetNode.forEach(function(val,idx){
				if(idx>=1){
					var item = newSetNode[idx]- newSetNode[idx-1];
					var midItem = item/2+newSetNode[idx-1];
					setNodeSpace.push(item);
					setNodeSpaceMid.push(midItem);
				}
			})	
			if(obj.showScale){
				var setNodeDom = '<div class="xaa-range-setnode"></div>';
				$bg.append(setNodeDom);
				newSetNode.forEach(function(val,idx){
					var setNodeDomItem = '<div class="xaa-range-setnode-item"></div>';
					$bg.find(".xaa-range-setnode").append(setNodeDomItem);
				});
				if(obj.speeds){
					$bg.find(".xaa-range-setnode-item").each(function(i){
						var setNodeItemPosition = i/nodeNum*100+"%"
						$(this).css("left",setNodeItemPosition);
					})
				} else {
					$bg.find(".xaa-range-setnode-item").each(function(i){
						var setNodeItemPosition = (newSetNode[i]-obj.minLeft)/(obj.maxRight-obj.minLeft)*100+"%"
						$(this).css("left",setNodeItemPosition);
					})
				}
			}
		}
		if(!obj.rangeToSetNode){
			obj.curLeft = resetPer(obj.curLeft).item
			obj.curRight = resetPer(obj.curRight).item
			var leftPer1 = resetPer(obj.curLeft).per;
			var leftPer2 =  resetPer(obj.curRight).per;
		} else {
			obj.curLeft = resetNodePer(obj.curLeft).item
			obj.curRight = resetNodePer(obj.curRight).item
			var leftPer1 = resetNodePer(obj.curLeft).per;
			var leftPer2 =  resetNodePer(obj.curRight).per;
		};
		if(obj.showLeftVal){
			var stringCurLeft = setMoneyFormat(obj.curLeft,3)
			obj.showLeftVal(stringCurLeft);
		};
		if(obj.showRightVal){
			var stringCurRight = setMoneyFormat(obj.curRight,3);
			obj.showRightVal(stringCurRight);
		}
		if(obj.bindLeft) {
			$("#" + obj.bindLeft).val(setMoneyFormat(obj.curLeft,3));
		};

		if(obj.bindRight) {
			$("#" + obj.bindRight).val(setMoneyFormat(obj.curRight,3));
		};

		function resetNodePer(item) {
			item = (item+"").replace(/,/g,"");
			setNodeSpaceMid.forEach(function(val,idx){
				if(idx>=1){
					if(item>=setNodeSpaceMid[idx-1]&&item<setNodeSpaceMid[idx]){
						item = setNodeSpaceMid[idx-1]+setNodeSpace[idx-1]/2
					}
					if(idx==setNodeSpaceMid.length-1){
						if(item>=setNodeSpaceMid[idx]){
							item = obj.maxRight;
						}
					}
					
				} else {
					if(item<setNodeSpaceMid[idx]){
						item = obj.minLeft;
					}
				}
			})	
			if(obj.speeds){
				var stepThatNodeNum;
				var stepMaxVal = obj.minLeft,stepMaxNodeNum = 0;
				$.each(obj.speeds,function(idx,val){
					stepMaxVal += val.speed*val.interval;
					if(stepMaxVal>=item){
						stepThatNodeNum = parseInt((item-(stepMaxVal-val.speed*val.interval))/val.speed)+((item-(stepMaxVal-val.speed*val.interval))%val.speed?1:0);
						item = stepThatNodeNum*val.speed+stepMaxVal-val.speed*val.interval;
						return false;
					}
					stepMaxNodeNum += val.interval;
				})
				var per = ((stepMaxNodeNum+stepThatNodeNum)/nodeNum)*100+"%";
			} else {
				var per = ((item-obj.minLeft)/(obj.maxRight-obj.minLeft)*100+"%");
			}
			return {per:per,item:item};
		};
		$bg1.css("left",leftPer1);
		$bg2.css("left",leftPer2);
		if(obj.bindLeft) {
			if(!obj.rangeToSetNode){
				obj.curLeft = resetPer(obj.curLeft).item;	
			} else {
				obj.curLeft = resetNodePer(obj.curLeft).item;	
			}
			$("#"+ obj.bindLeft).val(setMoneyFormat(obj.curLeft,3));
			$("#"+ obj.bindLeft).blur(function() {
				var val1 = $(this).val().replace(/,/g,"");
				var val2 = $("#"+ obj.bindRight).val().replace(/,/g,"");
				val1 = parseFloat(val1);
				val2 = parseFloat(val2);
				if(!isNaN(val1)) {
					if(obj.minLeft <= val1 && val1<val2) {
						if(!obj.rangeToSetNode){
							var dValue = val1-obj.minLeft;
							dValue = setDevideStep(dValue);
						} else {
							var dValue = resetNodePer(val1).item-obj.minLeft;
						}
						if(obj.speeds){
							leftPer1 = resetNodePer(val1).per;
						} else {
							left1 = parseFloat(dValue/scaleFactor);
							//left1 = devideStep(left1);						
							leftPer1 = left1/getBgWidth*100+"%";						
						}
						$bg1.css('left',leftPer1);
						obj.curLeft = dValue+obj.minLeft;
						$(this).val(setMoneyFormat(obj.curLeft,3));
						//$text1.find("input[type=text]").val(left1*scaleFactor+obj.minLeft);	

					} else if(obj.minLeft >= val1){
						left1 = 0;
						leftPer1 = left1/getBgWidth*100+"%";
						$bg1.css('left',leftPer1);
						obj.curLeft = obj.minLeft;
						$(this).val(setMoneyFormat(obj.curLeft,3));
					} else if(val1>=val2){
						obj.curLeft = obj.curRight;
						leftPer1 = leftPer2;
						$bg1.css('left',leftPer1);
						$(this).val(setMoneyFormat(obj.curLeft,3));
					};
				} else {
					$(this).val(setMoneyFormat(obj.curLeft,3));
				};
			});
		};
		if(obj.bindRight) {
			if(!obj.rangeToSetNode){
				obj.curRight = resetPer(obj.curRight).item;	
			} else {
				obj.curRight = resetNodePer(obj.curRight).item;	
			}
			$("#"+ obj.bindRight).val(setMoneyFormat(obj.curRight,3));
			$("#"+ obj.bindRight).blur(function() {
				var val2 = $(this).val().replace(/,/g,"");
				var val1 = $("#"+ obj.bindLeft).val().replace(/,/g,"");
				if(parseFloat(val2)>obj.minLeft){
					var otherVal2 = val2.replace(parseFloat(val2),"");
				} else {
					var otherVal2 = "" ;
				}
				val1 = parseFloat(val1);
				val2 = parseFloat(val2);
				if(!isNaN(val2)) {
					if(obj.maxRight > val2 && val2>val1) {
						if(!obj.rangeToSetNode){
							var dValue = val2-obj.minLeft;
							dValue = setDevideStep(dValue);
						} else {
							var dValue = resetNodePer(val2).item-obj.minLeft;
						}
						if(obj.speeds){
							leftPer2 = resetNodePer(val2).per;
						} else {
							left2 = parseFloat((dValue)/scaleFactor);
							//left2 = devideStep(left2);						
							leftPer2 = left2/getBgWidth*100+"%";
						}
						$bg2.css('left',leftPer2);
						obj.curRight = dValue+obj.minLeft;
						$(this).val(setMoneyFormat(obj.curRight,3)+otherVal2);
						//$text2.find("input[type=text]").val(left2*scaleFactor+obj.minLeft);
					} else if(obj.maxRight <= val2){
						left2 = parseInt((obj.maxRight-obj.minLeft)/scaleFactor);;
						leftPer2 = "100%";
						$bg2.css('left',leftPer2);
						obj.curRight = obj.maxRight;
						$(this).val(setMoneyFormat(obj.curRight,3)+otherVal2);
					} else if(val1>=val2){
						obj.curRight = obj.curLeft;
						leftPer2 = leftPer1;
						$bg2.css('left',leftPer2);
						$(this).val(setMoneyFormat(obj.curRight,3)+otherVal2);
					};
				} else {
					$(this).val(setMoneyFormat(obj.curRight,3)+otherVal2);
				};
			});
		};
		var devideNum = (obj.maxRight-obj.minLeft)/obj.speed;
		var barDevide = getBgWidth/devideNum;
		$(window).resize(function(){
			getBgWidth = $bg.width();
			scaleFactor = (obj.maxRight-obj.minLeft)/getBgWidth;
			barDevide = getBgWidth/devideNum;
		});

		function setDevideStep(val) {
			var leftFloor = Math.ceil(val/obj.speed);
			return leftFloor*obj.speed>(obj.maxRight-obj.minLeft)?obj.maxRight-obj.minLeft:leftFloor*obj.speed;
		}
		function devideStep(val) {
			var leftFloor = Math.floor(val/barDevide);
			var leftRemainder = val%barDevide;
			return leftRemainder*2>=barDevide?(leftFloor+1)*barDevide:leftFloor*barDevide;
		}
		function devideNode(val) {
			if(obj.speeds){
				var nodeThatNum = val/getBgWidth*nodeNum;
				var getNodePosition = obj.minLeft,stepMaxNodeNum = 0;
				$.each(obj.speeds,function(idx,val){
					stepMaxNodeNum += val.interval;
					if(stepMaxNodeNum>=nodeThatNum){
						getNodePosition =getNodePosition + (nodeThatNum-(stepMaxNodeNum-val.interval))*val.speed;
						return false;
					}
					getNodePosition += val.speed*val.interval;
				})
				return {per:resetNodePer(getNodePosition).per,leftSpace:parseFloat(resetNodePer(getNodePosition).per)*getBgWidth/100};
			} else {
				var getNodePosition = val/getBgWidth*(obj.maxRight-obj.minLeft)+obj.minLeft;
				return {per:resetNodePer(getNodePosition).per,leftSpace:parseFloat(resetNodePer(getNodePosition).per)/100*getBgWidth};
			}
		};
		if(obj.singleModal && obj.singleModal==true){
			$bg1.css("left",0);
			obj.curLeft = 0;
			$btn1.css("visibility","hidden");
			$btn2.css("margin-left","-10px");
		} else {
			$btn1.off("mousedown").on("mousedown",function(event){
				lx = $btn1.offset().left;
				ox = event.pageX -  lx;
				var mousedownClientXLeft = event.clientX;
				statu1 = true;
				$("body").attr("onselectstart","return false");
					$(document).mousemove(function(event){
						if(statu1){
							var mousemoveClientXLeft = event.clientX;
							var lxNew = event.pageX+parseInt($btn1.css("width")) -ox;
							left1 = lxNew - $bg.offset().left;
							if(newSetNode.length>0){
								for(var i=0;i<newSetNode.length;i++){
									if(mousemoveClientXLeft>mousedownClientXLeft){
										if(newSetNode[i]>obj.curLeft){
											if(obj.speeds){
												var newSetNodeLeft = (i-1)/nodeNum*getBgWidth;
												var newSetNodeRight = i/nodeNum*getBgWidth;
												break;
											} else {
												var newSetNodeLeft = (newSetNode[i-1]-obj.minLeft)/scaleFactor;
												var newSetNodeRight = (newSetNode[i]-obj.minLeft)/scaleFactor;
												break;
											}
										}	
									}else {
										if(newSetNode[i]>=obj.curLeft){
											if(obj.speeds){
												var newSetNodeLeft = (i-1)/nodeNum*getBgWidth;
												var newSetNodeRight = i/nodeNum*getBgWidth;
												break;
											} else {
												var newSetNodeLeft = (newSetNode[i-1]-obj.minLeft)/scaleFactor;
												var newSetNodeRight = (newSetNode[i]-obj.minLeft)/scaleFactor;
												break;
											}
										}	
									}
								}	
										if(Math.abs(newSetNodeLeft-left1)<=15&&Math.abs(newSetNodeRight-left1)>15){
											if(obj.curLeft<obj.curRight){
												obj.curLeft = newSetNode[i-1];
												if(obj.speeds){
													leftPer1 = resetNodePer(obj.curLeft).per;
													left1 = getBgWidth*leftPer1;
												} else {
													left1 = (obj.curLeft-obj.minLeft)/scaleFactor;
													leftPer1 = left1/getBgWidth*100+"%";			
												}
											}
										} else if(Math.abs(newSetNodeLeft-left1)>15&&Math.abs(newSetNodeRight-left1)<=15) {
											if(obj.curLeft<obj.curRight){
												obj.curLeft = newSetNode[i];
												if(obj.speeds){
													leftPer1 = resetNodePer(obj.curLeft).per;
													left1 = getBgWidth*leftPer1;
												} else {
													left1 = (obj.curLeft-obj.minLeft)/scaleFactor;
													leftPer1 = left1/getBgWidth*100+"%";
												}
											}
										} else if(Math.abs(newSetNodeLeft-left1)<=15&&Math.abs(newSetNodeRight-left1)<=15){
											if(obj.curLeft<obj.curRight){
												if(Math.abs(newSetNodeLeft-left1)<Math.abs(newSetNodeRight-left1)){
													obj.curLeft = newSetNode[i-1];
													if(obj.speeds){
														leftPer1 = resetNodePer(obj.curLeft).per;
														left1 = getBgWidth*leftPer1;
													} else {
														left1 = (obj.curLeft-obj.minLeft)/scaleFactor;
														leftPer1 = left1/getBgWidth*100+"%";
													};
												} else {
													obj.curLeft = newSetNode[i];
													if(obj.speeds){
														leftPer1 = resetNodePer(obj.curLeft).per;
														left1 = getBgWidth*leftPer1;
													} else {
														left1 = (obj.curLeft-obj.minLeft)/scaleFactor;
														leftPer1 = left1/getBgWidth*100+"%";
													};
												}
											}
										} else {
											rangeLeftBtn(left1)
										}
							} else {
								rangeLeftBtn(left1);
							}
							$bg1.css('left',leftPer1);
							if(obj.onChange) {
								obj.onChange(obj.curLeft,obj.curRight);
							};
							if(obj.showLeftVal) {
								var stringCurLeft = setMoneyFormat(obj.curLeft,3)
								obj.showLeftVal(stringCurLeft);
							};		
							if(obj.bindLeft) {
								$("#" + obj.bindLeft).val(setMoneyFormat(obj.curLeft,3));
							};

						
						}
					});					
			});			
		};
		
		$btn2.off("mousedown").on("mousedown",function(event){
			lx = $btn2.offset().left;
			//debugger;
			ox = event.pageX -  lx;
			var mousedownClientXRight = event.clientX;
			statu2 = true;
			$("body").attr("onselectstart","return false");
				$(document).mousemove(function(event){
					if(statu2){
						var lxNew = event.pageX-ox;
						var mousemoveClientXRight = event.clientX;
						left2 = lxNew - $bg.offset().left;
						if(newSetNode.length>0){
							for(var i=0;i<newSetNode.length;i++){
								if(mousemoveClientXRight>mousedownClientXRight){
									if(newSetNode[i]>obj.curRight){
										if(obj.speeds){
											var newSetNodeLeft = (i-1)/nodeNum*getBgWidth;
											var newSetNodeRight = i/nodeNum*getBgWidth;
											break;
										} else {
											var newSetNodeLeft = (newSetNode[i-1]-obj.minLeft)/scaleFactor;
											var newSetNodeRight = (newSetNode[i]-obj.minLeft)/scaleFactor;
											break;
										}
									}
								}else {
									if(newSetNode[i]>=obj.curRight){
										if(obj.speeds){
											var newSetNodeLeft = (i-1)/nodeNum*getBgWidth;
											var newSetNodeRight = i/nodeNum*getBgWidth;
											break;
										} else {
											var newSetNodeLeft = (newSetNode[i-1]-obj.minLeft)/scaleFactor;
											var newSetNodeRight = (newSetNode[i]-obj.minLeft)/scaleFactor;
											break;
										}
									}
								}
							}
							if(Math.abs(newSetNodeLeft-left2)<=15&&Math.abs(newSetNodeRight-left2)>15){
								if(obj.curLeft<obj.curRight){
									obj.curRight = newSetNode[i-1];
									if(obj.speeds){
										leftPer1 = resetNodePer(obj.curLeft).per;
										left1 = getBgWidth*leftPer1;
									} else {
										left2 = (obj.curRight-obj.minLeft)/scaleFactor;
										leftPer2 = left2/getBgWidth*100+"%";
									}
								}
							} else if(Math.abs(newSetNodeLeft-left2)>15&&Math.abs(newSetNodeRight-left2)<=15) {
								if(obj.curLeft<obj.curRight){
									obj.curRight = newSetNode[i];
									if(obj.speeds){
										leftPer1 = resetNodePer(obj.curLeft).per;
										left1 = getBgWidth*leftPer1;
									} else {
										left2 = (obj.curRight-obj.minLeft)/scaleFactor;
										leftPer2 = left2/getBgWidth*100+"%";
									}
								}
							} else if(Math.abs(newSetNodeLeft-left2)<=15&&Math.abs(newSetNodeRight-left2)<=15){
								if(obj.curLeft<obj.curRight){
									if(Math.abs(newSetNodeLeft-left2)<Math.abs(newSetNodeRight-left2)){
										obj.curRight = newSetNode[i-1];
										if(obj.speeds){
											leftPer1 = resetNodePer(obj.curLeft).per;
											left1 = getBgWidth*leftPer1;
										} else {
											left2 = (obj.curRight-obj.minLeft)/scaleFactor;
											leftPer2 = left2/getBgWidth*100+"%";
										}
									} else {
										obj.curRight = newSetNode[i];
										if(obj.speeds){
											leftPer1 = resetNodePer(obj.curLeft).per;
											left1 = getBgWidth*leftPer1;
										} else {
											left2 = (obj.curRight-obj.minLeft)/scaleFactor;
											leftPer2 = left2/getBgWidth*100+"%";
										}
									}
								}
							} else {
								rangeRightBtn(left2)
							}
						} else {
							rangeRightBtn(left2);
						}
						$bg2.css('left',leftPer2);				
						if(obj.onChange) {
							obj.onChange(obj.curLeft,obj.curRight);
						};
						if(obj.showRightVal) {
							var stringCurRight = setMoneyFormat(obj.curRight,3);
							obj.showRightVal(stringCurRight);
						};
						if(obj.bindRight) {
							$("#" + obj.bindRight).val(setMoneyFormat(obj.curRight,3));
						};
					
					}
				});		
			/*},100);*/
		});
		$(document).mouseup(function(){
			$("body").removeAttr("onselectstart");
			statu1 = false;
			statu2 = false;
			});
		}
		function rangeLeftBtn(leftPosition){
			if(!obj.rangeToSetNode) {
				leftPosition = devideStep(leftPosition);						
				leftPer1 = leftPosition/getBgWidth*100+"%";
			} else {
				leftPosition = devideNode(left1).leftSpace;
				leftPer1 = devideNode(leftPosition).per;
			}
			
			if(leftPosition < 0){
				leftPosition = 0;
				leftPer1 = "0%";
				obj.curLeft = obj.minLeft;
			} else if(leftPosition >= parseFloat($bg2.css("left"))){
				obj.curLeft = obj.curRight;
				if(obj.speeds){
					leftPosition = resetNodePer(obj.curRight).item;
					leftPer1 = resetNodePer(obj.curRight).per;
				} else {
					leftPosition = (obj.curLeft-obj.minLeft)/scaleFactor;
					leftPer1 = leftPosition/getBgWidth*100+"%";
				}
			} else {
				if(!obj.rangeToSetNode) {
					obj.curLeft = Math.round((leftPosition*scaleFactor)/obj.speed)*obj.speed+obj.minLeft;
					leftPosition = (obj.curLeft-obj.minLeft)/scaleFactor;
					if(leftPosition<0){
						leftPosition = 0;
						obj.curLeft = obj.minLeft;
					};
					leftPer1 = leftPosition/getBgWidth*100+"%";
				} else {
					if(obj.speeds) {
						var nodeThatNum = leftPosition/getBgWidth*nodeNum;
						var getNodePosition = obj.minLeft,stepMaxNodeNum = 0;
						$.each(obj.speeds,function(idx,val){
							stepMaxNodeNum += val.interval;
							if(stepMaxNodeNum>=nodeThatNum){
								getNodePosition =getNodePosition + (nodeThatNum-(stepMaxNodeNum-val.interval))*val.speed;
								return false;
							}
							getNodePosition += val.speed*val.interval;
						})
						obj.curLeft = getNodePosition;
					} else {
						obj.curLeft = parseFloat(leftPer1)/100*(obj.maxRight-obj.minLeft)+obj.minLeft;
					}
					if(leftPosition<0){
						leftPosition = 0;
						obj.curLeft = obj.minLeft;
					};
				}
			};
		}
		function rangeRightBtn(rightPosition){
			if(!obj.rangeToSetNode) {
				rightPosition = devideStep(rightPosition);						
				leftPer2 = rightPosition/getBgWidth*100+"%";
			} else {
				rightPosition = devideNode(rightPosition).leftSpace;
				leftPer2 = devideNode(rightPosition).per;
			}
			if(rightPosition < parseFloat($bg1.css("left"))){
				obj.curRight = obj.curLeft;
				if(obj.speeds){
					rightPosition = resetNodePer(obj.curLeft).item;
					leftPer2 = resetNodePer(obj.curLeft).per;
				} else {
					rightPosition = (obj.curRight-obj.minLeft)/scaleFactor;
					leftPer2 = rightPosition/getBgWidth*100+"%";
				}
			} else if(rightPosition >= (obj.maxRight-obj.minLeft)/scaleFactor){
				rightPosition = (obj.maxRight-obj.minLeft)/scaleFactor;
				leftPer2 = "100%";
				obj.curRight = obj.maxRight;
			} else {
				if(!obj.rangeToSetNode) {
					obj.curRight = Math.round((left2*scaleFactor)/obj.speed)*obj.speed+obj.minLeft;
					left2 = (obj.curRight-obj.minLeft)/scaleFactor;
					leftPer2 = rightPosition/getBgWidth*100+"%";
				} else {
					if(obj.speeds) {
						var nodeThatNum = rightPosition/getBgWidth*nodeNum;
						var getNodePosition = obj.minLeft,stepMaxNodeNum = 0;
						$.each(obj.speeds,function(idx,val){
							stepMaxNodeNum += val.interval;
							if(stepMaxNodeNum>=nodeThatNum){
								getNodePosition =getNodePosition + (nodeThatNum-(stepMaxNodeNum-val.interval))*val.speed;
								return false;
							}
							getNodePosition += val.speed*val.interval;
						})
						obj.curRight = getNodePosition;
					} else {
						obj.curRight = parseFloat(leftPer2)/100*(obj.maxRight-obj.minLeft)+obj.minLeft;
					}
				}
			};
		}
		function setMoneyFormat(num,n) {
			if(obj.showValFormat){
				num = (num+"").replace(/,/g,"");
				
				n = n > 0 && n <= 20 ?n:3;
				num = parseFloat((num).replace(/[^\d\.-]/g,""))+"";
				var l = num.split(".")[0].split("").reverse(),r = num.split(".")[1];
				var t = "";
				for(var i=0;i<l.length;i++) {
					t += l[i] +((i+1)%n==0&&(i+1)!=l.length?",":"");
				};
				var newVal = r?t.split("").reverse().join("")+"."+r:t.split("").reverse().join("");	
			} else {
				var newVal = num;
			}
			return newVal;
		}
		function fnSetLeftValue(leftVal){
			if(leftVal>=obj.minLeft&&leftVal<=obj.maxRight){
				if(obj.minLeft <= leftVal && leftVal<obj.curRight) {
					if(!obj.rangeToSetNode){
						var dValue = leftVal-obj.minLeft;
						dValue = setDevideStep(dValue);
					} else {
						var dValue = resetNodePer(leftVal).item-obj.minLeft;
					}
					if(obj.speeds){
						leftPer1 = resetNodePer(leftVal).per;
					} else {
						left1 = parseFloat(dValue/scaleFactor);
						//left1 = devideStep(left1);						
						leftPer1 = left1/getBgWidth*100+"%";
					};
					$bg1.css('left',leftPer1);
					obj.curLeft = dValue+obj.minLeft;
					//$text1.find("input[type=text]").val(left1*scaleFactor+obj.minLeft);	

				} else if(obj.minLeft >= leftVal){
					left1 = 0;
					leftPer1 = left1/getBgWidth*100+"%";
					$bg1.css('left',leftPer1);
					obj.curLeft = obj.minLeft;
				} else if(leftVal>=obj.curRight){
					obj.curLeft = obj.curRight;
					leftPer1 = leftPer2;
					$bg1.css('left',leftPer1);
				};
				if(obj.showLeftVal){
					var stringCurLeft = setMoneyFormat(obj.curLeft,3);
					obj.showLeftVal(stringCurLeft)
				}
				if(obj.bindLeft) {
					$("#" + obj.bindLeft).val(setMoneyFormat(obj.curLeft,3));
				};
			} else {
				return false;
			}
		};
		function fnSetRightValue(rightVal){
			if(rightVal>=obj.minLeft&&rightVal<=obj.maxRight){
				if(obj.maxRight >= rightVal && rightVal>obj.curLeft) {
					if(!obj.rangeToSetNode){
						var dValue = rightVal-obj.minLeft;
						dValue = setDevideStep(dValue);
					} else {
						var dValue = resetNodePer(rightVal).item-obj.minLeft;
					}
					if(obj.speeds){
						leftPer2 = resetNodePer(rightVal).per;
					} else {
						left2 =parseFloat((dValue)/scaleFactor);
						//left2 = devideStep(left2);						
						leftPer2 = left2/getBgWidth*100+"%";
					};
					$bg2.css('left',leftPer2);
					obj.curRight = dValue+obj.minLeft;
					//$text2.find("input[type=text]").val(left2*scaleFactor+obj.minLeft);
				} else if(obj.maxRight < rightVal){
					left2 = parseInt((obj.maxRight-obj.minLeft)/scaleFactor);;
					leftPer2 = "100%";
					$bg2.css('left',leftPer2);
					obj.curRight = obj.maxRight;
				} else if(obj.curLeft>=rightVal){
					obj.curRight = obj.curLeft;
					leftPer2 = leftPer1;
					$bg2.css('left',leftPer2);
				};
				if(obj.showRightVal){
					var stringCurRight = setMoneyFormat(obj.curRight,3);
					obj.showRightVal(stringCurRight)
				}
				if(obj.bindRight) {
					$("#" + obj.bindRight).val(setMoneyFormat(obj.curRight,3));
				};
			} else {
				return false;
			}
		};
		return {
			setLeftValue: fnSetLeftValue,
			setRightValue: fnSetRightValue
		}
	};
	
	//select 
	ui.prototype.select = function(ele,obj) {
		var multiValueArr = [];
		var multiValue = [];
		var getId = ele.attr("id");
		var newUlId = getId + "Ul";
		var getWidth;
		var listWidth;
		var isDisabled;
		var newData = new Array();
		var contentInfo;
		var listToLeft,listToTop,listToBottom,listWidth,listParentH;
		 obj = $.extend({
			    multiSelect: false,
			    name: '',
			    enableSearch: false,
			    enableAdd: false,
			    disabled: false,
			    readOnly: false,
			    data: [],
			    contentInfo: "",
			    onChange: function(value,content){},
			    width: "",
			    choseAllItem: false,
			    url : "",
				regexp: ""
			    },obj);
			if(obj.contentInfo) {
				contentInfo = obj.contentInfo;
			} else {
				contentInfo = xaa.i18nMessageProvider.getText("XAA051401");
				
				contentInfo = contentInfo.replace(/XAA051401 /, "");
			}
			var errorInfo = xaa.i18nMessageProvider.getText("XAA051402");
			errorInfo = errorInfo.replace(/XAA051402 /, "");
		if(ele.children().length<1){
			select(ele,obj); 
		};
		function setAddLi(arr) {
				var getData = obj.data;
				if(arr.length>0) {
					if(obj.multiSelect){
						multiValue = [];
						ele.find(".secondSelectShow>ul").empty();
						ele.find(".xaa-select-size-pro>option").removeAttr("selected");
					} else {
						ele.find(".secondSelectShow>span").html("");
						ele.find(".secondSelectShow").attr("value", "");
					};
					$.each(getData,function(i){
						$.each(arr,function(j){
							if(getData[i].value == arr[j]&&!getData[i].disabled){
								if(obj.multiSelect){
									var tagLi = "<li value='" + getData[i].value + "'><span>" + getData[i].content + "</span><a class='fa fa-close'></a></li>";
									var multiValItem = {};
									multiValItem.value = getData[i].value;
									multiValItem.content = getData[i].content;
									multiValue.push(multiValItem);
									ele.find(".secondSelectShow>ul").append(tagLi);
									//ele.find(".xaa-select-size-pro>.selectListOption[value='"+getData[i].value+"']").attr("selected",true);
								} else {
									ele.find(".secondSelectShow>span").html(getData[i].content);
									ele.find(".secondSelectShow").attr("value", getData[i].value);
									ele.find(".xaa-select-size-pro>.selectListOption").removeAttr("selected");
									ele.find(".xaa-select-size-pro>.selectListOption[value='"+getData[i].value+"']").attr("selected",true);	
								}
								
							}
						});
					})
						
					if(obj.multiSelect){
						multiValueArr = [];
						multiValue.forEach(function(val,idx){
							multiValueArr.push(val.value);
						})
						ele.find(".xaa-select-size-pro").val(multiValueArr);
					}
				};
		};
		return {
		"reload": fnUpdateData,
		"setValue": setAddLi,
		"readOnly": selectReadOnly,
		"disabled": fnDisabled,
		"addItem": fnAddItem,
		"updateItem":fnUpdateItem,
		"deleteItems":fnDeleteItems,
		"getItem":fnGetItem,
		"getData":fnGetData,
		"getSelectedItems": fnGetSelectedItems,
	};
	function fnGetData(){
		return obj.data;
	};
	function fnGetSelectedItems(){
		return obj.multiValue
	};
	function fnRemoveAllMultiSelectedItems(){
		obj.multiValue = [];
		ele.find(".xaa-select-size-pro>.selectListOption").removeAttr("selected");
	}
	function fnUpdateItem(itemUpdate) {
		obj.data.forEach(function(val,idx){
			if(obj.data[idx].value == itemUpdate.value){
				obj.data[idx] = $.extend(val,itemUpdate);
			}
		})
		newData.forEach(function(val,idx){
			if(newData.length>0){
				if(multiValue[idx].value == itemUpdate.value){
					newData[idx] = $.extend(val,itemUpdate);
				}
			}
		})
		if(obj.multiSelect){
			multiValue.forEach(function(val,idx){
				if(multiValue.length>0){
					if(multiValue[idx].value == itemUpdate.value){
						multiValue[idx] = $.extend(val,itemUpdate);
						if(itemUpdate.content){
							ele.find(".secondSelectShow ul>li").eq(idx).children("span").text(itemUpdate.content);	
						}
						
					}	
				}
			})	
		} else {
			if(ele.find(".secondSelectShow").attr("value")==itemUpdate.value){
				if(itemUpdate.content){
					ele.find(".secondSelectShow>span").text(itemUpdate.content);
				}
			}
		}
		$("#"+newUlId).find(".selectListLi").each(function(){
			if($(this).find("a").attr("value")==itemUpdate.value){
				if(itemUpdate.disabled){
					$(this).addClass("disabled xaa-bg-disabled");
					
				} else {
					$(this).removeClass("disabled xaa-bg-disabled");
				}
				if(itemUpdate.content){
					$(this).find("a").text(itemUpdate.content);
				}
			}
		})
	};
	
	function fnUpdateData(updateObj){
		var getUpdateData;
		newData = [];
		multiValue = [];
		$("#"+newUlId).find(".selectListLi").remove();
		
		if(obj.multiSelect){
			ele.find(".secondSelectShow ul").empty();
		} else {
			ele.find(".secondSelectShow").removeAttr("value").children("span").text("");		
		}
		if(obj.enableSearch){
			$("#"+newUlId).find(".xaa-select-enable-search input").val("");	
		}
		if(updateObj&&updateObj.url) {
			$.ajax({
				type: "GET",
				url: updateObj.url,
				dataType:"json",
				async: false,
				success: function(response){
					getUpdateData = response.modelObj;
					resetContent(getUpdateData);
				}	
				})			
		} else {
			if(!updateObj){
				getUpdateData = obj.data;
			} else {
				getUpdateData = updateObj.data;
			} 
			resetContent(getUpdateData);
		};
		function resetContent(data){
			data.forEach(function(val,idx){
				if(!val.disabled){
					var item = "<li class='selectListLi'><a value='" + val.value + "' title='" + val.content + "'>"+ val.content +"</a></li>";
				} else {
					var item = "<li class='disabled xaa-bg-disabled selectListLi'><a value='" + val.value + "' title='" + val.content + "'>"+ val.content +"</a></li>";
				}
				var itemOption = '<option class="selectListOption" value="'+val.value+ '">' + val.content +'</option>';
				if(obj.enableAdd){
					$("#"+newUlId).find(".divider").before(item);	
				} else {
					$("#"+newUlId).append(item);	
				}
				ele.find(".xaa-select-size-pro").append(itemOption);
			})
		}
	};
	function fnDeleteItems(valArr){
		valArr.forEach(function(v,i){
			obj.data.forEach(function(val,idx){
				if(obj.data[idx].value==v){
					obj.data.splice(idx,1);
				}
			});
			newData.forEach(function(val,idx){
				if(newData.length>0){
					if(newData[idx].value==v){
						newData.splice(idx,1);
					}
				}
			});
			multiValue.forEach(function(val,idx){
				if(multiValue.length>0){
					if(multiValue[idx].value==v){
						multiValue.splice(idx,1);
					}
				};
			});
			$("#"+newUlId).find(".selectListLi").each(function(){
				if($(this).children("a").attr("value")==v){
					$(this).remove();
				}
			});
			if(obj.multiSelect){
				ele.find(".secondSelectShow ul li").each(function(){
					if($(this).attr("value")==v){
						$(this).remove();
					}
				})
				var selectHeight = ele.find(".xaa-select-size").height();
				$("#"+newUlId).css("top",selectHeight+listToTop+"px");				
			} else {
				var getSimbleSelectShow = ele.find(".secondSelectShow").attr("value");
				if(getSimbleSelectShow==v){
					ele.find(".secondSelectShow").removeAttr("value").children("span").text("");
				}
			}
			
		})
	};
	function fnGetItem(value){
		var newArr;
			obj.data.forEach(function(val,idx){
				if(obj.data[idx].value==value){
					newArr = obj.data[idx];
				}
			});
		return newArr;
	};
	function fnAddItem(dataItem){
		if(!dataItem.disabled){
			dataItem.disabled=false;
		}
		var searchAbleVal = $("body").find("#"+newUlId+" .xaa-form-searchable").val();
		var judgeContent = obj.data.every(function(ele){
				return ele.content!= dataItem.content;
			});
		if(judgeContent) {
			obj.data.push(dataItem);
			if(obj.enableSearch&&searchAbleVal !=""){
				if(dataItem.content.indexOf(searchAbleVal)!=-1) {
					newData.push(dataItem);
					if(!dataItem.disabled){
						var item = "<li class='selectListLi'><a value='" + dataItem.value + "' title='" + dataItem.content + "'>"+ dataItem.content +"</a></li>";
					} else {
						var item = "<li class='disabled xaa-bg-disabled selectListLi'><a value='" + dataItem.value + "' title='" + dataItem.content + "'>"+ dataItem.content +"</a></li>";
					}
					var itemOption = '<option class="selectListOption" value="'+dataItem.value+ '">' + dataItem.content +'</option>';
					if(obj.enableAdd){
						$("#"+newUlId).find(".divider").before(item);	
					} else {
						$("#"+newUlId).append(item);	
					}
					ele.find(".xaa-select-size-pro").append(itemOption);
				}
			} else {
				if(!dataItem.disabled){
					var item = "<li class='selectListLi'><a value='" + dataItem.value + "' title='" + dataItem.content + "'>"+ dataItem.content +"</a></li>";
				} else {
					var item = "<li class='disabled xaa-bg-disabled selectListLi'><a value='" + dataItem.value + "' title='" + dataItem.content + "'>"+ dataItem.content +"</a></li>";
				}
				var itemOption = '<option class="selectListOption" value="'+dataItem.value+ '">' + dataItem.content +'</option>';
				$("#"+newUlId).find(".divider").before(item);
				ele.find(".xaa-select-size-pro").append(itemOption);							
			}
			$("body").find("#"+newUlId).css("width","auto");
			getWidth = parseInt($("body").find("#"+newUlId).css("width"));
			listWidth =  ele.find(".secondSelect").width();
			if(listWidth>getWidth){
				$("body").find("#"+newUlId).css("width",listWidth+2+"px");
			}
			if($("body").find("#"+newUlId)[0].scrollHeight>$("body").find("#"+newUlId)[0].clientHeight){
				if(getWidth>=115){
					if(getWidth>listWidth+3){
						$("body").find("#"+newUlId).css("width",getWidth+18+"px");
					} else {
						$("body").find("#"+newUlId).css("width",listWidth+2+"px");
					}
				}
			}
		}
	};
	function select(ele,obj) {
		 ele.empty();		 
		 if(obj.url!= "") {
			$.ajax({
				type: "GET",
				url: obj.url,
				dataType:"json",
				async: false,
				success: function(response){
					obj.data = response.modelObj;
					obj = $.extend(obj,response);
					if(ele.find(".xaa-select-size").length<=0){
						selectCommon(ele,obj);
					} else {
						var getId = ele.attr("id");
						var newUlId = getId + "Ul";
						ele.find(".secondSelectShow").attr("value","").find("span").html("");
						$("#"+newUlId).find(".selectListLi").remove();
						var arr = obj.data;
						if(arr.length>0) {
							$.each(arr,function(i) {
								var itemLi; 
								if(arr[i].disabled && arr[i].disabled==true) {
									itemLi= '<li class="disabled xaa-bg-disabled selectListLi"><a value="'+arr[i].value+ '" title="'+arr[i].content+ '">' + arr[i].content +'</a></li>';
								} else {
									itemLi= '<li class="selectListLi"><a value="'+arr[i].value+ '" title="'+arr[i].content+ '">' + arr[i].content +'</a></li>';
								}
								if($("#"+newUlId).find(".divider").length>0){
									$("#"+newUlId).find(".divider").before(itemLi);
								} else {
									$("#"+newUlId).append(itemLi);
								}
								
							});
						}
					}					
				}
			});
		 } else {
			 selectCommon(ele,obj);
		 }
		 
	 };		 
		 function selectCommon(ele,getData) {
			 	//下拉框结构添加，含selectList;
				var select = '<div class="btn-group imitate-select secondSelect xaa-select-size">' +
				'<div class=" dropdown-toggle secondSelectShow">' +
					'<span></span>' +
				'</div>' +
				'<span class="caret"></span>' +
				'</div>'+
				'<select name="'+getData.name+'" class="xaa-select-size-pro" style="display:none;"><option class="xaa-select-option1"></option></select>'; 
				var selectListUl = '<ul class="dropdown-menu selectList secondSelectList" id="' + 
				newUlId + 
					'" role="menu">' +
					'</ul>';
				ele.append(select);
				if(getData.multiSelect){
					ele.find(".xaa-select-size-pro").attr("multiple","multiple");
					ele.find(".xaa-select-size").css({"height": "auto"})
					ele.find(".xaa-select-size .secondSelectShow").css({"overflow": "inherit","white-space":"normal"});
					var tag = "<ul></ul>";
					ele.find(".secondSelectShow").html(tag);
					
				};
		        $("body").append(selectListUl);
				var selectListUlId = $("#"+newUlId).attr("id");
				//数据加载??
				if(getData.data) {
					addLi(getData.data);
				};
		        if(getData.defaultOption&&!getData.multiSelect){
					var item = "<li class='selectListDefaultLi'><a value='" + getData.defaultOption.value + "'>"+ getData.defaultOption.content +"</a></li>";
					var itemOption = '<option class="selectListDefaultOption" value="'+getData.defaultOption.value+ '">' + getData.defaultOption.value +'</option>';
					$("#"+newUlId).prepend(item);
					ele.find(".xaa-select-size-pro").prepend(itemOption);
					ele.find(".xaa-select-size-pro").val(getData.defaultOption.value);
					ele.find(".secondSelectShow>span").text(getData.defaultOption.content);
		        }
				//设置宽度
				if(getData.width) {
					getData.width = getData.width.toString();
					if(getData.width.match("%")){
						ele.find(".xaa-select-size").css("max-width","none");
						$("#"+newUlId).css("max-width","none");
					} else {
						ele.find(".xaa-select-size").css({"max-width":"none","width":getData.width});
						if(parseFloat(getData.width)>320){
							$("#"+newUlId).css("max-width","none");
						}
					}
				}
				//下拉框全局定位
				fnDisabled(getData.disabled);
				//屏幕尺寸变化，下拉框位置跟着变化
				$(window).resize(function(){
					setUlPosition();
				});
				// 横向滚动条滚动，下拉列表隐藏??
				ele.parents().scroll(function(){
					$("body").find("#"+newUlId).css({"display":"none"});
					
				})
				$("body").find("#"+newUlId).on("DOMNodeInserted",function(){
					getWidth = parseInt($(this).css("width"));
					listWidth =  ele.find(".secondSelect").width();
					if(getWidth<=listWidth+2){
						$(this).css({"width":listWidth+2+"px"});
					} 
				})			
				setUlPosition();
				
					if(getData.enableSearch){					
						var selectSearchItem = '<li class="xaa-select-enable-search" style="height: 30px;padding: 1px 3px;">' +
					    '<input type="text" style="width: 100%;" class="form-control xaa-form-control xaa-form-searchable" size="20" data-original-title="" title="">' +
						'</li>';
						$("body").find("#"+newUlId).prepend(selectSearchItem);
						$("body").find("#"+newUlId+">li.xaa-select-enable-search").on("click",function(e) {
							e.stopPropagation();
						})
						$("body").find("#"+newUlId).on("keyup",".xaa-form-searchable",function(){
							fnEnableSearch(this);
						})

					}
					if(getData.enableAdd){
					    var selectEditItem = '<li class="divider"></li>' +
						   '<li class="secondSelectListAdd">' +
								'<div class="xaa-form-toleft">' +
									'<input type="text" id="textId" name="textId" class="form-control xaa-form-control" size="1" placeholder="'+contentInfo+'" size="20"/>' +
									'<button name="button" ><span class="fa fa-plus-circle"></span></button>' + 
								'</div>' +
								'<span></span>'
						   '</li>';
					    $("#"+newUlId).append(selectEditItem);
						$("body").find("#"+newUlId).on("click","li.secondSelectListAdd",function(event) {
							event.stopPropagation();
						});
						$("body").find("#"+newUlId).on("click","li button",function(e) {
							fnEnableAdd(this,e);
						});
					};
					
					if(getData.multiSelect){
						ele.on("click",".secondSelectShow>ul>li>a", function(e) {
							fnMultiSelectClose(this);
							e.stopPropagation();
						});
					};
				//控制下拉列表显示隐藏??
				$(document).on("click",function() {
					$("body").find("#"+ newUlId).css("display","none");
				})
				$("body").find("#"+newUlId).on("mouseover","li a",function() {
					fnMouseOverStyle(this)
				});	
				//控制三角图标hover时的颜色
				/*ele.find(".xaa-select-size .secondSelectShow").hover(function(){
					$(this).next().addClass("select-list-hover");
				},function(){
					$(this).next().removeClass("select-list-hover");
				});*/
				//点击下拉列表进行相应操作
					$("body").find("#"+newUlId).on("click","li a",function(e)	{
						fnSelectItem(this,e);
					});
/*				if(getData.readOnly){
					$("body").find("#"+newUlId).on("click",function(e){
						e.stopPropagation();
					});
					$("body").find("#"+newUlId+ " input[type=text]").attr("readonly","readonly");
				}*/
				selectReadOnly(getData.readOnly);
			}

	function selectReadOnly(bool) {
		if(bool){
			$("body").find("#"+newUlId).on("click",function(e) {
				e.stopPropagation();
			});
			$("body").find("#"+newUlId).off("click","li a");
			$("body").find("#"+newUlId+" input").attr("readonly","readonly").css("background-color","rgb(211,211,211)");;
			$("body").find("#"+newUlId+" button").attr("disabled","diasbled");
			ele.off("click",".secondSelectShow>ul>li>a");
			$("body").find("#"+newUlId).off("mouseover","li a");
		} else {
			$("body").find("#"+newUlId).off("click");
			$("body").find("#"+newUlId).off("click","li a").on("click","li a",function(e)	{
						fnSelectItem(this,e);
			});
			$("body").find("#"+newUlId).off("mouseover","li a").on("mouseover","li a",function() {
				fnMouseOverStyle(this)
			});	
			$("body").find("#"+newUlId).on("click","li.secondSelectListAdd",function(event) {
				event.stopPropagation();
			});
			$("body").find("#"+newUlId).on("click","li button",function(e) {
				fnEnableAdd(this,e);
			});

			$("body").find("#"+newUlId+" input").removeAttr("readonly").css("background-color","transparent");
			$("body").find("#"+newUlId+" button").removeAttr("disabled");
			if(obj.multiSelect){
				ele.off("click",".secondSelectShow>ul>li>a").on("click",".secondSelectShow>ul>li>a", function(e) {
					fnMultiSelectClose(this);
					e.stopPropagation();
				});
			}
		}
	}
	function fnDisabled(isDisabled) {
		if(isDisabled == false) {
			ele.find(".xaa-select-size").css("cursor","auto");
			ele.find(".xaa-select-size .secondSelectShow").removeClass("xaa-bg-disabled")
			ele.off("click",".xaa-select-size").on("click",".xaa-select-size",function(e) {
				if($("#"+ newUlId).css("display")!="block"){
					$("body").find(".selectList").css("display","none");
					$("body").find("#"+ newUlId).css("display","block");
					if(!obj.multiSelect){
						var getShowContent = $(this).find(".secondSelectShow>span").text();
						$("body").find("#"+ newUlId+" li.selectListLi").each(function(){
							if($(this).find("a").text()==getShowContent){
								$(this).parent().scrollTop(0);
								var offsetTopUl = $(this).parent().offset().top;
								var offsetTopLi = $(this).offset().top;
								var heightUl = parseFloat($(this).parent().css("height"));
								var heightLi = parseFloat($(this).css("height"));
								var UlscrollTop = offsetTopLi-offsetTopUl-heightUl/2+heightLi/2;
								$(this).parent().scrollTop(UlscrollTop);
							}
						})
					}
				} else {
					$("body").find("#"+ newUlId).css("display","none");		
				}
				setUlPosition();
				if(obj.multiSelect) {
					selectListMulti();
				} else {
					selectListOn();
				}
				e.stopPropagation();
			});					
		} else {
			ele.off("click",".xaa-select-size");
			ele.find(".xaa-select-size").css("cursor","not-allowed");
			ele.find(".xaa-select-size .secondSelectShow").addClass("xaa-bg-disabled");
		}
	};
	function setUlPosition() {
		listToLeft = ele.find(".secondSelect").offset().left;
		listToTop = ele.find(".secondSelect").offset().top;
		listToBottom = $("body").height()-listToTop;
		listWidth =  ele.find(".secondSelect").width();
		listParentH = ele.find(".secondSelect").height();
		if(ele.parents(".xaa-ui-dialog").length>0){
			$("body").find("#"+newUlId).css({"z-index":"1001"});
		} else {
			$("body").find("#"+newUlId).css({"z-index":"950"});
		}
		$("body").find("#"+newUlId).css("width","auto");
		if(obj.enableAdd) {
			$("body").find("#"+newUlId).css({"min-width":"115px"});
		}
		
		getWidth = parseInt($("body").find("#"+newUlId).css("width"));
		//var getMinWidth = ($("body").find("#"+newUlId).css("min-width"));
		
		if($("body").find("#"+newUlId).attr("name") && $("body").find("#"+newUlId).attr("name") == "dropup"){
			$("body").find("#"+newUlId).css({"left":listToLeft+"px","top":"auto","bottom":listToBottom+"px"});
			
		} else {
			$("body").find("#"+newUlId).css({"left":listToLeft+"px","top":listToTop+listParentH+"px"});			
		};
		if(getWidth<=listWidth+2){
			$("body").find("#"+newUlId).css({"width":listWidth+2+"px"});
		} else {
			if($("body").find("#"+newUlId)[0].scrollHeight>$("body").find("#"+newUlId)[0].clientHeight){
				$("body").find("#"+newUlId).css({"width":getWidth+18+"px"});
			}
		}
	};
	function fnEnableSearch(thiz) {
		var searchAbleVal = $(thiz).val();
		var newContent,newValue,newDisabled;
		newData  = [];
		if(searchAbleVal) {
			$.each(obj.data,function(i) {
				if(obj.data[i].content.indexOf(searchAbleVal)!=-1) {
					newContent=obj.data[i].value;
					newValue=obj.data[i].content;
					newDisabled = obj.data[i].disabled;
					var objItem = {value:newContent,content:newValue,disabled:newDisabled};
					newData.push(objItem);
				};
			});
			$("#"+newUlId).find(".selectListLi").remove();
			ele.find(".xaa-select-size-pro>.selectListOption").remove();
			addLi(newData);
		} else {
			$("#"+newUlId).find(".selectListLi").remove();
			ele.find(".xaa-select-size-pro>.selectListOption").remove();
			addLi(obj.data);
		};
		if(!obj.multiSelect){
			selectListOn();
		} else {
			selectListMulti();
		};
	}
	function fnEnableAdd(thiz,e) {
		var prevInput = $(thiz).prev();
		var prevInputText = prevInput.val();
		prevInputText = prevInputText.replace(/^\s*|\s*$/g,'');
		if(obj.addOnchange){
			prevInputText = obj.addOnchange(prevInputText);
		};
		if(prevInputText == "") {
			//prevInput.css("color","#76323f");
			e.stopPropagation();
		} else {
			if(obj.regexp&& obj.regexp.test(prevInputText)||!obj.regexp){
				var searchAbleVal = $("body").find("#"+newUlId+" .xaa-form-searchable").val();
				var judgeContent = obj.data.every(function(ele){
						return ele.content!= prevInputText;
					});
				if(judgeContent) {
					obj.data.push({content:prevInputText, value:prevInputText, disabled:false});
					if(obj.enableSearch&&searchAbleVal !=""){
						if(prevInputText.indexOf(searchAbleVal)!=-1) {
							newData.push({content:prevInputText, value:prevInputText, disabled:false});
							var item = "<li class='selectListLi'><a value='" + prevInputText + "' title='" + prevInputText + "'>"+ prevInputText +"</a></li>";
							var itemOption = '<option class="selectListOption" value="'+prevInputText+ '">' + prevInputText +'</option>';
							$(thiz).parents("li").prev().before(item);
							ele.find(".xaa-select-size-pro").append(itemOption);
							$(thiz).parent().next("span").html("");
						}
					} else {
						var item = "<li class='selectListLi'><a value='" + prevInputText + "' title='" + prevInputText + "'>"+ prevInputText +"</a></li>";
						var itemOption = '<option class="selectListOption" value="'+prevInputText+ '">' + prevInputText +'</option>';
						$(thiz).parents("li").prev().before(item);
						ele.find(".xaa-select-size-pro").append(itemOption);
						$(thiz).parent().next("span").html("");								
					}
					$("body").find("#"+newUlId).scrollTop(10000);
					$(thiz).prev().val("");
					$("body").find("#"+newUlId).css("width","auto");
					getWidth = parseInt($("body").find("#"+newUlId).css("width"));
					listWidth =  ele.find(".secondSelect").width();
					if(listWidth>getWidth){
						$("body").find("#"+newUlId).css("width",listWidth+2+"px");
					}
					if($("body").find("#"+newUlId)[0].scrollHeight>$("body").find("#"+newUlId)[0].clientHeight){
						if(getWidth>=115){
							if(getWidth>listWidth+3){
								$("body").find("#"+newUlId).css("width",getWidth+18+"px");
							} else {
								$("body").find("#"+newUlId).css("width",listWidth+2+"px");
							}
						}
					}
				}
			} else {
				$(thiz).parent().next("span").html(errorInfo);
			}
		};
	}
	function fnMultiSelectClose(thiz){

		var _thatVal = $(thiz).parent().find("span").html();
		multiValue.forEach(function(val,i) {
			if(multiValue.length>0){
				if(multiValue[i].content == _thatVal) {
					multiValue.splice(i,1);
				};
			}
		});
		selectListMulti();
		ele.find(".xaa-select-size-pro>.selectListOption").each(function(i){
			if($(this).text()==_thatVal){
				$(this).removeAttr("selected");
			}
		})
		if(multiValue.length ==0){
			ele.find(".xaa-select-size-pro>.xaa-select-option1").attr("selected",true);
		}
		$(thiz).parent("li").remove();
		var selectHeight = ele.find(".xaa-select-size").height();
		if($("body").find("#"+newUlId).attr("name") && $("body").find("#"+newUlId).attr("name") == "dropup"){
		} else {
			$("#"+newUlId).css("top",selectHeight+listToTop+"px");			
		};		
						
	
	};
	function fnMouseOverStyle(thiz){
		isDisabled = $(thiz).parent().attr("class");
		if(!isDisabled||isDisabled.indexOf("disabled") == -1){
			$(thiz).addClass("xaa-select-hover").parent().siblings().children().removeClass("xaa-select-hover");
		}
	};
	function fnSelectItem(thiz,e) {
		isDisabled = $(thiz).parent().attr("class");
		var getItemVal = $(thiz).attr("value");
		var itemContent = $(thiz).html();
		var selectMatch = new Array();
		if(isDisabled.indexOf("disabled")==-1) {
			if(obj.multiSelect) {
				ele.find(".xaa-select-size-pro>.xaa-select-option1").removeAttr("selected");
				$.each(ele.find(".secondSelectShow>ul>li"),function(i) {
					if($(this).children("span").html() == itemContent) {
						selectMatch.push(i);
					}
				})
				if(selectMatch.length == 0){
					var tagLi = "<li value='" + getItemVal + "'><span>" + itemContent + "</span><a class='fa fa-close'></a></li>";
					var multiValItem = {};
					multiValItem.value = getItemVal;
					multiValItem.content = itemContent;
					multiValue.push(multiValItem);
					//ele.find(".xaa-select-size-pro>.selectListOption").removeAttr("selected");
					multiValueArr = [];
					multiValue.forEach(function(val,idx){
						multiValueArr.push(val.value);
					})
					ele.find(".xaa-select-size-pro").val(multiValueArr);
					//ele.find(".xaa-select-size-pro>.selectListOption[value='"+getItemVal+"']").attr("selected",true);
					ele.find(".secondSelectShow>ul").append(tagLi);
					//ele.find(".secondSelectShow>ul>li.selectShowLiInput>input").css("width","60px");
					var selectHeight = ele.find(".xaa-select-size").height();
					$("#"+newUlId).css("top",selectHeight+listToTop+"px");				
				}				
			} else {						
					ele.find(".secondSelectShow>span").html(itemContent);
					ele.find(".secondSelectShow").attr("value", getItemVal);
					ele.find(".xaa-select-size-pro>.selectListOption").removeAttr("selected");
					ele.find(".xaa-select-size-pro>.selectListOption[value='"+getItemVal+"']").attr("selected",true);
					//ele.find(".xaa-select-size-pro").val($(this).attr("value"));
			}
			//setUlPosition();
			if(obj.onChange) {
				//var newValue = {value:$(this).attr("value"),content: $(this).text()}
				obj.onChange($(thiz).attr("value"),$(thiz).text(),thiz);
			}			
		} else {
			e.stopPropagation();
		}
	
	};
	function selectListOn() {
		var val = ele.find(".secondSelectShow>span").html();
		$.each($("#"+newUlId).find("li>a"),function() {
			var targetVal = $(this).html();
			if(targetVal == val) {
				isDisabled = $(this).parent().attr("class");
				if(!isDisabled||isDisabled.indexOf("disabled") == -1){
				    $(this).addClass("xaa-select-hover").parent().siblings().children().removeClass("xaa-select-hover");
				}
			}
	    });
    };
    function selectListMulti() {
    	$("#"+newUlId).find("li>a").removeClass();
    	$.each(multiValue, function(i) {
    		var _that = multiValue[i];
    		$.each($("#"+newUlId).find("li"),function(j) {
    			var _this = $(this).find("a").html();
    			if(_this == _that.content) {
    				//$(this).find("a").addClass("xaa-multi-hover");
    			}
    		})
    		
    	})
    	
    };
	function addLi(arr) {
		if(arr.length>0) {
			$.each(arr,function(i) {
				var itemLi,itemOption; 
				if(arr[i].disabled && arr[i].disabled==true) {
					itemLi= '<li class="disabled xaa-bg-disabled selectListLi"><a value="'+arr[i].value+ '" title="' + arr[i].content + '">' + arr[i].content +'</a></li>';
					itemOption = '<option class="selectListOption" disabled="disabled" value="'+arr[i].value+ '">' + arr[i].content +'</option>';
				} else {
					itemLi= '<li class="selectListLi"><a value="'+arr[i].value+ '" title="' + arr[i].content + '">' + arr[i].content +'</a></li>';
					itemOption = '<option class="selectListOption" value="'+arr[i].value+ '">' + arr[i].content +'</option>';
				}
				ele.find(".xaa-select-size-pro").append(itemOption);
				if($("#"+newUlId).find(".divider").length>0){
					$("#"+newUlId).find(".divider").before(itemLi);
				} else {
					$("#"+newUlId).append(itemLi);
				}
				
			});
			$.each(arr,function(i){
				if(arr[i].selected){
					if(obj.multiSelect){
						var tagLi = "<li value='" + arr[i].value + "'><span>" + arr[i].content + "</span><a class='fa fa-close'></a></li>";
						var multiValItem = {};
						multiValItem.value = arr[i].value;
						multiValItem.content = arr[i].content;
						multiValue.push(multiValItem);
						//ele.find(".xaa-select-size-pro>.selectListOption[value='"+arr[i].value+"']").attr("selected",true);
						ele.find(".secondSelectShow>ul").append(tagLi);
					} else {
						ele.find(".secondSelectShow>span").html(arr[i].content);
						ele.find(".secondSelectShow").attr("value", arr[i].value);
						ele.find(".xaa-select-size-pro>.selectListOption").removeAttr("selected");
						ele.find(".xaa-select-size-pro>.selectListOption[value='"+arr[i].value+"']").attr("selected",true);
					}
				}
			})
			if(obj.multiSelect){
				multiValueArr = [];
				multiValue.forEach(function(val,idx){
					multiValueArr.push(val.value);
				})
				ele.find(".xaa-select-size-pro").val(multiValueArr);
			}
		}
	};


	};
	 ui.prototype.tagInput  = function(ele,obj){
		 	var obj =$.extend({name:"",value:[]},obj);
			var item = '<div class="xaa-multi-box">' +
							'<input class="xaa-multi-input-add" size="1" type="text" placeholder="" name="">' +
					   '</div>' +
					   '<input type="submit" class="btn xaa-btn xaa-sm-btn xaa-normal-btn xaa-form-marginL" value="save">';
			ele.append(item);
			var multiAddArray= [];
			var objData =obj.value;
			var getTagInputWidth;
			setFirstTag(objData);
			function setFirstTag(data){
				ele.find(".xaa-multi-item").remove();
				multiAddArray= [];
				$.each(data,function(i){
					var tagLi = "<span class='xaa-multi-item'><span title='"+data[i]+"'>" +
					data[i] + "</span><a class='fa fa-close'></a>"+
					"<input type='hidden' name='"+ 
					obj.name +"' value='"+
					data[i]+
					"'/></span>";
					ele.find(".xaa-multi-input-add").before(tagLi);
					 multiAddArray.push(data[i]);
					
				})
				getTagInputWidth = ele.find(".xaa-multi-box").width();
				if(getTagInputWidth>=100){
					ele.find(".xaa-multi-input-add").css("width","100px");
				} else {
					ele.find(".xaa-multi-input-add").css("width","100%");
				}
				
			};

			var  multiIpt = ele.find(".xaa-multi-box").find("input[type=text].xaa-multi-input-add");
			ele.find(".xaa-multi-box").on("click",function(){
				multiIpt.focus();
			});
			ele.find(".xaa-multi-box>span").on("click",function(e){
				e.stopPropagation();
			})
			multiIpt.on("focus",function multiAdd(){
				ele.find(".xaa-multi-box").addClass("xaa-form-highlight");
				getTagInputWidth = ele.find(".xaa-multi-box").width();
				if(getTagInputWidth>=100){
					ele.find(".xaa-multi-input-add").css("width","100px");
				} else {
					ele.find(".xaa-multi-input-add").css("width","100%");
				}
			});
			multiIpt.on("blur",function multiAdd(){
				ele.find(".xaa-multi-box").removeClass("xaa-form-highlight");
				var inputVal = $(this).val();
				$(this).val("");
				if(inputVal !=""){
					var tagLi = "<span class='xaa-multi-item'><span title='"+inputVal+"'>" +
					inputVal + "</span><a class='fa fa-close'></a>"+
					"<input type='hidden' name='"+ 
					obj.name +"' value='"+
					inputVal+
					"'/></span>";
					 $(this).before(tagLi);
					 multiAddArray.push(inputVal);

				}
				
			});
			multiIpt.on("keyup",function(e){
				if(e&&e.keyCode==13){
					multiIpt.blur();
				}
			})
			ele.find(".xaa-multi-box").on("click",".xaa-multi-item>a",function(){
				$(this).parent().remove();
				var getVal = $(this).prev().html();
				$.each(multiAddArray,function(i){
					if(multiAddArray[i] ==getVal){
						multiAddArray.splice(i,1);
					}
				})
			})
			function fnGetValue(){
				var itemArr = [];
				if(ele.find(".xaa-multi-item").length>0){
					ele.find(".xaa-multi-item").each(function(){
						itemArr.push($(this).find("input").val())
					})
				}
				return itemArr;
				
			}
			return {"setValue":setFirstTag,"getValue":fnGetValue};
		};
	
	ui.prototype.counter = function(ele,val) {
		var getCounterItem;
		if(ele.attr("class")){
			var getClass = ele.attr("class").indexOf("xaa-counter");
			if(getClass != -1){
				getCounterItem = ele;
			} else {
				getCounterItem = ele.find(".xaa-counter").eq(0);
			}
		} else {
			getCounterItem = ele.find(".xaa-counter").eq(0);
		}
		messageNum(getCounterItem,val);
		function messageNum(_ele,val) {
			if(_ele){
				if(val>0){
					_ele.removeClass("xaa-counter-menu");
					if(val<=99){
						_ele.html(val);					
					} else {
						_ele.html("99+");
					}
				} else if(val == 0){
					_ele.addClass("xaa-counter-menu");
					_ele.html(0);
				} else {
					_ele.addClass("xaa-counter-menu");
					_ele.html("");
				}
				
			}
		}
	};
	ui.prototype.timeInput = function($inputId) {
		$("[data-provide='datetimepicker']").datetimepicker({
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 1,
			minView: 0,
			maxView: 1,
			forceParse: 0
		});
		$("[data-provide='datetimepicker']").on("click",function(){
			$(this).parent().next().focus();
			$(this).parent().next().click();
			$(this).parent().next()[0].setSelectionRange(0, 2);
			setTimeout(function(){
				$(".datetimepicker").addClass("xaa-datetimepicker");
				$(".datetimepicker .datetimepicker-hours table tfoot tr:first th.clear").remove();
				if($(".datetimepicker .datetimepicker-hours table tfoot tr:first th.datetime-clear").length<1){
					var blankTh = '<th colspan="1" class="xaa-empty-th"></th>';
					var clearData = '<th colspan="2" class="xaa-empty-th"></th><th colspan="2" class="datetime-clear" style="display: table-cell;">Clear</th>';
					$(".datetimepicker .datetimepicker-hours table tfoot tr:first th").attr("colspan","1");
					//$(".datetimepicker .datetimepicker-hours table tfoot tr:first th").html("Now");
					$(".datetimepicker .datetimepicker-hours table tfoot tr:first").prepend(blankTh);	
					$(".datetimepicker .datetimepicker-hours table tfoot tr:first").append(clearData);
				}
				$(".datetimepicker .datetimepicker-hours table tfoot tr:first th.datetime-clear").on("click",function(){
					$inputId.prev().find("[data-provide='datetimepicker']").val("");
					$inputId.val("__:__");
					$(".xaa-datetimepicker").hide();
				})
			},0)
		});

		$inputId.prev().find("[data-provide='datetimepicker']").on("change",function(){
			var getTimeInputVal = $(this).val();
			if(getTimeInputVal==""){
				$inputId.val("__:__");
			} else{
				$inputId.val(getTimeInputVal);
			};
		})
		var keyCode,strKeyCode,cursorPosition,isSwitch;
		var choseJudge = true;
		var $inputIdName;
			$inputIdName = $inputId.attr("data-name");
			if($inputIdName == "time-style-24"){
				isSwitch = false;
			} else {
				isSwitch = true;
			}
		var oldVal,nowVal,inputId,cursorPosition;
		var timeStyle1 = isSwitch?/^(0[0-9]|1[0-2]):([0-5][0-9])\s([A]|[P])[M]$/:/(^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$)|[\_\_\:\_\_]/;
		var timeStyle2 = isSwitch?/^([0-9]):([0-5][0-9])\s([A]|[P])[M]$/:/^([0-9]):([0-5][0-9])$/;
		var timeStyle3 = isSwitch?/^(0[0-9]|1[0-2]):([0-9])\s([A]|[P])[M]$/:/^([0-1]?[0-9]|2[0-3]):([0-9])$/;
		//var timeStyle4 = isSwitch?/^(0[0-9]|1[0-2]):([0-5][0-9])\s([A]|[P])[M]$/:/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
		var timeStyle5 = /^(0[0-9]|1[0-2]):([0-5][0-9]):\s([A]|[P]|[a]|[p])$/;
		inputId = $inputId[0];
		oldVal = $inputId.val();
		/*if(timeStyle2.test(oldVal)){
			$(this).val("0"+oldVal);
		}*/
		/*$inputId.on("focus",function(){
			oldVal = $(this).val();
			//console.log(timeStyle1.test(oldVal));
			//console.log(oldVal)
		})*/
		$inputId.on("click",function(){
			choseJudge = true;
			nowVal = $(this).val();
			cursorPosition = getTxt1CursorPosition(inputId);
			timeStyle1 = isSwitch?/^(0[0-9]|1[0-2]):([0-5][0-9])\s([A]|[P])[M]$/:/(^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$)|[\_\_\:\_\_]/;
			if(timeStyle1.test(nowVal)){
				$(this).val(nowVal);
				if(cursorPosition>=0 &&cursorPosition<=2){
				  	changeCursorPos(inputId,0, 2);
				} else if(cursorPosition>2 &&cursorPosition<=5){
				  	changeCursorPos(inputId,3, 5);
				}  else {
					changeCursorPos(inputId,6, 8);
				}
			}
			$inputId.on("keydown",function(event){
				keyCode = event.keyCode;
				if(keyCode ==8){
					return false;
				};
				if(cursorPosition<=5){
					if(!choseJudge&&cursorPosition<3){
						if(!isSwitch){
							if(strKeyCode=="1"||strKeyCode=="0"){
								return event.keyCode>=48 && event.keyCode<58 ||(event.keyCode>=96 && event.keyCode<106);				
							} else if(strKeyCode==2){
								return event.keyCode>=48 && event.keyCode<52||(event.keyCode>=96 && event.keyCode<100);
							}
						} else {
							if(strKeyCode=="0"){
								return event.keyCode>=48 && event.keyCode<58||(event.keyCode>=96 && event.keyCode<106);
							} else{
								return event.keyCode>=48 && event.keyCode<51||(event.keyCode>=96 && event.keyCode<99);
							}
							
						}
							
					} else if(event.keyCode !=9){
						return event.keyCode>=48 && event.keyCode<58||(event.keyCode>=96 && event.keyCode<106);	
					}
				} else {
					return event.keyCode == 65|| event.keyCode == 80;
				}
			})

			$inputId.on("input",function(e){
				nowVal = $(this).val();
				timeStyle1 = isSwitch?/^(0[0-9]|1[0-2]):([0-5][0-9])\s([A]|[P])[M]$/:/(^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$)|[\_\_\:\_\_]/;
				timeStyle2 = isSwitch?/^([0-9]):([0-5][0-9])\s([A]|[P])[M]$/:/(^([0-9]):([0-5][0-9])$)|(^([0-9])[\:\_\_])/;
				timeStyle3 = isSwitch?/^(0[0-9]|1[0-2]):([0-9])\s([A]|[P])[M]$/:/(^([0-1]?[0-9]|2[0-3]):([0-9])$)|([\_\_\:]([0-9])$)/;
				//timeStyle4 = isSwitch?/^(0[0-9]|1[0-2]):([0-5][0-9]):([0-9])\s([A]|[P])[M]$/:/^([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-9])$/;
				timeStyle5 = /(^(0[0-9]|1[0-2]):([0-5][0-9])\s([A]|[P]|[a]|[p])$)|(^(0[0-9]|1[0-2])[\:\_\_\s([A]|[P]|[a]|[p])]/;
				var test1 = timeStyle1.test(nowVal);
				var test2 = timeStyle2.test(nowVal);
				var test3 = timeStyle3.test(nowVal);
				//var test4 = timeStyle4.test(nowVal);
				var test5 = timeStyle5.test(nowVal);
				if(choseJudge){
					strKeyCode = String.fromCharCode(keyCode);
					switch(keyCode){
					case 96: (strKeyCode = 0);
					break;
					case 97: (strKeyCode = 1);
					break;
					case 98: (strKeyCode = 2);
					break;
					case 99: (strKeyCode = 3);
					break;
					case 100: (strKeyCode = 4);
					break;
					case 101: (strKeyCode = 5);
					break;
					}
					if(test2){
						nowVal = "0"+nowVal;
						oldVal = nowVal;
						$(this).val(nowVal);
						if($inputIdName=="time-style-12"){
							if(keyCode>49&&keyCode<58||keyCode>97){
								changeCursorPos(inputId,3, 5);
								choseJudge = true;
							}else{
								changeCursorPos(inputId,0, 2);
								choseJudge = false;
							}						
						} else {
							if(keyCode>50&&keyCode<58||keyCode>98){
								changeCursorPos(inputId,3, 5);
								choseJudge = true;
							}else{
								changeCursorPos(inputId,0, 2);
								choseJudge = false;
							}						
						}
						
					}else if(test3){
						nowVal = insert_flg(nowVal,3,0);
						oldVal = nowVal;
						$(this).val(nowVal);
						if(keyCode>53&&keyCode<58||keyCode>101){
							cursorPosition = 6;
							if(nowVal.search(/m/i)!=-1){
								cursorPosition = 6;
								changeCursorPos(inputId,6, 8);						
							} else {
								changeCursorPos(inputId,3, 5);
							}
							choseJudge = true;
						}else{
							changeCursorPos(inputId,3, 5);
							choseJudge = false;
						}						
						
					}
				} else {
					if(test2){
						nowVal = strKeyCode+nowVal;
						oldVal = nowVal;
						$(this).val(nowVal);
						changeCursorPos(inputId,3, 5);
						choseJudge = true;						
						
					}else if(test3){
						nowVal = insert_flg(nowVal,3,strKeyCode);
						oldVal = nowVal;
						$(this).val(nowVal);
						if(nowVal.search(/m/i)!=-1){
							cursorPosition = 9;
							changeCursorPos(inputId,6, 8);						
						} else {
							changeCursorPos(inputId,3, 5);
						}
						choseJudge = true;
						
					}
				}
				if(test5){
					nowVal = nowVal.slice(0,-1);
					if(keyCode == 65){
						nowVal = nowVal+ "AM"
					} else {
						nowVal = nowVal+ "PM"
					}
						oldVal = nowVal;
						$(this).val(nowVal);
						changeCursorPos(inputId,6, 8);						
					
				}
				if(test1){
					oldVal = nowVal;
					cursorPosition = getTxt1CursorPosition(inputId);	
				}
			})
		})
		$inputId.on("blur",function(){
			var gettimeIptVal = $(this).val();
			var _timeStyle = /0[0-9]|1[0-2][\:\_\_]|[\_\_\:][0-5][0-9]/;
			if(_timeStyle.test(gettimeIptVal)){
				gettimeIptVal = gettimeIptVal.replace(/\_/g,"0");
				$(this).val(gettimeIptVal);
			}
			if(gettimeIptVal=="__:__"){
				$(this).prev().find("[data-provide='datetimepicker']").val("");
			} else{
				$(this).prev().find("[data-provide='datetimepicker']").val(gettimeIptVal);
			};			
		})
//		$inputId.focus(function(event){
//			event.preventDefault();
//			setTimeout(function(){
//				changeCursorPos(inputId,0,2);
//			},0)
//			return false
//		})
		$("#nonePositionInput").on("focus",function(){
			$("#timeInput").off("focus").on("focus",function(){
				changeCursorPos(this,0,2);
			}).focus().off("focus")
		})
		$("#timeInput").on("keydown",function(e){
			if(e.keyCode == 9){
				if(this.selectionStart < 3){
					changeCursorPos(this,3,5);
					return false
				}
			}
		})
		function changeCursorPos(inputId, pos1,pos2) {
		  if (inputId.setSelectionRange) {
		    inputId.setSelectionRange(pos1, pos2);
		  }
		}
		function getTxt1CursorPosition(inputId){
		            var cursorPosition=0;
		            if(inputId.selectionStart){//非IE
		                cursorPosition= inputId.selectionStart;
		            }else{//IE
		                try{
		                var range = document.selection.createRange();
		                range.moveStart("character",-inputId.value.length);
		                cursorPosition=range.text.length;
		                }catch(e){
		                 cursorPosition = 0;
		                }
		            }
		            return cursorPosition;
		            //alert(cursorPosition);//打印当前索引			            
		}
		function insert_flg(str,i,strKeyCode){
		    var tmp1=str.substring(0, i);
		    var tmp2=str.substring(i);
		    return tmp1+strKeyCode+tmp2;
		}
	};
	ui.prototype.dateInput = function(ele,obj) {
		var baseObj = {
				autoclose: true,
				orientation:"bottom left",
				todayHighlight: true,
				todayBtn: "linked",
			};
		obj = $.extend(baseObj,obj);
		$("#"+ele).find("[data-provide='datepicker']").datepicker(obj);
		$("#"+ele).find("[data-provide='datepicker']").on("change",function(){
			var getTimeInputVal = $(this).val();
			$(this).parent().next().val(getTimeInputVal);
		})
		$("#"+ele).find("[data-provide='datepicker']").focus(function(){
			setTimeout(function(){
				$(".datepicker").addClass("xaa-datepicker");
				if($(".datepicker .datepicker-days table tfoot tr:first th.clear").length>=1){
					$(".datepicker .datepicker-days table tfoot tr:first th.clear").remove();
					$(".datepicker .datepicker-days table tfoot tr:first th.xaa-empty-th").remove();
					var clearData = '<th class="xaa-empty-th"></th><th colspan="3" class="clear" style="display: table-cell;">Clear</th>';
					$(".datepicker .datepicker-days table tfoot tr:first th").attr("colspan","3");
					$(".datepicker .datepicker-days table tfoot tr:first").append(clearData);
					$(".datepicker .datepicker-days table tfoot tr:first th.clear").css("display","block");
				} else {
					var clearData = '<th class="xaa-empty-th"></th><th colspan="3" class="clear" style="display: table-cell;">Clear</th>';
					$(".datepicker .datepicker-days table tfoot tr:first th").attr("colspan","3");
					$(".datepicker .datepicker-days table tfoot tr:first").append(clearData);
					$(".datepicker .datepicker-days table tfoot tr:first th.clear").css("display","block");
				}
			},0)

		});
		$("#"+ele).find("[data-provide='datepicker']").parent().next().blur(function(){
			$("#"+ele).find(".dropdown-menu:visible").hide();
		})
	}

	ui.prototype.selectmove = function(ele,data) {
		var columnChooserShow = xaa.i18nMessageProvider.getLang('jqgridToolbar.columnChooserShow');
		var columnChooserHide = xaa.i18nMessageProvider.getLang('jqgridToolbar.columnChooserHide');
		if(ele.find(".modal-body .xaa-selectmove").length<1){
		var selectMoveConformation = '<div class="xaa-selectmove">'+
		'<div class="xaa-selectmove-left col-sm-5 col-md-5 xaa-padLeft xaa-padRight">'+   
			'<div class="col-sm-12 xaa-form-toleft">'+
				 '<label class="xaa-label">'+columnChooserShow+' :</label>'+
			'</div>'+
			'<input class="xaa-selectmove-filter-left form-control xaa-form-control xaa-form-marginB2" type="text" placeholder="Filter">'+
			'<ul class="xaa-selectmove-list-left"></ul>'+
			'<select multiple="multiple" class="xaa-selectmove-list-left" name="" style="height: 200px;display:none">'+
			'</select>'+ 
		'</div>'+ 
		'<div class="xaa-selectmove-mid col-sm-2 col-md-2 xaa-padLeft xaa-padRight">'+
			'<div class="row xaa-selectmove-btn">'+
				'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
					'<button type="button" class="xaa-selectmove-all-toright btn xaa-btn xaa-validation-btn" title="Move all">'+      
						'<i class="fa fa-angle-double-right"></i>'+    
					'</button>'+ 
				'</div>'+
				'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
					'<button type="button" class="xaa-selectmove-toright btn xaa-btn xaa-validation-btn" title="Move selected">'+       
						'<i class="fa fa-angle-right"></i>'+    
					'</button>'+   
				'</div>'+
				'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
					'<button type="button" class="xaa-selectmove-toleft btn xaa-btn xaa-validation-btn" title="Remove selected">'+   
						'<i class="fa fa-angle-left"></i>'+    
					'</button>'+    
				'</div>'+
				'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
					'<button type="button" class="xaa-selectmove-all-toleft btn xaa-btn xaa-validation-btn" title="Remove all">'+     
						'<i class="fa fa-angle-double-left"></i>'+    
					'</button>'+
				'</div>'+
				'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
					'<button type="button" class="xaa-selectmove-totop btn xaa-btn xaa-validation-btn" title="Move to top">'+     
						'<i class="fa fa-angle-up"></i>'+    
					'</button>'+
				'</div>'+
				'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
					'<button type="button" class="xaa-selectmove-tobottom btn xaa-btn xaa-validation-btn" title="Move to bottom">'+     
						'<i class="fa fa-angle-down"></i>'+    
					'</button>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="xaa-selectmove-right col-sm-5 col-md-5 xaa-padLeft xaa-padRight">'+   
			'<div class="col-sm-12 xaa-form-toleft">'+
				'<label class="xaa-label">'+columnChooserHide+' :</label>'+
			'</div>'+
			'<input class="xaa-selectmove-filter-right form-control xaa-form-control xaa-form-marginB2" type="text" placeholder="Filter">'+
			'<ul class="xaa-selectmove-list-right"></ul>'+
			'<select multiple="multiple" class="xaa-selectmove-list-right" name="" style="height: 200px;display:none;"></select>'+ 
		'</div>'+
	'</div>'
		ele.find(".modal-body").append(selectMoveConformation);
		}
		var allArr = data.showContentDataArr.concat(data.hideContentDataArr),
		leftLiArr = [],
		rightLiArr = [],
		allLeftArr = data.showContentDataArr,
		allRightArr = data.hideContentDataArr,
		leftCurrentArr = [],
		rightCurrentArr = [],
		leftFilterArr = [],
		rightFilterArr = [];
		var leftItems = "",
		rightItems = "",
		leftItemOptions = "",
		rightItemOptions = "";
		allLeftArr.forEach(function(item,idx) {
			leftCurrentArr.push(item);
		})
		allRightArr.forEach(function(item,idx) {
			rightCurrentArr.push(item);
		})
		setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
		setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
		
		ele.find("ul.xaa-selectmove-list-left").off("click").on("click","li",function(){
			getLeftSelectedLis("xaa-selectmove-list-left",this);
		});
		ele.find("ul.xaa-selectmove-list-right").off("click").on("click","li",function(){
			getRightSelectedLis("xaa-selectmove-list-right",this);
			
		});
		ele.off("click",".xaa-selectmove-all-toright").on("click",".xaa-selectmove-all-toright",function(){
			for(var i=0;i<leftCurrentArr.length;i++){
				for(var j=0;j<allLeftArr.length;j++){
					if(allLeftArr[j].val == leftCurrentArr[i].val) {
						allLeftArr.splice(j,1);
						j--;
					}
				}
			}
			rightCurrentArr = rightCurrentArr.concat(leftCurrentArr);
			allRightArr = allRightArr.concat(leftCurrentArr);
			leftCurrentArr = [];
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
		});
		ele.off("click",".xaa-selectmove-all-toleft").on("click",".xaa-selectmove-all-toleft",function(){
			for(var i=0;i<rightCurrentArr.length;i++){
				for(var j=0;j<allRightArr.length;j++){
					if(allRightArr[j].val == rightCurrentArr[i].val) {
						allRightArr.splice(j,1);
						j--;
					}
				}
			}
			leftCurrentArr = leftCurrentArr.concat(rightCurrentArr);
			allLeftArr = allLeftArr.concat(rightCurrentArr);
			rightCurrentArr = [];
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
		});
		ele.off("click",".xaa-selectmove-toright").on("click",".xaa-selectmove-toright",function(){
			leftLiArr = [];
			ele.find("ul.xaa-selectmove-list-left>li.xaa-select-hover").each(function(){
				var item = {};
				item.val = $(this).attr("value");
				item.order = $(this).attr("order");
				item.content = $(this).html();
				leftLiArr.push(item);

			})
			leftSelectedMove(leftLiArr);
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
			leftLiArr = [];
		});
		ele.off("click",".xaa-selectmove-toleft").on("click",".xaa-selectmove-toleft",function(){
			rightLiArr = [];
			ele.find("ul.xaa-selectmove-list-right>li.xaa-select-hover").each(function(){
				var item = {};
				item.val = $(this).attr("value");
				item.order = $(this).attr("order");
				item.content = $(this).html();
				rightLiArr.push(item);

			})
			rightSelectedMove(rightLiArr);
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
			rightLiArr = [];
		});
		ele.off("click",".xaa-selectmove-totop").on("click",".xaa-selectmove-totop",function(){
			rightLiArr = [];
			leftLiArr = [];
			ele.find("ul.xaa-selectmove-list-right>li.xaa-select-hover").each(function(idx){
				var item = {};
				item.val = $(this).attr("value");
				item.order = $(this).attr("order");
				item.content = $(this).html();
				rightLiArr.push(item);

			})
			ele.find("ul.xaa-selectmove-list-left>li.xaa-select-hover").each(function(idx){
				var item = {};
				item.val = $(this).attr("value");
				item.order = $(this).attr("order");
				item.content = $(this).html();
				leftLiArr.push(item);

			})
			selectedMoveToTop(rightLiArr,rightCurrentArr,allRightArr);			
			selectedMoveToTop(leftLiArr,leftCurrentArr,allLeftArr);
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
			ele.find("ul.xaa-selectmove-list-left>li").each(function(idx){
				var _that = this;
				leftLiArr.forEach(function(val,i){
					if($(_that).attr("value")==val.val){
						$(_that).addClass("xaa-select-hover");
					}
				})
			})
			ele.find("ul.xaa-selectmove-list-right>li").each(function(idx){
				var _that = this;
				rightLiArr.forEach(function(val,i){
					if($(_that).attr("value")==val.val){
						$(_that).addClass("xaa-select-hover");
					}
				})
			});
			rightLiArr = [];
		});
		ele.off("click",".xaa-selectmove-tobottom").on("click",".xaa-selectmove-tobottom",function(){
			rightLiArr = [];
			leftLiArr = [];
			ele.find("ul.xaa-selectmove-list-right>li.xaa-select-hover").each(function(){
				var item = {};
				item.val = $(this).attr("value");
				item.order = $(this).attr("order");
				item.content = $(this).html();
				rightLiArr.push(item);

			})
			ele.find("ul.xaa-selectmove-list-left>li.xaa-select-hover").each(function(){
				var item = {};
				item.val = $(this).attr("value");
				item.order = $(this).attr("order");
				item.content = $(this).html();
				leftLiArr.push(item);

			})
			selectedMoveToBottom(rightLiArr,rightCurrentArr,allRightArr);
			selectedMoveToBottom(leftLiArr,leftCurrentArr,allLeftArr);
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
			ele.find("ul.xaa-selectmove-list-left>li").each(function(idx){
				var _that = this;
				leftLiArr.forEach(function(val,i){
					if($(_that).attr("value")==val.val){
						$(_that).addClass("xaa-select-hover");
					}
				})
			})
			ele.find("ul.xaa-selectmove-list-right>li").each(function(idx){
				var _that = this;
				rightLiArr.forEach(function(val,i){
					if($(_that).attr("value")==val.val){
						$(_that).addClass("xaa-select-hover");
					}
				})
			});
			rightLiArr = [];
		});
		ele.find(".xaa-selectmove-filter-left").on("keyup",function(){
			isLeftFilter();
		});
		ele.find(".xaa-selectmove-filter-right").on("keyup",function(){
			isRightFilter();
		});
		function selectedMoveToTop(arr,arrSide,arrSideAll) {
			if(arr.length>0){
				var orderSide,orderSideAll;
				for(var j=0;j<arrSide.length;j++){
					if(arr[0].val==arrSide[j].val) {
						orderSide = j-1;
					}
				}
				for(var j=0;j<arrSideAll.length;j++){
					if(arr[0].val==arrSideAll[j].val) {
						orderSideAll = j-1;
					}
				};
				for(var i=0;i<arr.length;i++){
					for(var j=0;j<arrSideAll.length;j++){
						if(arr[i].val==arrSideAll[j].val){
							arrSideAll.splice(j,1);
							j--;
						}
					}
				};
				//position of putting arr in arrSideAll
				arr.unshift(orderSideAll>=0?orderSideAll:0,0);
				Array.prototype.splice.apply(arrSideAll,arr);
				arr = function(){
					for(var i=0;i<arr.length;i++) {
						if(!isNaN(arr[i])) {
							arr.splice(i,1);
							i--;
						};
					};
					return arr;
				}();
				for(var i=0;i<arr.length;i++){
					for(var j=0;j<arrSide.length;j++){
						if(arr[i].val==arrSide[j].val){
							arrSide.splice(j,1);
							j--;
						}
					}
				};
				arr.unshift(orderSide>=0?orderSide:0,0);
				Array.prototype.splice.apply(arrSide,arr);
				arr = function(){
					for(var i=0;i<arr.length;i++) {
						if(!isNaN(arr[i])) {
							arr.splice(i,1);
							i--;
						};
					};
					return arr;
				}();
			}
		}
		function selectedMoveToBottom(arr,arrSide,arrSideAll) {
			if(arr.length>0){
				var orderSide,orderSideAll;
				for(var j=0;j<arrSide.length;j++){
					if(arr[arr.length-1].val==arrSide[j].val) {
						orderSide = j-arr.length+2;
					}
				}
				for(var j=0;j<arrSideAll.length;j++){
					if(arr[arr.length-1].val==arrSideAll[j].val) {
						orderSideAll = j-arr.length+2;
					}
				};
				for(var i=0;i<arr.length;i++){
					for(var j=0;j<arrSide.length;j++){
						if(arr[i].val==arrSide[j].val){
							arrSide.splice(j,1);
							j--;
						}
					}
					for(var j=0;j<arrSideAll.length;j++){
						if(arr[i].val==arrSideAll[j].val){
							arrSideAll.splice(j,1);
							j--;
						}
					}
				}	
				if((orderSideAll&&orderSideAll >=0)||orderSideAll ==0) {
					arr.unshift(orderSideAll,0);
					Array.prototype.splice.apply(arrSideAll,arr);
					arr = function(){
						for(var i=0;i<arr.length;i++) {
							if(!isNaN(arr[i])) {
								arr.splice(i,1);
								i--;
							};
						};
						return arr;
					}();
				};
				if((orderSideAll&&orderSideAll >=0)||orderSideAll ==0) {
					arr.unshift(orderSide,0);
					Array.prototype.splice.apply(arrSide,arr);
					arr = function(){
						for(var i=0;i<arr.length;i++) {
							if(!isNaN(arr[i])) {
								arr.splice(i,1);
								i--;
							};
						};
						return arr;
					}();
				};
				
							
			}
		}
		function isLeftFilter(){
			var getFiltercontent = ele.find(".xaa-selectmove-filter-left").val().replace(/(^\s*)|(\s*$)/,"");
			leftCurrentArr = [];
			for(var i=0;i<allLeftArr.length;i++){
				if(allLeftArr[i].content.indexOf(getFiltercontent)!=-1){
					leftCurrentArr.push(allLeftArr[i]);
				}
			}
			setShow("xaa-selectmove-list-left",allLeftArr,leftCurrentArr);
		}
		function isRightFilter(){
			var getFiltercontent = ele.find(".xaa-selectmove-filter-right").val().replace(/(^\s*)|(\s*$)/,"");
			rightCurrentArr = [];
			for(var i=0;i<allRightArr.length;i++){
				if(allRightArr[i].content.indexOf(getFiltercontent)!=-1){
					rightCurrentArr.push(allRightArr[i]);
				}
			}
			setShow("xaa-selectmove-list-right",allRightArr,rightCurrentArr);
		}
		function setShow(selectId,arr,arrDisplay){
			ele.find("select."+selectId).empty();
			ele.find("ul."+selectId).empty();
			for(var j=0;j<arr.length;j++){
				var eleOption = '<option value="'+arr[j].val+'">'+arr[j].content+'</option>';
				var eleLi = '<li class="hide" value="'+arr[j].val+'" order="'+arr[j].order+'">'+arr[j].content+'</li>'
				ele.find("select."+selectId).append(eleOption);
				ele.find("ul."+selectId).append(eleLi);
			}
			ele.find("ul."+selectId+">li").each(function(){
				var _that = this;
				arrDisplay.forEach(function(val,idx){
					if(val.val==$(_that).attr("value")){
						$(_that).removeClass("hide");
					}
				})
			})
			arr = [];
		}
		function getLeftSelectedLis(selectId,opt) {
			rightLiArr = [];
			ele.find("ul.xaa-selectmove-list-right>li").removeClass("xaa-select-hover");
			ele.find("select.xaa-selectmove-list-right").val([]);
			var getLiValue = $(opt).attr("value");	
			if(!$(opt).attr("class")||$(opt).attr("class").indexOf("xaa-select-hover")==-1) {
				$(opt).addClass("xaa-select-hover");
				ele.find("select."+selectId+">option[value = '"+getLiValue+"']").attr("selected",true);
			} else {
				$(opt).removeClass("xaa-select-hover");
				ele.find("select."+selectId+">option[value = '"+getLiValue+"']").removeAttr("selected");
			}
		}
		function getRightSelectedLis(selectId,opt) {
			leftLiArr = [];
			ele.find("ul.xaa-selectmove-list-left>li").removeClass("xaa-select-hover");
			ele.find("select.xaa-selectmove-list-left").val([]);
			var getLiValue = $(opt).attr("value");	
			if(!$(opt).attr("class")||$(opt).attr("class").indexOf("xaa-select-hover")==-1) {
				$(opt).addClass("xaa-select-hover");
				ele.find("select."+selectId+">option[value = '"+getLiValue+"']").attr("selected",true);
			} else {
				$(opt).removeClass("xaa-select-hover");
				ele.find("select."+selectId+">option[value = '"+getLiValue+"']").removeAttr("selected");
			}
		}
		function leftSelectedMove(arr) {
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<leftCurrentArr.length;j++){
					if(arr[i].val==leftCurrentArr[j].val){
						leftCurrentArr.splice(j,1);
						j--;
					}
				}
				for(var j=0;j<allLeftArr.length;j++){
					if(arr[i].val==allLeftArr[j].val){
						allLeftArr.splice(j,1);
						j--;
					}
				}
			}	
			allRightArr = allRightArr.concat(arr);
			rightCurrentArr = rightCurrentArr.concat(arr);	
			arr = [];
		};
		function rightSelectedMove(arr) {
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<allRightArr.length;j++){
					if(arr[i].val==allRightArr[j].val){
						allRightArr.splice(j,1);
						j--;
					}
				}
				for(var j=0;j<rightCurrentArr.length;j++){
					if(arr[i].val==rightCurrentArr[j].val){
						rightCurrentArr.splice(j,1);
						j--;
					}
				}
			}	
			allLeftArr = allLeftArr.concat(arr);
			leftCurrentArr = leftCurrentArr.concat(arr);
			arr = [];
		};
	}
	ui.prototype.selectTree = function(ele,data) {
		var columnChooserShow = xaa.i18nMessageProvider.getLang('jqgridToolbar.columnChooserShow');
		var columnChooserHide = xaa.i18nMessageProvider.getLang('jqgridToolbar.columnChooserHide');
		var allLeftArr = [],
		allRightArr = [];
		data.forEach(function(val,idx){
			if(val.possess){
				allLeftArr.push(val);
			} else {
				allRightArr.push(val);
			}
		})
		if(ele.find(".modal-body .xaa-selecttree").length<1){
			var selectTreeConformation = '<div class="xaa-selecttree">'+
				'<div class="xaa-selecttree-left col-sm-5 col-md-5 xaa-padLeft xaa-padRight">'+   
					'<div class="xaa-form-toleft">'+
						 '<label class="xaa-label">'+columnChooserShow+' :</label>'+
					'</div>'+
					'<ul class="xaa-selecttree-list-left xaa-selecttree-ul-style"></ul>'+ 
				'</div>'+ 
				'<div class="xaa-selecttree-mid col-sm-2 col-md-2 xaa-padLeft xaa-padRight">'+
					'<div class="row xaa-selecttree-btn">'+
						'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
							'<button type="button" class="xaa-selecttree-all-toright btn xaa-btn xaa-validation-btn" title="Move all">'+      
								'<i class="fa fa-angle-double-right"></i>'+    
							'</button>'+ 
						'</div>'+
						'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
							'<button type="button" class="xaa-selecttree-toright btn xaa-btn xaa-validation-btn" title="Move selected">'+       
								'<i class="fa fa-angle-right"></i>'+    
							'</button>'+   
						'</div>'+
						'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
							'<button type="button" class="xaa-selecttree-toleft btn xaa-btn xaa-validation-btn" title="Remove selected">'+   
								'<i class="fa fa-angle-left"></i>'+    
							'</button>'+    
						'</div>'+
						'<div class="col-sm-12 col-md-12 xaa-form-marginB2">'+
							'<button type="button" class="xaa-selecttree-all-toleft btn xaa-btn xaa-validation-btn" title="Remove all">'+     
								'<i class="fa fa-angle-double-left"></i>'+    
							'</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'<div class="xaa-selecttree-right col-sm-5 col-md-5 xaa-padLeft xaa-padRight">'+   
				'<div class="xaa-form-toleft">'+
					'<label class="xaa-label">'+columnChooserHide+' :</label>'+
				'</div>'+
				'<ul class="xaa-selecttree-list-right xaa-selecttree-ul-style"></ul>'+
			'</div>'+
		'</div>'
			ele.find(".modal-body").append(selectTreeConformation);
		}
		setTree("xaa-selecttree-list-left",allLeftArr);
		setTree("xaa-selecttree-list-right",allRightArr);
		
		ele.find("ul.xaa-selecttree-list-left").off("click").on("click","li",function(e){
			var eToStopPropagation = e;
			getLeftSelectedLis("xaa-selecttree-list-left",this,eToStopPropagation);
		});
		ele.find("ul.xaa-selecttree-list-right").off("click").on("click","li",function(e){
			var eToStopPropagation = e;
			getRightSelectedLis("xaa-selecttree-list-right",this,eToStopPropagation);
			
		});
		ele.off("click",".xaa-selecttree-all-toright").on("click",".xaa-selecttree-all-toright",function(){
			allRightArr.forEach(function(val,idx) {
				allLeftArr.forEach(function(v,i) {
					if(val.id == v.id){
						allLeftArr.splice(i,1);
						i--;
					}
				})
			})
			allRightArr = allRightArr.concat(allLeftArr);
			allLeftArr = [];
			setTree("xaa-selecttree-list-left",allLeftArr);
			setTree("xaa-selecttree-list-right",allRightArr);
		});
		ele.off("click",".xaa-selecttree-all-toleft").on("click",".xaa-selecttree-all-toleft",function(){
			allLeftArr.forEach(function(val,idx) {
				allRightArr.forEach(function(v,i) {
					if(val.id == v.id){
						allRightArr.splice(i,1);
						i--;
					}
				})
			})
			allLeftArr = allLeftArr.concat(allRightArr);
			allRightArr = [];
			setTree("xaa-selecttree-list-left",allLeftArr);
			setTree("xaa-selecttree-list-right",allRightArr);
		});
		ele.off("click",".xaa-selecttree-toright").on("click",".xaa-selecttree-toright",function(){
			leftLiArr = [];
			ele.find("ul.xaa-selecttree-list-left li>a.xaa-select-hover").each(function(){
				var liId = $(this).parent().attr("id");
				allLeftArr.forEach(function(val,idx){
					if(val.id==liId){
						var itemSameInLeft=allRightArr.some(function(val,idx) {
							return val.id==liId
						})
						if(!itemSameInLeft){
							leftLiArr.push(val);
						};
					}
				})

			})
			leftSelectedMove(leftLiArr);
			setTree("xaa-selecttree-list-left",allLeftArr);
			setTree("xaa-selecttree-list-right",allRightArr);
			leftLiArr = [];
		});
		ele.off("click",".xaa-selecttree-toleft").on("click",".xaa-selecttree-toleft",function(){
			rightLiArr = [];
			ele.find("ul.xaa-selecttree-list-right li>a.xaa-select-hover").each(function(){
				var liId = $(this).parent().attr("id");
				allRightArr.forEach(function(val,idx){
					if(val.id==liId){
						var itemSameInRight=allLeftArr.some(function(val,idx) {
							return val.id==liId
						})
						if(!itemSameInRight){
							rightLiArr.push(val);
						};
					}
				})
			})
			rightSelectedMove(rightLiArr);
			setTree("xaa-selecttree-list-left",allLeftArr);
			setTree("xaa-selecttree-list-right",allRightArr);
			rightLiArr = [];
		});

		function setTree(selectId,arr){
			ele.find("ul."+selectId).empty();
			for(var i=0;i<arr.length;i++){
				if(arr[i].parentId=="" 
					|| arr[i].parentId=="0" 
						|| arr[i].parentId=="root" 
							|| arr[i].parentId==null){
	                var rootId = arr[i].id;
	                var infoContent = arr[i].val;
	                var firstLi = $('<li id="'+rootId+'" class="dropdown xaa-selecttree-first-li">');
					firstLi.append('<a><span>'
									+ infoContent
									+ '</span></a>');
					// create second branches
					var secondTreeUl = createSecondTree(arr[i], arr)
					if (secondTreeUl != null) {
						//set icon of first branches
						firstLi.find("a").prepend('<span class="xaa-selecttree-parent-icon glyphicon glyphicon-plus-sign"></span>');
						firstLi.append(secondTreeUl);
						firstLi.find("a>.xaa-selecttree-parent-icon").off("click").on("click",function(e){
							if($(this).attr("class").indexOf("plus")!=-1){
								$(this).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
								$(this).parent().siblings("ul").removeClass("hide");
							} else {
								$(this).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
								$(this).parent().siblings("ul").addClass("hide");
							}
							e.stopPropagation();
						})
					}
					ele.find("ul."+selectId).append(firstLi);
				}
			}
		}
		function createSecondTree(current,arr){
			var subTree = new Array();
			for(var i=0; i<arr.length; i++)
			{
				if(arr[i].parentId == current.id)
					subTree.push(arr[i]);
			}

			if(subTree.length>0)
			{
				var secondLiUl = $('<ul class="xaa-selecttree-ul-style hide">');
				for(var j=0; j<subTree.length; j++)
				{
	                var secondLi = $('<li id="'+subTree[j].id+'" class="dropdown xaa-selecttree-second-li">');
	                secondLi.append('<a><span>'
									+ subTree[j].val
									+ '</span></a>');
					secondLiUl.append(secondLi);
					//create third branches
					var thirdTreeUl = createThirdTree(subTree[j], arr);
					if (thirdTreeUl != null) {
						//set icon of first branches
						secondLi.find("a").prepend('<span class="xaa-selecttree-parent-icon glyphicon glyphicon-plus-sign"></span>');
						secondLi.append(thirdTreeUl);
						secondLi.find("a>.xaa-selecttree-parent-icon").off("click").on("click",function(e){
							if($(this).attr("class").indexOf("plus")!=-1){
								$(this).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
								$(this).parent().siblings("ul").removeClass("hide");
							} else {
								$(this).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
								$(this).parent().siblings("ul").addClass("hide");
							}
							e.stopPropagation();
						})
					}
				}
				return secondLiUl;
			}
		};
		function createThirdTree(current,arr){
			var childTree = new Array();
			for(var i=0; i<arr.length; i++)
			{
				if(arr[i].parentId == current.id)
					childTree.push(arr[i]);
			}

			if(childTree.length>0)
			{
				var thirdLiUl = $('<ul class="xaa-selecttree-ul-style hide">');
				for(var j=0; j<childTree.length; j++)
				{
					thirdLiUl.append('<li id="'+childTree[j].id+'" class=" xaa-selecttree-third-li">' 
							+ '<a><span>'+ childTree[j].val +'</span></a> '		
							+ '</li>');
				}
				return thirdLiUl;
			}
		}
		function getLeftSelectedLis(selectId,opt,eToStopPropagation) {
			rightLiArr = [];
			ele.find("ul.xaa-selecttree-list-right li>a").removeClass("xaa-select-hover");
			if(!$(opt).find("a").eq(0).attr("class")||$(opt).find("a").eq(0).attr("class").indexOf("xaa-select-hover")==-1) {
				$(opt).parents("li.xaa-selecttree-second-li").find("a").eq(0).addClass("xaa-select-hover");	
				$(opt).parents("li.xaa-selecttree-first-li").find("a").eq(0).addClass("xaa-select-hover");	
				$(opt).find("a").eq(0).addClass("xaa-select-hover");
				$(opt).find("li>a").addClass("xaa-select-hover");
			} else {
				$(opt).find("a").eq(0).removeClass("xaa-select-hover");
				$(opt).find("li>a").removeClass("xaa-select-hover");
			}
			eToStopPropagation.stopPropagation();
		}
		function getRightSelectedLis(selectId,opt,eToStopPropagation) {
			leftLiArr = [];
			ele.find("ul.xaa-selecttree-list-left li>a").removeClass("xaa-select-hover");
			if(!$(opt).find("a").eq(0).attr("class")||$(opt).find("a").eq(0).attr("class").indexOf("xaa-select-hover")==-1) {
				$(opt).parents("li.xaa-selecttree-second-li").find("a").eq(0).addClass("xaa-select-hover");	
				$(opt).parents("li.xaa-selecttree-first-li").find("a").eq(0).addClass("xaa-select-hover");	
				$(opt).find("a").eq(0).addClass("xaa-select-hover");
				$(opt).find("li>a").addClass("xaa-select-hover");
			} else {
				$(opt).find("a").eq(0).removeClass("xaa-select-hover");
				$(opt).find("li>a").removeClass("xaa-select-hover");
			}
			eToStopPropagation.stopPropagation();
		}
		function leftSelectedMove(arr) {
			//remove item of arr from allRightArr;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<allLeftArr.length;j++){
					if(arr[i].val==allLeftArr[j].val){
						allLeftArr.splice(j,1);
						j--;
					}
				}
			}
			//adding item of arr to allLeftArr if there is some items in allLeftArr whose parentId is same to items' Id of arr;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<allLeftArr.length;j++){//allRightArr has changed
					if(arr[i].id==allLeftArr[j].parentId){
						allLeftArr.push(arr[i]);
						j++;
					}
				}
			}
			
			allRightArr = allRightArr.concat(arr);
			arr = [];
		};
		function rightSelectedMove(arr) {
			//remove item of arr from allRightArr;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<allRightArr.length;j++){
					if(arr[i].val==allRightArr[j].val){
						allRightArr.splice(j,1);
						j--;
					}
				}
			}
			//adding item of arr to allRightArr if there is some items in allRightArr whose parentId are same to items' Id of arr;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<allRightArr.length;j++){//allRightArr has changed
					if(arr[i].id==allRightArr[j].parentId){
						allRightArr.push(arr[i]);
						j++;
					}
				}
			}
			
			allLeftArr = allLeftArr.concat(arr);
			arr = [];
		};
	};
	ui.prototype.modalDialogTree = function($ele,data){
		var eleDialog = $ele.attr('id')+'dialog';
		//Column Chooser Tree
		var contentElement =  '<div id="'+eleDialog+'" class="modal fade xaa-modal-dialog-style">' +
				'<div class="modal-content xaa-modal-common xaa-ui-dialog">' +
					'<div class="modal-header">' +
						'<button type="button" class="close ui-dialog-titlebar-close" data-dismiss="modal" aria-hidden="true">' +
								'<span class="glyphicon glyphicon-remove"></span>' +
						'</button>' +
						'<h4 class="modal-title" id="myModalLabel">' +
							'<span class="glyphicon glyphicon-plus-sign ui-dialog-icon"></span>' +
							'<span id="ui-id-1" class="ui-dialog-title"></span>' +
						'</h4>' +
					'</div>' +
		  		'<div class="modal-body" style="text-align: left;max-height:300px">' +
		  		'</div>' +
		  		'<div class="modal-footer">' +
		  			'<button type="button" class="btn xaa-btn xaa-normal-btn xaa-sm-btn" >Confirm</button>' +
		  			'<button type="button" class="btn xaa-btn xaa-cancel-btn xaa-sm-btn" data-dismiss="modal">Cancel</button>' +
		  		'</div>' +
		  	'</div>' +
		'</div>';
		if($("body").find("#"+eleDialog).length>0){
			$("body").find("#"+eleDialog).remove();
		}
		$("body").append(contentElement);
		$eleDialog = $("#"+eleDialog);
		var baseData = {
				url:"",
				modalIcon: "glyphicon glyphicon-plus-sign",
				modalTitle: "Heaader",
				modalMinWidth: 420,
				modalMaxWidth: null,
				dataArr:[],
				returnPostData: null
		}
		var leftDataArr = [],rightDataArr = [];
		baseData = $.extend(baseData,data);
		if(baseData.url){
			$.ajax({
				type: "GET",
				url: baseData.url,
				dataType:"json",
				async: false,
				success: function(response){
					var dataFromUrl = response.modelObj;
					
					setTree(dataFromUrl);
				}	
			})
		} else {
			setTree(baseData.dataArr);
		}
		function setTree(data) {
			xaa.ui.selectTree($eleDialog,data);
			xaa.dialog.modal($eleDialog,{
				icon: baseData.modelIcon,
				modalTitle: baseData.modalTitle,
				minWidth: baseData.modalMinWidth,
				maxWidth: baseData.modalMaxWidth,
				callback: function(){
		 			var possessData = []
		 			$eleDialog.find(".xaa-selecttree-list-left li").each(function(){
		 				possessData.push($(this).attr("id"));
		 			});
					if(baseData.returnPostData) {
						baseData.returnPostData(possessData);
					}
				}
			})
		}
	};
	
	xaa.addModule("ui", new ui());

}(window, $, xaa));
