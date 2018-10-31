/************************************************************************
*  Description:  Scripts for BEA mega menu                              *
*  Author     :  Yang Jun                                               *
*  Date       :  2016-04-25                                             *
*************************************************************************/
//alert('test');

$(document).ready(function() {
	$('.bea-dashboard-icons').attr('onmouseover','overDashboardIcon(this);');
	$('.bea-dashboard-icons').attr('onmouseout','outDashboardIcon(this);');
});

//mouse over dashboard icon
function overDashboardIcon(obj){
	var id = '#' + obj.id;
	$(id + ' .glyphicon').css('color','#fff');
	$(id + ' .fa').css('color','#fff');
	$(id + ' .glyphicon-text').css('color','#fff');
}

//mouse out dashboard icon
/*function outDashboardIcon(obj){
	var id = '#' + obj.id;
 	$(id + ' .glyphicon').css('color','#d60015');
 	$(id + ' .fa').css('color','#d60015');
	$(id + ' .glyphicon-text').css('color','#333');
}*/
//mouse out dashboard icon;if you want to change second style for the System,Please use this.
function outDashboardIcon(obj){
	var id = '#' + obj.id;
 	$(id + ' .glyphicon').css('color','#76323f');
 	$(id + ' .fa').css('color','#76323f');
	$(id + ' .glyphicon-text').css('color','#333');
}