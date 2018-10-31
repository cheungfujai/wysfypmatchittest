(function(window, $, xaa){
	//set default Cfg
	var defaultCfg = function() {
			return {
				type:"POST",
				cache:false,
				debug:false,
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
		var errorMsg = textStatus + ": " + (typeof errorThrown != 'undefined'?errorThrown:"");
		if(XMLHttpRequest.status)
			errorMsg +=" "+XMLHttpRequest.status;
		this.debugLogger.call(this, "Exception occured["+errorMsg+"]");
		
		if(typeof this._error == 'function'){
			 this._error.apply(this, arguments);
		}
		else{
			alertDialog(errorMsg, "Error");
		}
	};
	//set success handling
	var defaultSuccess = function(resp) {
		var respTxt = "";
		var isJson = false;
		if(jQuery.inArray("json", this.dataTypes) > -1 || jQuery.inArray("JSON", this.dataTypes) > -1)
		{
			respTxt = JSON.stringify(resp);
			isJson = true;
		}
		else
			respTxt = resp;
		var valid = false;
		
		this.debugLogger.call(this, "reponse from server:["+respTxt+"]");
		
		if((isJson && resp.success) || !isJson)
		{
			this.debugLogger.call(this, "success..");
			valid = true;
			if(typeof this._success == 'function')
			{
				this.debugLogger.call(this, "calling user defined callback success function..");
				this._success.call(this, isJson?resp.modelObj:resp);
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
	//set afterReceive handling
	var afterReceive=function(){
		if(!this.keepBlock)
		xaa.submitWait.unblockUI();
	}
	
	//set default success handling
	var defaultCallBackSuccess = function(resp, respTxt)
	{
	}
	//set default failure handling
	var defaultCallBackFail =  function(resp) {
		var failAlertText = "Fail: "+resp.message;
		if(resp.code)
			failAlertText+=" ("+resp.code+")";
		alertDialog(failAlertText, "Fail");
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
		var cfg0 =  $.extend(true, {}, this.defaultCfg, cfg);
		
		if(typeof cfg0.error != 'undefined')
			cfg0._error = cfg0.error;
		cfg0.error = defaultError;
		
		cfg0._success = cfg0.success;
		cfg0.success = defaultSuccess;
		if(cfg0.complete)
		{
			var old = cfg0.complete;
			cfg0.complete  = function()
			{
				afterReceive.call(this, arguments);
				old();
			};
		} else
		{
			cfg0.complete  = afterReceive;
		}
		
		cfg0.failHandlerList.push({
			check:function(){return true;}, 
			handler:typeof cfg0.fail == 'function'?cfg0.fail:defaultCallBackFail
		});
		cfg0.beforeSend = jsonRequestHeaderFunc(cfg0.beforeSend);
		
		//set ajax control before send
		xaa.submitWait.blockUI();
		$.ajax(cfg0);
	};
	//new a xaa-ajax
	xaa.addModule("ajax", new ajax());
}(window, $, xaa));