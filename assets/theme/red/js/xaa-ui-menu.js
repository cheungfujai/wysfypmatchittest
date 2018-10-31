/*
 * BEA Responsive Mega Menu - Bootstrap with jQuery mega menu
 * Copyright (c) 2016 BEA(HK) Limited
 */
(function($){

	//define the defaults for the plugin and how to call it	
	$.fn.beaMegaMenu = function(options){
		
		// insert css classes
		$("ul.navbar-nav>li>ul").addClass("dropdown-menu");
	    $("ul.navbar-right>li>ul").addClass("dropdown-menu-right");
	    $("ul.navbar-nav>li>ul").addClass("megamenu");
	    $("ul.navbar-nav>li>ul").addClass("row row-centered");
	    /*$("ul.dropdown-menu>li>ul>li>a").prepend('<span class="glyphicon glyphicon-link">&nbsp;</span>');*/
	    $("ul.dropdown-menu>li").addClass("col-sm-4 col-centered");

	    // trigger dropdown
	    $(".dropdown").hover(
		    	function() { $('.dropdown-menu', this).stop().fadeIn("fast");},
		        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
		});
	}
				
})(jQuery);