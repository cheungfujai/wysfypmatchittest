(function(window, $, xaa) {
	var defaultConfig=function() {
		this.msg="alert infomation";
		this.minWidth=false;
		this.maxWidth=false;
		this.callback="dialog info";
	}
	//set constructor
	var dialog = function() {
		this.defaultConfig = defaultConfig();
	}
	
	dialog.prototype.alert = function(msg, title, minWidth, maxWidth, callback, zIndexFlag) {
		var data = {
				modelType:"alert",//alert,info,error
				msg: xaa.i18nMessageProvider.getLang("dialog.alertMsg"),
				title: "Header",
				minWidth: null,
				maxWidth: null,
				callback: null,
				zIndexFlag: null
			}
		if(arguments.length==1&&$.isPlainObject(msg)){
			data = $.extend(data,msg);
		} else {
		    data = {
				modelType:"alert",//alert,info,error
				msg: msg,
				title: title,
				minWidth: minWidth,
				maxWidth: maxWidth,
				callback: callback,
				zIndexFlag: zIndexFlag
			}
		}
		common(data); 
	};
	
	dialog.prototype.info = function(msg, title, minWidth, maxWidth, callback, zIndexFlag) {
		var data = {
			modelType:"info",//alert,info,error
			msg: xaa.i18nMessageProvider.getLang("dialog.infoMsg"),
			title: "Header",
			minWidth: null,
			maxWidth: null,
			callback: null,
			zIndexFlag: null
		}
		if(arguments.length==1&&$.isPlainObject(msg)){
			data = $.extend(data,msg);
		} else {
			data = {
				modelType:"info",//alert,info,error
				msg: msg,
				title: title,
				minWidth: minWidth,
				maxWidth: maxWidth,
				callback: callback,
				zIndexFlag: zIndexFlag
			}
		}
		common(data); 
	};
		
	dialog.prototype.error = function(msg, title, minWidth, maxWidth, callback, zIndexFlag) {
		data = {
			modelType:"error",//alert,info,error
			msg: xaa.i18nMessageProvider.getLang("dialog.errorMsg"),
			title: "Header",
			minWidth: null,
			maxWidth: null,
			callback: null,
			zIndexFlag: null
		}
		if(arguments.length==1&&$.isPlainObject(msg)){
			data = $.extend(data,msg);
		} else {
			var data = {
					modelType:"error",//alert,info,error
					msg: msg,
					title: title,
					minWidth: minWidth,
					maxWidth: maxWidth,
					callback: callback,
					zIndexFlag: zIndexFlag
				}
		}
		common(data); 
	};
	
	var common = function(data) {
		var commonData = {
				modelType:"alert",//alert,info,error
				msg: xaa.i18nMessageProvider.getLang("dialog.alertMsg"),
				title: "Header",
				minWidth: null,
				maxWidth: null,
				callback: null,
				zIndexFlag: null
		}
		commonData = $.extend(commonData,data);
		var alertTitle = commonData.title?commonData.title:xaa.i18nMessageProvider.getLang("dialog.alertTitle");
		var infoTitle = commonData.title?commonData.title:xaa.i18nMessageProvider.getLang("dialog.infoTitle");
		var errorTitle = commonData.title?commonData.title:xaa.i18nMessageProvider.getLang("dialog.errorTitle");
		var alertMsg = commonData.msg?commonData.msg:xaa.i18nMessageProvider.getLang("dialog.alertMsg");
		var infoMsg = commonData.msg?commonData.msg:xaa.i18nMessageProvider.getLang("dialog.infoMsg");
		var errorMsg = commonData.msg?commonData.msg:xaa.i18nMessageProvider.getLang("dialog.errorMsg");
		var confirmBtn = xaa.i18nMessageProvider.getLang("dialog.confirmBtn");
		var modelContent =  '<div id="xaa-'+commonData.modelType+'-dialog" class="modal fade">' +
						  		'<div class="modal-content xaa-modal-common xaa-ui-dialog">' +
									'<div class="modal-header">' +
										'<button type="button" class="close ui-dialog-titlebar-close" data-dismiss="modal" aria-hidden="true">' +
											'<span class="glyphicon glyphicon-remove"></span>' +
										'</button>' +
										'<h4 class="modal-title">' +
											'<span class="glyphicon"></span>' +
											'<span id="ui-id-1" class="ui-dialog-title"></span>' +
										'</h4>' +
									'</div>' +
						  		'<div class="modal-body">' +
						  			'<p></p>' +
						  		'</div>' +
						  		'<div class="modal-footer">' +
									'<button type="button" class="btn xaa-btn xaa-normal-btn xaa-sm-btn" data-dismiss="modal">'+
									confirmBtn
									+'</button>' +
						  		'</div>' +
						  	'</div>' +
						'</div>';
		$("body").append(modelContent);		
		switch(commonData.modelType) {
		case "alert": (function() {
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-header .modal-title .glyphicon").removeClass().addClass("glyphicon glyphicon-exclamation-sign");
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-header .modal-title .ui-dialog-title").html(alertTitle);
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-body p").html(alertMsg);
		})();
		break;
		case "info": (function() {
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-header .modal-title .glyphicon").removeClass().addClass("glyphicon glyphicon-info-sign");
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-header .modal-title .ui-dialog-title").html(infoTitle);
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-body p").html(infoMsg);
		})();
		break;
		case "error": (function() {
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-header .modal-title .glyphicon").removeClass().addClass("glyphicon glyphicon-remove-sign");
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-header .modal-title .ui-dialog-title").html(errorTitle);
			$("body").find("#xaa-"+commonData.modelType+"-dialog .modal-body p").html(errorMsg);
		})();
		break;
		default: (function() {
			$("body").find("#xaa-"+commonData.modelType+"-dialog").remove();
			return false;
		})()
		}
		if(minWidth && parseInt($(window).width())>767) {
			$("body").find("#xaa-"+commonData.modelType+"-dialog .xaa-ui-dialog").css("min-width",minWidth+"px");
		};
		if(maxWidth && parseInt($(window).width())>767) {
			$("body").find("#xaa-"+commonData.modelType+"-dialog .xaa-ui-dialog").css("max-width",maxWidth+"px");
		};
		if(commonData.zIndexFlag) {
			$("body").find("#xaa-"+commonData.modelType+"-dialog").css("z-index","1234");
		}
		$('#xaa-'+commonData.modelType+'-dialog').modal({backdrop:false,keyboard:true,show:true});
		$("body").css({"overflow-y":"hidden","padding-right":0});
		$('#xaa-'+commonData.modelType+'-dialog').on('hidden.bs.modal', function (e) {
		$("body").find('#xaa-'+commonData.modelType+'-dialog').remove();
		$("body").css({"overflow-y":"auto"});
		if(commonData.callback) {
			commonData.callback();
		}
		});
	};
	
	dialog.prototype.confirm = function(msg,minWidth,maxWidth,callback) {
		var commonData = {
				msg: xaa.i18nMessageProvider.getLang("dialog.confirmMsg"),
				title: "Header",
				minWidth: null,
				maxWidth: null,
				callback: null
		}
		if(arguments.length==1&&$.isPlainObject(msg)){
			commonData = $.extend(commonData,msg);
		} else {
			commonData = {
				msg: msg,
				title: "Header",
				minWidth: minWidth,
				maxWidth: maxWidth,
				callback: callback
			}
		}
		var confirmBtn = xaa.i18nMessageProvider.getLang("dialog.confirmBtn");
		var cancelBtn = xaa.i18nMessageProvider.getLang("dialog.cancelBtn");
		var confirmMsg = commonData.msg?commonData.msg:xaa.i18nMessageProvider.getLang("dialog.confirmMsg");
		var confirmTitle = commonData.title?commonData.title:xaa.i18nMessageProvider.getLang("dialog.confirmTitle");
		
		var modelContent ='<div id="xaa-confirm-dialog" class="modal fade">' +
						  		'<div class="modal-content xaa-modal-common xaa-ui-dialog">' +
									'<div class="modal-header">' +
										'<button type="button" class="close ui-dialog-titlebar-close" data-dismiss="modal" aria-hidden="true">' +
											'<span class="glyphicon glyphicon-remove"></span>' +
										'</button>' +
										'<h4 class="modal-title" id="myModalLabel">' +
											'<span class="glyphicon glyphicon-question-sign"></span>' +
											'<span id="ui-id-1" class="ui-dialog-title">'+
											confirmTitle
											+'</span>' +
										'</h4>' +
									'</div>' +
						  		'<div class="modal-body" style="max-height: 300px">' +
						  			'<p></p>' +
						  		'</div>' +
						  		'<div class="modal-footer">' +
						  			'<button type="button" class="btn xaa-btn xaa-normal-btn xaa-sm-btn">'+
						  			confirmBtn
						  			+'</button>' +
						  			'<button type="button" class="btn xaa-btn xaa-cancel-btn xaa-sm-btn" data-dismiss="modal">'+
						  			cancelBtn
						  			+'</button>' +
						  		'</div>' +
						  	'</div>' +
						'</div>';
		$("body").append(modelContent);
		$("body").find("#xaa-confirm-dialog .modal-body p").html(confirmMsg);
		if(minWidth && parseInt($(window).width())>767) {
			$("body").find("#xaa-confirm-dialog .xaa-ui-dialog").css("min-width",minWidth+"px");
		};
		if(maxWidth && parseInt($(window).width())>767) {
			$("body").find("#xaa-confirm-dialog .xaa-ui-dialog").css("max-width",maxWidth+"px");
		};	
		$('#xaa-confirm-dialog').modal({backdrop:false,keyboard:true,show:true});
		$("body").css({"overflow-y":"hidden","padding-right":0});
		$('#xaa-confirm-dialog').on('hidden.bs.modal', function (e) {
			$("body").find('#xaa-confirm-dialog').remove();
			$("body").css({"overflow-y":"auto"});
		})
		$("body").find("#xaa-confirm-dialog .modal-footer").on("click","button:first",function() {
			$("body").find('#xaa-confirm-dialog').remove();
			$("body").css({"overflow-y":"auto"});
			if(commonData.callback) {
				commonData.callback();
			}
		});
	};
	
	dialog.prototype.modal = function(ele,icon,modalTitle,minWidth,maxWidth,callback,innerContent) {
		var commonData = {
				icon: "glyphicon glyphicon-plus-sign",
				modalTitle: "Header",
				minWidth: null,
				maxWidth: null,
				innerContent: null,
				callback: null
		}
		if(arguments.length==2&&$.isPlainObject(icon)){
			commonData = $.extend(commonData,icon);
		} else {
			commonData = {
				icon: icon,
				modalTitle: modalTitle,
				minWidth: minWidth,
				maxWidth: maxWidth,
				callback: callback,
				innerContent: innerContent
			}
		}
		var confirmBtn = xaa.i18nMessageProvider.getLang("dialog.confirmBtn");
		var cancelBtn = xaa.i18nMessageProvider.getLang("dialog.cancelBtn");
		var modalTitle = commonData.modalTitle?commonData.modalTitle:xaa.i18nMessageProvider.getLang("dialog.modalTitle");
		var getModel,eleSelector,eleSelectorId;
		eleSelector = ele.selector;
		eleSelectorId = ele.selector.replace("#","");
		if(!ele.length){
			var modelContent;			
				modelContent ='<div id="'+eleSelectorId+'" class="modal xaa-modal-dialog-style fade">' +
				  		'<div class="modal-content xaa-modal-common xaa-ui-dialog">' +
							'<div class="modal-header">' +
								'<button type="button" class="close ui-dialog-titlebar-close" data-dismiss="modal" aria-hidden="true">' +
									'<span class="glyphicon glyphicon-remove"></span>' +
								'</button>' +
								'<h4 class="modal-title" id="myModalLabel">' +
									'<span class="'+commonData.icon+'"></span>' +
									'<span id="ui-id-1" class="ui-dialog-title">Header</span>' +
								'</h4>' +
							'</div>' +
				  		'<div class="modal-body" style="max-height: 300px">' +
				  		'</div>' +
				  		'<div class="modal-footer">' +
				  			'<button type="button" class="btn xaa-btn xaa-normal-btn xaa-sm-btn">'+confirmBtn+'</button>' +
				  			'<button type="button" class="btn xaa-btn xaa-cancel-btn xaa-sm-btn" data-dismiss="modal">'+cancelBtn+'</button>' +
				  		'</div>' +
				  	'</div>' +
				'</div>';
			$("body").append(modelContent);	
			if(commonData.innerContent){
				$("body").find("#"+eleSelectorId+" .modal-body").append(commonData.innerContent);
			};	
			ele = $("#"+eleSelectorId);
		}

		ele.find("input").on("keydown",function(e){
			return e.keyCode!=27;
		})
		if(commonData.icon) {
			ele.find(" .modal-header .ui-dialog-icon").removeClass("glyphicon-plus-sign").addClass(commonData.icon);
		};
		ele.find(" .modal-header .ui-dialog-title").html(modalTitle);
		if(minWidth && parseInt($(window).width())>767) {
			ele.find(".xaa-ui-dialog").css("min-width",minWidth+"px");
		};
		if(maxWidth && parseInt($(window).width())>767) {
			ele.find(".xaa-ui-dialog").css("max-width",maxWidth+"px");
		};
		ele.modal({backdrop:false,keyboard:true,show:true});
		$("body").css({"overflow-y":"hidden","padding-right":0});
		ele.find(".modal-footer").on("click","button:last", function () {
 			$("body").css({"overflow-y":"auto"});
		});
		ele.find(".modal-header").on("click",".close", function () {
 			$("body").css({"overflow-y":"auto"});
		});
		ele.find(".modal-footer").off("click","button:first").on("click","button:first",function() {
			if(commonData.callback&& typeof commonData.callback =="function") {
				commonData.callback(ele);
			}
			ele.modal("hide");
			$("body").css({"overflow-y":"auto"});
		});
	};
	
	var mesArr = [];
	var timer = [];
	var timerToWait = [];
	
	dialog.prototype.toast = function(obj) {
		mesArr.push(obj);
		showToastMsgFunc();
	};
	
	dialog.prototype.toastTimer = function(obj) {
		mesArr.push(obj);
		showToastMsgFuncTimer();
	};
	
	var showToastMsgFuncTimer = function(newMsgNum) {
		var msgNum;
		// add
		if(!$(".xaa-toast-wrap").length){
			$("body").append('<div class="xaa-toast-wrap"></div>');
		};
		addLocalStorageItem(newMsgNum);
		
		function addLocalStorageItem(newMsgNum) {
			msgNum = $(".xaa-toast-wrap .xaa-toast").length;
			if(msgNum<4) {
				if(newMsgNum || newMsgNum == 0) {
					var itemContent = getLocalStorageItem();
					showMeg(itemContent,newMsgNum);
				} else {
					function getXaaToastNum() {
						for(var k=0;k<4;k++){
							if(!$(".xaa-toast-timer"+k).length) {
								return k;
								break;
							}
						}
					}
					var msgNum = getXaaToastNum();
					var itemContent = getLocalStorageItem();
					showMeg(itemContent,msgNum);
				}
			}
		}
		
		// get
		function getLocalStorageItem() {
			var item = mesArr.length > 0 ? mesArr[0] : {};
			mesArr.splice(0,1);
			return item;
		}
		/*
			function getLocalStorageItemFirst() {
			var mesArr = JSON.parse(window.localStorage.getItem("toastMessage")).arrMsg;
			var item = mesArr.length > 0 ? mesArr[0] : {};
			mesArr.splice(0,1);
			window.localStorage.setItem("toastMessage", JSON.stringify({arrMsg: mesArr}));
			return item;
		}
		*/
		// delete
		/*
			function deleteLocalStorageItem() {
			var mesArr = JSON.parse(window.localStorage.getItem("toastMessage")).arrMsg;
			mesArr.shift();
			window.localStorage.setItem("toastMessage", JSON.stringify({arrMsg: mesArr}));
		}
		*/
		function showMeg(paramObject,msgNum) {
			//window.clearInterval(timer);
			//window.clearTimeout(timerToWait);
			window.clearInterval(timer[msgNum]);
			var dispearTime = paramObject.time;
			
			mapToasts(paramObject,msgNum);
			clearToast();
			
			function mapToasts(contentObj,msgNum) {
				$(".xaa-toast-wrap").prepend('<div class="xaa-toast xaa-toast-timer'+msgNum+'">\
									<div class="xaa-toast-header ">\
									  <button type="button" class="close btn-close 	xaa-toast-close">&times;</button>\
									</div>\
									<div class="xaa-toast-body">\
									   '+ contentObj.content +'\
									</div>\
								  </div>');
				
				if (contentObj.css && contentObj.css.width) {
					/*$(".xaa-toast-wrap").width(parseFloat(contentObj.css.width.replace("px", "")) + 5);*/
					$(".xaa-toast-wrap>.xaa-toast").css(contentObj.css);
					$(".xaa-toast-wrap>.xaa-toast").css("opacity", 1);
			
				}
				
				$(".xaa-toast-wrap>.xaa-toast>.xaa-toast-body").off("click").on("click", function() {
					eval(contentObj.callback + '()');
				});
			}

			$(".xaa-toast-timer"+msgNum).off("click").on("click", ".xaa-toast-close", function() {
				window.clearInterval(timer[msgNum]);
				var itm = ".xaa-toast-timer" + msgNum;
				$(itm).animate({
						"opacity": 0,
				}, 1000, function() {
					$(itm).remove();
	 				if (mesArr.length>0) {
	 					var msgNum1 = $(".xaa-toast-wrap .xaa-toast").length;
	 					if(msgNum1<4) {
	 	 					var dataType = mesArr[0].time;
	 	 					if(dataType) {
	 	 						var itemContent1 = getLocalStorageItem();
	 							showMeg(itemContent1,msgNum);
	 	 	 	 			} else {
		 	 	 	 			var newMsgNum = msgNum;
 							    showToastMsgFunc(newMsgNum);
 						    }
	 					}
	 					//	mapToasts(getLocalStorageItem());
						// else {
						//	window.clearInterval(timer);
						// }
	 				}
				});
				/* timerToWait = window.setTimeout(function() {
					clearToast();
				}, 1000); */
			});
			
			function clearToast() {
				window.clearInterval(timer[msgNum]);
				timer[msgNum] = window.setInterval(function() {
					var itm  = ".xaa-toast-timer" + msgNum;
					$(itm).animate({
						"opacity": 0,
					}, 1000, function() {
						var $newNum = $(this).attr("class");
						$newNum = parseInt($newNum.replace(/[^0-9]/ig,""));
						$(this).remove();			
	 					if (mesArr.length>0) {
	 						var msgNum1 = $(".xaa-toast-wrap .xaa-toast").length;
	 						if(msgNum1<4) {
		 	 					var dataType = mesArr[0].time;
		 	 					if(dataType) {
		 	 						var itemContent1 = getLocalStorageItem();
		 							showMeg(itemContent1,$newNum);
		 	 	 	 			} else {
								    showToastMsgFunc($newNum);
	 						    };			
	 						};
	 						// mapToasts(getLocalStorageItem());
	 					};
	 					/* else {
							window.clearInterval(timer);
						} */
					});	
				}, dispearTime);
			}
		}
	};

	var showToastMsgFunc = function(newMsgNum) {
	    var msgNum;
		// add
		if(!$(".xaa-toast-wrap").length){
			$("body").append('<div class="xaa-toast-wrap"></div>');
		}
		addLocalStorageItem(newMsgNum);
		
		function addLocalStorageItem(newMsgNum) {
			msgNum = $(".xaa-toast-wrap .xaa-toast").length;
			if(msgNum<4) {
				if(newMsgNum || newMsgNum == 0) {
					var itemContent = getLocalStorageItem();
					showMeg(itemContent,newMsgNum);
				}else {
					function getXaaToastNum(){
						for(var k=0;k<4;k++){
							if(!$(".xaa-toast-timer"+k).length) {
								return k;
								break;
							}
						}
					}
					var msgNum = getXaaToastNum();
					var itemContent = getLocalStorageItem();
					showMeg(itemContent,msgNum);
				}
			}
		}
		
		// get
		function getLocalStorageItem() {
			var item = mesArr.length > 0 ? mesArr[0] : {};
			mesArr.splice(0,1);
			return item;
		}
		/* 	function getLocalStorageItemFirst() {
			var mesArr = JSON.parse(window.localStorage.getItem("toastMessage")).arrMsg;
			var item = mesArr.length > 0 ? mesArr[0] : {};
			mesArr.splice(0,1);
			window.localStorage.setItem("toastMessage", JSON.stringify({arrMsg: mesArr}));
			return item;
		}
		*/
		// delete
		/* 	function deleteLocalStorageItem(j) {
			var mesArr = JSON.parse(window.localStorage.getItem("toastMessage")).arrMsg;
			mesArr.splice(j,1);
			window.localStorage.setItem("toastMessage", JSON.stringify({arrMsg: mesArr}));
		}
		*/
		function showMeg(paramObject,msgNum) {
		 	window.clearInterval(timer[msgNum]);
		
			mapToasts(paramObject,msgNum);
			
			function mapToasts(contentObj,msgNum) {
				$(".xaa-toast-wrap").prepend('<div class="xaa-toast xaa-toast-timer'+msgNum+'">\
									<div class="xaa-toast-header ">\
									  <button type="button" class="close btn-close 	xaa-toast-close">&times;</button>\
									</div>\
									<div class="xaa-toast-body">\
									   '+ contentObj.content +'\
									</div>\
								  </div>');
				
				if (contentObj.css && contentObj.css.width) {
					/*$(".xaa-toast-wrap").width(parseFloat(contentObj.css.width.replace("px", "")) + 5);*/
					$(".xaa-toast-wrap>.xaa-toast").css(contentObj.css);
					$(".xaa-toast-wrap>.xaa-toast").css("opacity", 1);
			
				}
				$(".xaa-toast-wrap>.xaa-toast>.xaa-toast-body").off("click").on("click", function() {
					eval(contentObj.callback + '()');
				});
			}
			
			$(".xaa-toast").each(function(i) {
				$(".xaa-toast").off("click").on("click", ".xaa-toast-close", function() {
					$(this).parents(".xaa-toast").animate({
						"opacity": 0,
					}, 1000, function() {
						var $newNum = $(this).attr("class");
						$newNum = parseInt($newNum.replace(/[^0-9]/ig,""));
						
						$(this).remove();
	 					if (mesArr.length>0) {
	 						var msgNum1 = $(".xaa-toast-wrap .xaa-toast").length;
	 						if(msgNum1<4) {
		 	 					var dataType = mesArr[0].time;
		 	 					if(dataType) {
		 	 						showToastMsgFuncTimer($newNum);
		 	 	 	 			} else {
		 							var itemConent1 = getLocalStorageItem();
		 							showMeg(itemConent1,$newNum);
		 	 	 	 	 		};
	 						}			
	 						//mapToasts(getLocalStorageItem());
						}
					});
				});
			});
		}
	};
	
	xaa.addModule("dialog", new dialog());

}(window, $, xaa));