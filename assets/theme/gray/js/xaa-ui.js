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
