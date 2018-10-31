
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
		if(parseInt($(window).width()) >767) {
			$(".blockPage").addClass("blockPage-loadingPc");
			$(".blockPage-loadingPc").css({
				"width": "auto",
				 "top": "50%",
				 "left": "50%",
				 "padding": "0 10px",
				 "border": 0
				});
		} else {
			$(".blockPage").addClass("blockPage-loadingPhone");
			$(".blockPage-loadingPhone").css({
				"width": "70%",
				 "top": "50%",
				 "left": "15%",
				 "padding": "0 10px",
				 "border": 0
				});
		}
		$("body").css("overflow-y","hidden");
	};
	//provide unblockUI API
	submitWait.prototype.unblockUI =function(){
		unlockScreen.call(this);
		$("body").css("overflow-y","auto");
	};
	
	xaa.addModule("submitWait", new submitWait());
	
}($,xaa));
