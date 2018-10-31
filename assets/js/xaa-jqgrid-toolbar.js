(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = function(){};
	var jqgridToolbar = function() {
		this.defaultCfg = defaultCfg();
	};
	/*xaa.jqgridToolbar.toolbar(“#jqgridToolBar”, 
	});*/

	jqgridToolbar.prototype.toolbarInit = function($ele, toolbarData){
		var toolbarDataBase = {
				jqGridObj: "",
				enableSingleSearch: true,
				singleSearchParam: {
					searchOnKeyUp: false,
					triggerDelay: 500,
					hasButton: true,
					singleSearchPlaceHolder:xaa.i18nMessageProvider.getLang('jqgridToolbar.singleSearchPlaceHolder'),
					singleSearchTitle:xaa.i18nMessageProvider.getLang('jqgridToolbar.singleSearchTitle'),
					singleSearchButton:xaa.i18nMessageProvider.getLang('jqgridToolbar.singleSearchButton')
				},
				enableColumnFilter: true,
				columnFilterParam: {
					icon: "fa fa-filter",
					contentElementId: "",
					contentInit: null,
					columnFilterTitle: xaa.i18nMessageProvider.getLang("jqgridToolbar.columnFilterTitle"),
					dialogWidth: 420,
					returnPostData: function(postdata) {}
				},
				enableColumnChooser: true,
				columnChooserParam: {
					icon: "fa fa-book",
					disableColumns: [],
					columnChooserTitle: xaa.i18nMessageProvider.getLang("jqgridToolbar.columnChooserTitle"),
					dialogWidth: 420,
					afterConfirm: function(){}
				}
		};
		toolbarData.columnFilterParam = $.extend(toolbarDataBase.columnFilterParam,toolbarData.columnFilterParam);
		toolbarData.columnChooserParam = $.extend(toolbarDataBase.columnChooserParam,toolbarData.columnChooserParam);
		toolbarData.singleSearchParam = $.extend(toolbarDataBase.singleSearchParam,toolbarData.singleSearchParam);
		toolbarData = $.extend(toolbarDataBase,toolbarData);
		
		var toolbarFrame =  '<div class="pull-right xaa-toolbar-container">' +
								'<div class="xaa-toolbar-column">' +
								'</div>' +
								'<div class="xaa-toolbar-search">' +
								'</div>' +
							'</div>' ;
		$ele.append(toolbarFrame);
		if(toolbarData.enableColumnFilter) {
			var columnFilter = '<button class="btn xaa-btn xaa-normal-btn xaa-sm-btn xaa-toolbar-filter"><span class="'+toolbarData.columnFilterParam.icon+'"></span></button>';
			$ele.find(".xaa-toolbar-column").append(columnFilter);
			$ele.find(".xaa-toolbar-filter").off("click").on("click",function(){
				xaa.dialog.modal(toolbarData.columnFilterParam.contentElementId,"fa fa-filter",toolbarData.columnFilterParam.columnFilterTitle,toolbarData.columnFilterParam.dialogWidth,false,function(eleDialog){
					if(toolbarData.columnFilterParam.returnPostData) {
						var item = toolbarData.columnFilterParam.returnPostData(eleDialog); 
						if(item) {
							toolbarData.jqGridObj.jqGrid("setGridParam",{postData: item
							}).trigger("reloadGrid")
						}

					}
				});
				if(toolbarData.columnFilterParam.contentInit) {
					toolbarData.columnFilterParam.contentInit();
				}
			})
		}
		if(toolbarData.enableColumnChooser) {
			var searchColumnModel,getMultiselect,searchColumnNames;
			var hideContentDataArr,showContentDataArr,hideColumns=[],showColumns=[],order = [],disableColumnsShow=[],disableColumnsHide=[],disableColumnsShowOrder=[],disableColumnsHideOrder=[];
			var columnChooser = '<button class="btn xaa-btn xaa-normal-btn xaa-sm-btn xaa-toolbar-chooser"><span class="'+toolbarData.columnChooserParam.icon+'"></span></button>';
			$ele.find(".xaa-toolbar-column").append(columnChooser);
			var contentElement =  '<div id="xaa-modal-move" class="modal fade xaa-modal-dialog-style">' +
		  		'<div class="modal-content xaa-modal-common xaa-ui-dialog">' +
		  			'<div class="modal-header">' +
		  				'<button type="button" class="close ui-dialog-titlebar-close" data-dismiss="modal" aria-hidden="true">' +
		 						'<span class="glyphicon glyphicon-remove"></span>' +
		 				'</button>' +
		  				'<h4 class="modal-title" id="myModalLabel">' +
		  					'<span class="glyphicon glyphicon-plus-sign ui-dialog-icon"></span>' +
		  					'<span id="ui-id-1" class="ui-dialog-title"></span>' +
		  				'</h4>' +
		  			'</div>' +
			  		'<div class="modal-body" style="text-align: left;max-height:300px">' +
			  		'</div>' +
			  		'<div class="modal-footer">' +
			  			'<button type="button" class="btn xaa-btn xaa-normal-btn xaa-sm-btn" >Confirm</button>' +
			  			'<button type="button" class="btn xaa-btn xaa-cancel-btn xaa-sm-btn" data-dismiss="modal">Cancel</button>' +
			  		'</div>' +
			  	'</div>' +
			'</div>';
			if($("body").find("#xaa-modal-move").length>0){
				$("body").find("#xaa-modal-move").remove();
			}
			$("body").append(contentElement);
			var $contentElement = $(contentElement);
			$ele.find(".xaa-toolbar-chooser").off("click").on("click",function(){
				hideContentDataArr=[];showContentDataArr=[];
				searchColumnModel = toolbarData.jqGridObj.jqGrid('getGridParam').colModel;
				getMultiselect = toolbarData.jqGridObj.jqGrid('getGridParam').multiselect;
				searchColumnNames = toolbarData.jqGridObj.jqGrid('getGridParam').colNames;
				var idxStart = getMultiselect?1:0;
				searchColumnModel.forEach(function(val,idx) {
					if(idx>=idxStart){
						var item = {};
						item.val = val.name;
						item.content = searchColumnNames[idx];
						item.order = idx;
						if(val.hidden) {
							hideContentDataArr.push(item);
						} else {
							showContentDataArr.push(item);
						};
					}
				})
				if(toolbarData.columnChooserParam.disableColumns.length>0){
					disableColumnsShow=[];
					disableColumnsHide=[];
					disableColumnsShowOrder=[];
					disableColumnsHideOrder=[];
					toolbarData.columnChooserParam.disableColumns.forEach(function(v,i){
						showContentDataArr.forEach(function(val,idx){
							if(v==val.val){
								disableColumnsShow.push(val.val);
								disableColumnsShowOrder.push(val.order);
								showContentDataArr.splice(idx,1);
								idx--;
							}
						});
						hideContentDataArr.forEach(function(val,idx){
							if(v==val.val){
								disableColumnsHide.push(val.val);
								disableColumnsHideOrder.push(val.order);
								hideContentDataArr.splice(idx,1);
								idx--;
							}
						});
					});
				}
				var showColumn = {hideContentDataArr:hideContentDataArr,showContentDataArr:showContentDataArr};
				xaa.ui.selectmove($contentElement,showColumn);
				xaa.dialog.modal($contentElement,"fa fa-exchange",toolbarData.columnChooserParam.columnChooserTitle,toolbarData.columnChooserParam.dialogWidth,false,function(ele){
					showColumns = [];hideColumns = [];order = [];
					$contentElement.find(".xaa-selectmove-list-left>li").each(function(){
						showColumns.push($(this).attr("value"));
						order.push(parseInt($(this).attr("order")));
					})
					order = disableColumnsShowOrder.concat(order);
					order = order.concat(disableColumnsHideOrder);
					$contentElement.find(".xaa-selectmove-list-right>li").each(function(){
						hideColumns.push($(this).attr("value"));
						order.push(parseInt($(this).attr("order")));
					})
					if(getMultiselect){
						order.unshift(0);					
					}
					hideColumns = disableColumnsHide.length?disableColumnsHide.concat(hideColumns):hideColumns;
					showColumns = disableColumnsShow.length?disableColumnsShow.concat(showColumns):showColumns;
					toolbarData.jqGridObj.jqGrid("showCol",showColumns);
					toolbarData.jqGridObj.jqGrid("hideCol",hideColumns);
					toolbarData.jqGridObj.jqGrid("remapColumns",order, true, false);
					if(toolbarData.columnChooserParam.afterConfirm) {
						toolbarData.columnChooserParam.afterConfirm(showColumns,hideColumns,order);
					}
				})
			})
		}
		
		if(toolbarData.enableSingleSearch) {
			var singleSearchTitle = toolbarData.singleSearchParam.singleSearchTitle;
			var singleSearchPlaceHolder = toolbarData.singleSearchParam.singleSearchPlaceHolder;
			var singleSearchButton = toolbarData.singleSearchParam.singleSearchButton;
			var columnChooser = '<span>'+singleSearchTitle+'</span><input class="form-control xaa-form-control" type="text" placeholder="'+singleSearchPlaceHolder+'" />';
			$ele.find(".xaa-toolbar-search").append(columnChooser);
			var searchString,timer,searchColumn,searchColumnParam,searchDataType,jqGridData;
			searchColumnParam = toolbarData.jqGridObj.jqGrid('getGridParam').colModel;
			if(toolbarData.singleSearchParam&&toolbarData.singleSearchParam.searchOnKeyUp) {
				var delayTime = toolbarData.singleSearchParam.triggerDelay;
				$ele.find(".xaa-toolbar-search>input").on("keyup",function (e) {
					searchDataType = toolbarData.jqGridObj.jqGrid('getGridParam').datatype;
					searchString = $(this).val();
					jqGridData = toolbarData.jqGridObj.jqGrid('getGridParam').data;
					if(searchString.replace(/(^\s*)|(\s*$)/g,"")){
						window.clearTimeout(timer);
						if(e.keyCode!=13){
							timer = setTimeout(function(){
								if(searchDataType=="local") {								
									searchOnKeyUpFn(jqGridData,searchColumnParam)
								} else {
									toolbarData.jqGridObj.jqGrid("setGridParam",{postData:{"_singleSearch":searchString}}).trigger("reloadGrid");
								}
							},delayTime);		
						} else {
							$(this).blur();
							if(searchDataType=="local") {								
								searchOnKeyUpFn(jqGridData,searchColumnParam)
							} else {
								toolbarData.jqGridObj.jqGrid("setGridParam",{postData:{"_singleSearch":searchString}}).trigger("reloadGrid");
							}
						}
					} else {
						if(e.keyCode==13){
							$(this).blur();
						}
						if(searchDataType=="local") {								
							jqGridData.forEach(function(val,idx){
								$('#'+val._id_).show();
							});
						} else {
							toolbarData.jqGridObj.jqGrid("setGridParam",{postData:{"_singleSearch":searchString}}).trigger("reloadGrid");
						}
					}
				})
				
			}
			if(toolbarData.singleSearchParam&&toolbarData.singleSearchParam.hasButton){
				var singleSearchBtn = '<button class="btn xaa-btn xaa-normal-btn xaa-sm-btn">'+singleSearchButton+'</button>';
				$ele.find(".xaa-toolbar-search").append(singleSearchBtn);
				$ele.find(".xaa-toolbar-search>button").on("click",function(){
					searchDataType = toolbarData.jqGridObj.jqGrid('getGridParam').datatype;
					searchString = $ele.find(".xaa-toolbar-search>input").val();
					window.clearTimeout(timer);
					jqGridData = toolbarData.jqGridObj.jqGrid('getGridParam').data;
					if(searchString.replace(/(^\s*)|(\s*$)/g,"")) {
						if(searchDataType=="local") {
							searchOnKeyUpFn(jqGridData,searchColumnParam)
						} else {
							toolbarData.jqGridObj.jqGrid("setGridParam",{postData:{"_singleSearch":searchString}}).trigger("reloadGrid");	
						}
					} else {
						if(searchDataType=="local") {
							jqGridData.forEach(function(val,idx){
								$('#'+val._id_).show();
							});
						} else {
							toolbarData.jqGridObj.jqGrid("setGridParam",{postData:{"_singleSearch":searchString}}).trigger("reloadGrid");	
						}
					};
				})
				
			}
			//if(toolbarData.)
		}
		function searchOnKeyUpFn(jqGridData,searchColumnParam){
			jqGridData.forEach(function(val,idx){
				$('#'+val._id_).hide();
			});
			searchColumnParam.forEach(function(val,idx){
				searchColumn = toolbarData.jqGridObj.jqGrid('getCol',val.name,true);
				$.each(searchColumn,function() {
					if(this.value.indexOf(searchString) != -1) {
						$('#'+this.id).show()
					};
				})					
			});
	
		}
	};
	xaa.addModule("jqgridToolbar", new jqgridToolbar());
})(window, $, xaa);
