/**
 * xaa lookup List version 1.0
 */

(function(window, $, xaa){

	var defaultCfg = function(){
		
		var lookupdialog = [
		                    '<div id="xaa-modal-dialog" class="modal fade xaa-modal-dialog-style">',
		                    	'<div class="modal-content xaa-modal-common xaa-ui-dialog">',
		                    		'<div class="modal-header">',
		                    			'<button type="button" class="close ui-dialog-titlebar-close" data-dismiss="modal" aria-hidden="true">',
		                    				'<span class="glyphicon glyphicon-remove"></span>',
		                    			'</button>',
		                    			'<h4 class="modal-title" id="myModalLabel">',
		                    				'<span class="glyphicon glyphicon-plus-sign ui-dialog-icon"></span>',
		                    				'<span id="ui-id-1" class="ui-dialog-title"></span>',
		                    			'</h4>',
		                    		'</div>',
		                    		'<div class="modal-body" style="text-align: left;max-height: 500px;">',
		                    			'<div class="clearfix">',
		                    				'<fieldset style="background: rgba(255,255,255,.15);display: none;">',
		                    					'<div class="xaa-toright-icon" style="margin-top: 0px;">',
		                    						'<div class="xaa-inline-block" style="height: 25px;vertical-align: top;padding-left: 8px;line-height: 0px;border-left:0px;">',
		                    							'<div class="xaa-form-marginB" id="jqgrid-toolbar">',
		                    								'<div class="pull-right xaa-toolbar-container">',
		                    									'<div class="xaa-toolbar-search">',
		                    										'<span>Search</span>',
		                    										'<input id="searchParam" name="params.singleSearch" class="form-control xaa-form-control" placeholder="Please Entry Keywords">',
		                    										'<button id="singleSearchButton" class="btn xaa-btn xaa-normal-btn xaa-sm-btn">OK</button>',
		                    									'</div>',
		                    								'</div>',
		                    							'</div>',
		                    						'</div>',
		                    					'</div>',
		                    				'</fieldset>',
		                    				'<div id="lookupTable" class="normal-table xaa-jqGrid-table">',
				            					'<table id="lookupDialogGrid"></table>',
				            					'<div id="lookupDialogGrid_pager" style="overflow: visible;"></div>',
				            				'</div>',
		                    			'</div>',
		                    		'</div>',
		                    	'</div>',
		                    '</div>'].join('');
		
		$('body').append(lookupdialog);

		return {
			cX: 0,
			cY: 0,
			dbColumnNameArray: [],
			inputFieldArray: [],
			inputValueArray: [],
			//listKey:null,
			url:null
			//propertiesName : ''
		};
	};

	var lookupList = function(){
		this.defaultCfg = defaultCfg();
	};

	lookupList.prototype.showDialogInfo = function(url, params, inputFields, dbColumnName, enableSearch, autoWidth, width){
			
		$('#xaa-modal-dialog').modal({backdrop:false,keyboard:true,show:true});
		$("body").css({"overflow-y":"hidden","padding-right":0});
		$("body").find("#xaa-modal-dialog .modal-header").on("click",".close", function () {
 			$("body").css({"overflow-y":"auto"}); 
		});
		
		if(autoWidth == true){
			$("#xaa-modal-dialog .xaa-ui-dialog").css({'max-width':'none'});
			if(width) {
				$("#xaa-modal-dialog .xaa-ui-dialog").css({'max-width':'none', 'width': width});
			}
		}
		
		if(enableSearch){
			//$("#xaa-modal-dialog fieldset").html(searchParam).show();
			$('#searchParam').val('');
			$("#singleSearchButton").off('click', lookupSearch);
			$("#singleSearchButton").on('click', lookupSearch);
			
			$("#searchParam").off('keyup', lookupAutoSearch);
			$("#searchParam").on('keyup', lookupAutoSearch);
			
			$("#xaa-modal-dialog fieldset").show();
		}
		//this.cX = event.clientX;
		//this.cY = event.clientY;
		this.dbColumnNameArray = dbColumnName.split(',');
		this.inputFieldArray = inputFields.split(',');
		this.inputValueArray = new Array();
		//this.propertiesName = propertiesName;
		this.url = url;
		//var url = contentPath + "/xaa/lookuplist/lookupJson?listKey=" + propertiesName;
		if(params != null && params != ''){
			url += params;
		}
		
		xaa.ajax.send({
			url:url,
			success:function(data){
				fillDateToDialog(data.cacheList, data.header, data.columns, data.name);
			}
		});
	};

	var lookupSearch = function(event){
		event.stopPropagation();
		var searchParam = $('#searchParam').val().trim();
		var param = {};
		if(searchParam != ''){
			param = {'params.singleSearch': searchParam};
		}
		
		
		xaa.ajax.send({
			url:xaa.lookupList.url,
			data:param,
			success:function(data){
				fillDateToDialog(data.cacheList, data.header, data.columns, data.name);
			}
		});
	};
	
	var lookupAutoSearch = function(event){
		
		if((8 == event.keyCode && '' == $(this).val().trim()) || (13 == event.keyCode && '' != $(this).val().trim())){
			$("#singleSearchButton").click();
		}
		
	}
	
	var fillDateToDialog = function(rslt, hdrs, cols, titleName){
		var htmlStr = '<table id="lookupDialogGrid"></table><div id="lookupDialogGrid_pager"></div>';  
		$('#lookupTable').empty().html(htmlStr);  
		$("span.ui-dialog-title").text(titleName);
		
		$("#lookupDialogGrid").jqGrid({
	         datatype: "local",
	         data: rslt,
	         height: "auto",
	         width: "auto",
	         colNames: hdrs,
	         colModel: cols,
	         cmTemplate: {sortable:false},
	         loadonce: true,
	         multiselect: false,
	         multiboxonly: false,
	     	 altRows: true,
	     	 altclass: "ui-priority-secondary-grid",
	         scroll: false,
	         shrinkToFit: true,
	         gridview: true,
	         viewrecords: false,
	         caption: "",
	         /*rowList: [10, 15, 20],*/
	         rowNum:10,
	         pager: "#lookupDialogGrid_pager",
	         pagerpos: "right",
	 	   	 pageable: true,
	 	     ignoreCase: true, 
	 	     hidegrid: false,
	 	     rownumbers: false,
		     rownumWidth: 50,
	         onSelectRow: function(sel_id) {
	        	 // open row for edit
	  			if(sel_id)
	  			{
	  				for(var i=0; i<xaa.lookupList.dbColumnNameArray.length; i++)
	  				{
	  					xaa.lookupList.inputValueArray[i] = $("#lookupDialogGrid").getCell(sel_id, xaa.lookupList.dbColumnNameArray[i]).replace('&nbsp;',' ');
	  					if(xaa.lookupList.inputValueArray[i]=='Y'){
	  						xaa.lookupList.inputValueArray[i]="Yes";
	  					}else if(xaa.lookupList.inputValueArray[i]=='N'){
	  						xaa.lookupList.inputValueArray[i]="No";
	  					}
	  				}
	  				
	  				closePopupDialog('Accept');
	  			}
	  		},
	  		loadComplete: function(data) {
	  			$(".ui-pg-table .ui-paging-pager td:has('span.ui-separator')").remove();
	  			setJqPager($('#lookupDialogGrid'), $("#lookupDialogGrid_pager"));
	  			$("#lookupDialogGrid_pager").css({'overflow': 'visible','height':'36px'});
	  			$("#xaa-modal-dialog> .xaa-modal-common").css("width","calc(90% + 15px)");
	  		}
		});
		$('#lookupDialogGrid').navGrid('#lookupDialogGrid_pager',
	            { edit: false, add: false, del: false, search: false, refresh: false, view: false, position: "left", cloneToTop: false });
		//setTableAlign();
		$("#lookupDialogGrid").parent().addClass("xaa-table-style");
	};

	var closePopupDialog = function(type){
		if(type=='Accept')
		{
			if(xaa.lookupList.inputFieldArray!=null && xaa.lookupList.inputFieldArray!='')
			{
				for(var i=0; i< xaa.lookupList.inputFieldArray.length; i++)
				{
					if(document.getElementById(xaa.lookupList.inputFieldArray[i]).value != undefined)
					{
						$("#" + xaa.lookupList.inputFieldArray[i]).val(xaa.lookupList.inputValueArray[i]);
					}
					else
					{
						$("#" + xaa.lookupList.inputFieldArray[i]).html(xaa.lookupList.inputValueArray[i]);
					}
				}
			}
		}
		$("#" + xaa.lookupList.inputFieldArray[0]).removeAttr("title").removeClass("ui-state-error");
		$(".xaa-modal-dialog-style .close").click();
	};
	
	var setTableAlign = function(){
		var boxWidth = $("#lookupTable .ui-jqgrid-hdiv").width();
		var htable = $("#lookupTable .ui-jqgrid-htable");
		var btable = $("#lookupTable .ui-jqgrid-btable");
		htable.width(boxWidth + 2);
		btable.width(boxWidth + 2);
	};
	
	var setPagerSelect = function(ele,data) {
		xaa.ui.select(ele,data);
	}
	
	xaa.addModule("lookupList", new lookupList());
}(window, $, xaa));