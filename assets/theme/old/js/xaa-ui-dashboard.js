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
	$(id + ' .glyphicon').css('color','red');
	$(id + ' .glyphicon-text').css('color','red');
}

//mouse out dashboard icon
function outDashboardIcon(obj){
	var id = '#' + obj.id;
 	$(id + ' .glyphicon').css('color','#004276');
	$(id + ' .glyphicon-text').css('color','#004276');
}

 