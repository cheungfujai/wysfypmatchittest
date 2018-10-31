(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = function(){};
	var info = function() {
		this.defaultCfg = defaultCfg();
		this.timer = null;
		this.enableRefreshCounter = null;
	};
	/*xaa.notification(“#jqgridToolBar”, 
	});*/

	info.prototype.notification = function($ele, paramData){
		var data = {
				enableRefreshCounter: true,
				refreshCounterUrl: "",
				refreshCounterInterval: 60000,
				messageUrl: "",
				changeStatusUrl: "", 
				showIcon: false,
				showTimeAgo: true,
				noMessageHint: xaa.i18nMessageProvider.getLang('notification.noMessage'),
				defaultIcon: "fa fa-file",
				resetCounter: function() { xaa.ui.counter($ele,0); },
				formatData: function(data){
					return data;
				},
				clickMessage: function(data) {
					//string url = data.data;
					//window.location.href=url;
				//XXX
				//Return false;
				}
			};
		paramData = $.extend(data,paramData);
		var notificationContent =	'<div class="btn btn-default dropdown-toggle xaa-notification-main" data-toggle="dropdown" aria-expanded="true">' +
	   	 								'<span class="fa fa-bell"></span>' +
	   	 								'<span class="xaa-counter xaa-counter-menu"></span>' +
									'</div>' +
									'<ul class="dropdown-menu pull-right" role="menu"></ul>';
		if($ele.find(".xaa-notification-main").length<1){
			if(!$ele.attr("class")||($ele.attr("class")&&!$ele.is(".xaa-notification"))){
				var notificationContainer = '<div class="xaa-notification btn-group"></div>';
				$ele.append(notificationContainer);
				$ele.find(".xaa-notification").append(notificationContent);
			} else {
				$ele.append(notificationContent);				
			};
		}
		if(paramData.enableRefreshCounter) {
			this.enableRefreshCounter = true;
			this.refreshCounterInterval = paramData.refreshCounterInterval;
			this.url = paramData.refreshCounterUrl;
			this.$ele = $ele;
			getNum();
			window.setInterval(getNum, xaa.info.refreshCounterInterval);
		};
		$ele.find(".xaa-notification-main").on("click",function(){
			if($(".xaa-notification").prop("class").indexOf("open")==-1){
				//清空 counter
				data.resetCounter();
				var _$ele = $(this).next("ul");
				xaa.ajax.send({
					url:paramData.messageUrl,
					type:"get",
					processData:false,
					contentType:false,
					success:function(response){
						if(paramData.formatData){
							paramData.formatData(response);
						};
						if(!response||response.length==0){
							_$ele.empty();
							_$ele.html('<li class="text-center">'+data.noMessageHint+'</li>');
						} else {
						setNotificationData(_$ele,response,paramData.callback);							
						}
					},
					error:function(data){
						
					}
				
				});
			}
		})
		function setNotificationData(_$ele,data,callback) {
			_$ele.empty();
			//设置moment.js语言
			moment.locale(xaa.i18nMessageProvider.getLang("XAA051501"));
			var item ='';
			var messageId,messageStatus,messageIcon,messageTitle,messageDatatime,messsageDetail;
			data.forEach(function(val,idx){
				messageId = val.id;		
				messageStatus = val.status==2?'xaa-notification-read':'xaa-notification-unread';
				messageIcon = paramData.showIcon?(val.icon?val.icon:paramData.defaultIcon):"";
				messageTitle = val.title?val.title:'';
				messageDatatime = paramData.showTimeAgo?moment(val.datetime).fromNow():"";
				messsageDetail = val.detail?val.detail:'';
				item += '<li id="'+messageId+'" class="xaa-notification-item '+messageStatus+'">' +
					  		'<a href="#">' +
				  				'<p class="xaa-notification-title">' +
						  			'<span class="'+
						  			messageIcon +
						  			' xaa-notification-icon"></span>' +
						  			'<span class="xaa-notification-title-content" title="'+
						  			messageTitle +
						  			'">'+
						  			messageTitle +
						  			'</span>' +
						  			'<span class="xaa-notification-title-time pull-right" value="'+messageDatatime+'">'+
						  			messageDatatime+
						  			'</span>' +
						  		'</p>' +
				  				'<p class="xaa-notification-introduction">'+
				  				messsageDetail +
				  				'</p>' +
				  			'</a>' +
				  		'</li>' 
			});
			_$ele.append(item);
			_$ele.find("li").each(function(){
				if(!$(this).find("span:nth-child(3)").attr("value")){
					$(this).find("span:nth-child(2)").css("width","calc(100% - 24px)");
				}
			})
			_$ele.find(".xaa-notification-item").off("click").on("click",function(){
				var _that = this;
				var idx = $(this).index();
				if(data[idx].status!=2) {
					data[idx].status!=2;
					messageStatus = 'xaa-notification-read';
					$(_that).removeClass("xaa-notification-unread").addClass("xaa-notification-read");
					xaa.ajax.send({
						url:paramData.changeStatusUrl+data[idx].id,
						type:"get",
						processData:false,
						contentType:false,
						success:function(data){
						},
						error:function(data){
							
						}
					
					});
				}
				if(paramData.clickMessage) {
					var getReturn = paramData.clickMessage(data[idx]);
					if(getReturn == false) {
						return false;
					}
				}
			})
		}
	};
	var getNum = function() {
		xaa.ajax.send({
			url:xaa.info.url,
			refreshTimer: false,
			type:"POST",
			processData:false,
			contentType:false,
			success:function(data){
				xaa.ui.counter(xaa.info.$ele,data.message);
			},
			error:function(data){
			}
		
		});
	};
	xaa.addModule("info", new info());
})(window, $, xaa);
