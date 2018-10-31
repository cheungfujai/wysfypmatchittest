
(function($,xaa){
	
	var submitWait=function(){
		var Message="";
		var css={width:'300px',height:'80px',background:'blue'};
		var setDefault={message:this.Message,css:this.css};
	}
	
	var lockScreen=function(){
		var cfg={
			message:this.Message,
			css:this.css
		};
		return $.blockUI(cfg);
	};
	
	var unlockScreen=function(){
		$.unblockUI();
	};

	submitWait.prototype.setDefault=function(cfg){
		this.setDefault = $.extend(true, this.setDefault, cfg);
	};
    //provide setBlockMessage API
	submitWait.prototype.setBlockMessage=function(msg){
		this.Message=msg;
	};
	//provide setBlockCss API
	submitWait.prototype.setBlockCss=function(css){
		this.css=$.extend({}, this.css, css);
	};
	//provide blockUI API
	submitWait.prototype.blockUI =function(){
		lockScreen.call(this);
	};
	//provide unblockUI API
	submitWait.prototype.unblockUI =function(){
		unlockScreen.call(this);
	};
	
	xaa.addModule("submitWait", new submitWait());
	
}($,xaa));

