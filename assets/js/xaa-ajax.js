(function(window, $, xaa){
	//set default Cfg
	var defaultCfg = function() {
			return {
				type:"POST",
				keepBlock:false,
				cache:false,
				debug:false,
				refreshTimer: true,
				blockedByTimeout: true,
				debugLogger:defaultDebug,
				failHandlerList:[]
		};
	};
	
	var defaultDebug = function(log)
	{
		if(this.debug)
		{
			if(window.console)
				window.console.log(log);
			//other un-support browser handling..
		}
	}
	//set default Error handling
	var defaultError = function (XMLHttpRequest, textStatus, errorThrown) {
		
		//update timeout timer if required
		if (this.refreshTimer == true) {
			xaa.timeout.updateTimer();
		}
		
		var errorMsg = textStatus + ": " + (typeof errorThrown != 'undefined'?errorThrown:"");
		if(XMLHttpRequest.status)
			errorMsg +=" "+XMLHttpRequest.status;
		this.debugLogger.call(this, "Exception occured["+errorMsg+"]");
		
		if(typeof this._error == 'function'){
			 this._error.apply(this, arguments);
		}
		else{
			var errorInfo = xaa.i18nMessageProvider.getText("XAA051301");
			errorInfo = errorInfo.replace(/XAA051301 /, "");
			
			if(XMLHttpRequest.status == 400)
			{
				xaa.dialog.error(XMLHttpRequest.responseText, errorInfo, false, false);
			}
			else if(XMLHttpRequest.status == 401)
			{
				xaa.dialog.error(XMLHttpRequest.responseText, errorInfo, false, false, function(){
					window.location.href = XAA_PATH;
				});
			}
			else if(XMLHttpRequest.status == 403)
			{
				xaa.dialog.error(XMLHttpRequest.responseText, errorInfo, false, false);
			}
			else if(XMLHttpRequest.status == 404)
			{
				xaa.dialog.error(XMLHttpRequest.responseText, errorInfo, false, false);
			}
			else if(XMLHttpRequest.status == 500)
			{
				xaa.dialog.error(XMLHttpRequest.responseText, errorInfo, false, false);
			}
			else if(XMLHttpRequest.status == 503)
			{
				xaa.dialog.error(XMLHttpRequest.responseText, errorInfo, false, false);
			}
			else {
				xaa.dialog.error(errorMsg, errorInfo, false, false);
			}
		}
	};
	//set success handling
	var defaultSuccess = function(resp) {
		
		//update timeout timer if required
		if (this.refreshTimer == true) {
			xaa.timeout.updateTimer();
		}
		
		var respTxt = "";
		var isJson = false;
		if(jQuery.inArray("json", this.dataTypes) > -1 || jQuery.inArray("JSON", this.dataTypes) > -1)
		{
			respTxt = JSON.stringify(resp);
			isJson = true;
		}
		else {
			respTxt = resp;
		}
			
		var valid = false;
		
		this.debugLogger.call(this, "reponse from server:["+respTxt+"]");
		
		if((isJson && resp.success) || !isJson)
		{
			this.debugLogger.call(this, "success..");
			valid = true;
			if(typeof this._success == 'function')
			{
				this.debugLogger.call(this, "calling user defined callback success function..");
				this._success.call(this, isJson?(resp.modelObj?resp.modelObj:resp):resp);
			}
			else
			{
				this.debugLogger.call(this, "calling default success function..");
				defaultCallBackSuccess.call(this, resp, respTxt);
			}
		}
		else
		{
			this.debugLogger.call(this, "fail start..");
			for(var i=0;i<this.failHandlerList.length;i++)
			{
				var failObj = this.failHandlerList[i];
				if(failObj.check.call(this, resp))
				{
					this.debugLogger.call(this, "fail handler index = "+(i+1));
					failObj.handler.apply(this, arguments);
					break;
				}
			}
			this.debugLogger.call(this, "fail end..");
		}
	};
	var defaultFail = function(textStatus) {
		
		//update timeout timer if required
		if (this.refreshTimer == true) {
			xaa.timeout.updateTimer();
		}
		
		
		if(typeof this._fail == 'function')
		{
			this.debugLogger.call(this, "calling user defined callback fail function..");
			this._fail.call(textStatus);
		}
		else
		{
			this.debugLogger.call(this, "calling default fail function..");
			defaultCallBackFail.call(this, textStatus);
		}
	};
	//set afterReceive handling
	var afterReceive=function(){
		if(this.keepBlock == true){
			xaa.submitWait.unblockUI();
		}
	}
	
	//set default success handling
	var defaultCallBackSuccess = function(resp, respTxt)
	{
	}
	//set default failure handling
	var defaultCallBackFail =  function(resp) {
		var failAlertText = resp.message;
		if(resp.code) {
			failAlertText+=" ("+resp.code+")";
		}
			
		xaa.dialog.error(failAlertText, "Error Info", false, false);
	}
	//set constructor
	var ajax = function() {
		this.defaultCfg = defaultCfg();
	};
	//set request head before send
	var jsonRequestHeaderFunc = function(func)
	{
		return function(request)
		{   
			request.setRequestHeader("XAA-Json-Request", true);
			if(typeof(func)=='function')
			func.call(this, request);
		}
	}
	//provide a method to set Default setting
	ajax.prototype.setDefault = function(cfg){
		this.defaultCfg = $.extend(true, this.defaultCfg, cfg);
	};
	//provide a method to set failure setting
	ajax.prototype.addFailHandler = function(check, handler)
	{
		this.defaultCfg.failHandlerList.push({check:check, handler:handler});
	}
	//provide a method to send ajax
	ajax.prototype.send = function(cfg){
		var cfg =  $.extend(true, {}, this.defaultCfg, cfg);
		
		if(typeof cfg.error != 'undefined') {
			cfg._error = cfg.error;
		}
		cfg.error = defaultError;
		
		cfg._success = cfg.success;
		cfg.success = defaultSuccess;
		if(cfg.complete)
		{
			var old = cfg.complete;
			cfg.complete  = function()
			{
				afterReceive.call(this, arguments);
				old();
			};
		} else
		{
			cfg.complete  = afterReceive;
		}
		
		if(typeof cfg.fail != 'undefined') {
			cfg._fail = cfg.fail;
		}
		cfg.fail = defaultFail;
		
		cfg.failHandlerList.push({
			check:function(){return true;}, 
			handler:cfg.fail
		});
		cfg.beforeSend = jsonRequestHeaderFunc(cfg.beforeSend);
		
		//set ajax control before send
		if(cfg.keepBlock == true){
			xaa.submitWait.blockUI();
		}
		
		//checking client timeout status
		if (cfg.blockedByTimeout == true) {
			if (xaa.timeout.isTimeout() == true) {
				if(cfg.blocked) {
					cfg.blocked();
				}
				return false;
			}
		}
		
		$.ajax(cfg);
	};
	//new a xaa-ajax
	xaa.addModule("ajax", new ajax());
}(window, $, xaa));