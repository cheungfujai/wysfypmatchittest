(function(window, $, xaa) {
	// set default Cfg
	var defaultCfg = {
		uploadUrl: '#',
		language: 'custom',
	    uploadAsync: true,
		showCaption:false,
		showRemove:false,
		showUpload: false,
		showCancel: false,
	    overwriteInitial: false,
	    initialPreviewAsData: true,
		removeFromPreviewOnError: true,
	    minFileCount: 0,
        deleteExtraData: {},
        dropZoneTitle:'',
	    browseLabel:'+',
	    browseIcon:'',
	    fileActionSettings: {
	    	showDrag: false,
	    	showUpload: false
	    },
	    layoutTemplates: {
	    	progress: ''
	    },
	    errorCloseButton: '<button type="button" class="close kv-error-close">&times;</button>',
	}
	var iconPreviewCfg = {
		preferIconicPreview: true, // this will force thumbnails to display icons for following file extensions
	    previewFileIconSettings: { // configure your icon file extensions
	        'file': '<i class="fa fa-file"></i>',
	        'doc': '<i class="fa fa-file-word-o text-primary"></i>',
	        'xls': '<i class="fa fa-file-excel-o text-success"></i>',
	        'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
	        'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
	        'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
	        'htm': '<i class="fa fa-file-code-o text-info"></i>',
	        'txt': '<i class="fa fa-file-text-o text-info"></i>',
	        'mov': '<i class="fa fa-file-movie-o text-warning"></i>',
	        'mp3': '<i class="fa fa-file-audio-o text-warning"></i>',
	        // note for these file types below no extension determination logic 
	        // has been configured (the keys itself will be used as extensions)
	        'jpg': '<i class="fa fa-file-photo-o text-danger"></i>', 
	        'gif': '<i class="fa fa-file-photo-o text-muted"></i>', 
	        'png': '<i class="fa fa-file-photo-o text-primary"></i>'
	    },
	    previewFileExtSettings: { // configure the logic for determining icon file extensions
	        'file': function(ext) {
	            return ext.match(/(.*)$/i);
	        },
	        'doc': function(ext) {
	            return ext.match(/(doc|docx)$/i);
	        },
	        'xls': function(ext) {
	            return ext.match(/(xls|xlsx)$/i);
	        },
	        'ppt': function(ext) {
	            return ext.match(/(ppt|pptx)$/i);
	        },
	        'pdf': function(ext) {
	            return ext.match(/(pdf)$/i);
	        },
	        'zip': function(ext) {
	            return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
	        },
	        'htm': function(ext) {
	            return ext.match(/(htm|html)$/i);
	        },
	        'txt/plain': function(ext) {
	            return ext.match(/(txt|ini|csv|xml|java|php|js|css)$/i);
	        },
	        'mov': function(ext) {
	            return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
	        },
	        'mp3': function(ext) {
	            return ext.match(/(mp3|wav)$/i);
	        },
	        'jpg': function(ext) {
	            return ext.match(/(jpg|jpeg|bmp|gif|png)$/i);
	        }
	    }
	};
	var getAccept = function(exts){
		var ac = { // configure the logic for determining icon file extensions
	        'application/msword': function(ext) {
	            return ext.match(/(doc|docx)$/i);
	        },
	        'application/vnd.ms-excel': function(ext) {
	            return ext.match(/(xls|xlsx)$/i);
	        },
	        'application/vnd.ms-powerpoint': function(ext) {
	            return ext.match(/(ppt|pptx)$/i);
	        },
	        'application/zip, application/x-tar': function(ext) {
	            return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
	        },
	        'text/html': function(ext) {
	            return ext.match(/(htm|html)$/i);
	        },
	        'text/*': function(ext) {
	            return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
	        },
	        'video/quicktime, video/mpeg': function(ext) {
	            return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
	        },
	        'audio/mpeg': function(ext) {
	            return ext.match(/(mp3|wav)$/i);
	        },
	        'image/jpeg, image/gif, image/bmp, image/png': function(ext) {
	            return ext.match(/(jpg|jpeg|png|bmp|gif)$/i);
	        }
	    };
		var accept = [];
		for(var i in exts){
			var ext = exts[i];
			$.each(ac, function (key, func) {
	            if (func(ext)) {
	            	if(accept.indexOf(key) == -1){
	            		accept.push(key);
	            		return false;
	            	}
	            }
	        });
		}
		if(accept.length > 0){
			return accept.join(",");
		}
		return;
	}
	var xfile = function() {
		this.defaultCfg = defaultCfg;
	};
	xfile.prototype.setDefault = function(cfg){
		this.defaultCfg = $.extend(true, this.defaultCfg, cfg);
	};
	var hasInit = false;
	var initParam = function($el, params){
		params = params || {};
		var config = params.config || {};
		if(!hasInit){
			initLocale();
		}
		config.fileActionSettings = {
			removeTitle: getProp('fileinput.removeTitle'),
			downloadTitle: getProp('fileinput.downloadTitle')
		}
		params.config = config;
		var accept = getAccept(config.allowedFileExtensions);
		if(accept){
			$el.prop('accept', accept);
		}
		return params;
	}
	xfile.prototype.upload = function($el, params) {
		params = initParam($el, params);
		var config = params.config;
		var cfg;
		var files = params.files;
		var	$form = params.form||null,
		inputName = params.inputName||null,
		lazySubmit = params.lazySubmit||null,
		previewIcon = params.previewIcon||null;	
		if(params.files){
			if(!params.previewIcon){
				cfg = $.extend(true, {}, defaultCfg, initPreview(files, params.deleteUrl), {showBrowse: false, dropZoneEnabled: false,
				    	fileActionSettings:{
				    		showDownload: true
				    	}}, config);
			}else{
				config.fileActionSettings = {showZoom: false};
				cfg = $.extend(true, {}, defaultCfg, initPreview(files, params.deleteUrl), {showBrowse: false,
			    	fileActionSettings:{
			    		showDownload: true
			    	}}, config, iconPreviewCfg);
			}
		} else if(params.lazySubmit) {
			config.fileActionSettings.dragTitle = getProp(config.fileActionSettings.dragTitle);
			if(!previewIcon){
				cfg = $.extend(true ,{}, defaultCfg, initPreview(files, params.deleteUrl), config);
			}else{
				config.fileActionSettings = {showZoom: false};
				cfg = $.extend(true, {}, defaultCfg, initPreview(files, params.deleteUrl), config, iconPreviewCfg);
			}
			
		} else {
			cfg = $.extend(true, {}, {
				showPreview: false,
				showRemove:true,
			    showUpload: false,
				showCaption:true,
			    fileActionSettings:{
			        showUpload: true
				}
			}, config)
			$el.parent().click(function(){
				//$el.fileinput('clear');
			});
		}
		$el.addClass('file');
		$el.fileinput(cfg);
		if(lazySubmit) {
			$el.on('filebatchselected', function(event, files){
				if(params.tempUploadURL){
		   	   		var formData = new FormData($form);
		   	   		for(var i in files){
		   	   	   		if(!isNaN(i)) {
		   	   	   			if(!files[i].hasOwnProperty("upload")){
				   	   	   		formData.append(params.inputName,files[i]);
						   	   	formData.append(params.inputName+"FileName",files[i].name);
						   	   	formData.append(params.inputName+"ContentType",files[i].type);
						   	   	files[i].upload = "uploaded";
		   	   	   			}
		   	   	   	   	}
		   	   	   	}
					//upload the files to templefolder but not save in DB
					$.ajax({
							url:params.tempUploadURL,
							type:"POST",
							data:formData,
							processData:false,
							contentType:false,
							success:function(data){
								console.log(data);
								},
							error:function(data){
								console.log(data);
								}
						
						});
				}
				return true;
			}).on('filesuccessremove', function(event, id){
				return true;
			}).on('fileclear', function(event) {
				return true;
			}).on('filedeleted', function(event, key, jqXHR, data){
				return true;
			});
			if(config.dropZoneTitle){
				$el.on('change', function(event){
					return true;
				})
			}
			$form.submit(function(){
				var files = $el.fileinput('getFileStack');
				var loc = window.location.href;
				var action = $form.prop('action');
				var ajaxData = new FormData($form[0]);
				Array.prototype.forEach.call(files, function(file){
					ajaxData.append(inputName, file);
				});
				$.ajax({
					type: "POST",
					url: action,
					data: ajaxData,
					processData: false,
					contentType: false,
					success: function(text){
						document.open('text/html');
						document.write(text +
								       '\x3Cscript>window.history.pushState({}, "", "'+action+'");\x3C/script>' +
								       '\x3Cscript>window.onpopstate = function(event) { var state = event.state; if(state) {} else { window.location.href = "'+loc+'" } }\x3C/script>');
						document.close();
					}
				});
				return false;
			});
			if(!params.enableChooseFileBtn) {
				$el.fileinput().parent().hide();
			}
		};
		var $dz = $el.fileinput().parent().parent().find('.file-drop-zone');
		if(params.previewAlign=="center"){
			$dz.find('.file-preview-thumbnails').css({
				'display': 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'flex-direction': 'column'
			});
		}
		if(params.enableDropAndClickEvent) {
			$dz.click(function(e){
				if($dz.find('.file-drop-zone-title').has($(e.target)).length > 0 ||
				   ($(e.target).hasClass('clearfix') && $(e.target).is($dz.children())) ||
				   $(e.target).hasClass('file-drop-zone') ||
				   $(e.target).hasClass('file-drop-zone-title') ||
				   $(e.target).hasClass('file-preview-thumbnails')){
					$el.click();
				}
			});
		}
		return $el;
	};
	
	var fireClick = function(node){
		if(document.createEvent){
			var evt = document.createEvent('MouseEvents');
			evt.initEvent('click', true, true);
			node.dispatchEvent(evt);
		}else if(document.createEventObject){
			node.fireEvent('onclick');
		}else if(typeof node.onclick == 'function'){
			node.onclick();
		}
	}
	var initPreview = function(files, deleteUrl){
		if(!files){
			files = [];
		}
		var initialPreview = [];
		var initialPreviewConfig = [];
		var initialPreviewThumbTags = [];
		for(var i = 0; i < files.length; i++){
			var file = files[i];
			initialPreview.push(file.url);
			initialPreviewConfig.push({
				caption: file.filename,
				url: deleteUrl || XAA_FILE_DELETE_PATH,
				size: file.size,
				downloadUrl: file.url,
				key: file.fileId
			});
		}
		return {
			initialPreviewShowDelete: false,
			initialPreview: initialPreview,
			initialPreviewConfig: initialPreviewConfig,
			append: true
		};
	}
	xfile.prototype.download = function(fileId) {
		window.open(XAA_FILE_DOWNLOAD_PATH + '?fileId='+fileId, '_self');
	};
	var getProp = function(k){
		return xaa.i18nMessageProvider.getText(k).replace(new RegExp(k + ' ', 'g'), '');
	}
	var initLocale = function(){
		xaa.i18nMessageProvider.preload([
		    "fileinput.fileSingle",
		    "fileinput.filePlural",
		    "fileinput.browseLabel",
		    "fileinput.removeLabel",
		    "fileinput.removeTitle",
		    "fileinput.cancelLabel",
		    "fileinput.cancelTitle",
		    "fileinput.uploadLabel",
		    "fileinput.uploadTitle",
		    "fileinput.msgNo",
		    "fileinput.msgNoFilesSelected",
		    "fileinput.msgCancelled",
		    "fileinput.msgZoomModalHeading",
		    "fileinput.msgFileRequired",
		    "fileinput.msgSizeTooSmall",
		    "fileinput.msgSizeTooLarge",
		    "fileinput.msgFilesTooLess",
		    "fileinput.msgFilesTooMany",
		    "fileinput.msgFileNotFound",
		    "fileinput.msgFileSecured",
		    "fileinput.msgFileNotReadable",
		    "fileinput.msgFilePreviewAborted",
		    "fileinput.msgFilePreviewError",
		    "fileinput.msgInvalidFileName",
		    "fileinput.msgInvalidFileType",
		    "fileinput.msgInvalidFileExtension",
		    "fileinput.msgFileTypes.image",
		    "fileinput.msgFileTypes.html",
		    "fileinput.msgFileTypes.text",
		    "fileinput.msgFileTypes.video",
		    "fileinput.msgFileTypes.audio",
		    "fileinput.msgFileTypes.flash",
		    "fileinput.msgFileTypes.pdf",
		    "fileinput.msgFileTypes.object",
		    "fileinput.msgUploadAborted",
		    "fileinput.msgUploadThreshold",
		    "fileinput.msgUploadBegin",
		    "fileinput.msgUploadEnd",
		    "fileinput.msgUploadEmpty",
		    "fileinput.msgUploadError",
		    "fileinput.msgValidationError",
		    "fileinput.msgLoading",
		    "fileinput.msgProgress",
		    "fileinput.msgSelected",
		    "fileinput.msgFoldersNotAllowed",
		    "fileinput.msgImageWidthSmall",
		    "fileinput.msgImageHeightSmall",
		    "fileinput.msgImageWidthLarge",
		    "fileinput.msgImageHeightLarge",
		    "fileinput.msgImageResizeError",
		    "fileinput.msgImageResizeException",
		    "fileinput.msgAjaxError",
		    "fileinput.msgAjaxProgressError",
		    "fileinput.ajaxOperations.deleteThumb",
		    "fileinput.ajaxOperations.uploadThumb",
		    "fileinput.ajaxOperations.uploadBatch",
		    "fileinput.ajaxOperations.uploadExtra",
		    "fileinput.dropZoneTitle",
		    "fileinput.dropZoneClickTitle",
		    "fileinput.fileActionSettings.removeTitle",
		    "fileinput.fileActionSettings.uploadTitle",
		    "fileinput.fileActionSettings.uploadRetryTitle",
		    "fileinput.fileActionSettings.zoomTitle",
		    "fileinput.fileActionSettings.dragTitle",
		    "fileinput.fileActionSettings.indicatorNewTitle",
		    "fileinput.fileActionSettings.indicatorSuccessTitle",
		    "fileinput.fileActionSettings.indicatorErrorTitle",
		    "fileinput.fileActionSettings.indicatorLoadingTitle",
		    "fileinput.previewZoomButtonTitles.prev",
		    "fileinput.previewZoomButtonTitles.next",
		    "fileinput.previewZoomButtonTitles.toggleheader",
		    "fileinput.previewZoomButtonTitles.fullscreen",
		    "fileinput.previewZoomButtonTitles.borderless",
		    "fileinput.previewZoomButtonTitles.close",
		    "fileinput.removeTitle",
		    "fileinput.downloadTitle"
		]);
		$.fn.fileinputLocales['custom'] = {
			fileSingle: getProp('fileinput.fileSingle'),
			filePlural: getProp('fileinput.filePlural'),
			browseLabel: getProp('fileinput.browseLabel'),
			removeLabel: getProp('fileinput.removeLabel'),
			removeTitle: getProp('fileinput.removeTitle'),
			cancelLabel: getProp('fileinput.cancelLabel'),
			cancelTitle: getProp('fileinput.cancelTitle'),
			uploadLabel: getProp('fileinput.uploadLabel'),
			uploadTitle: getProp('fileinput.uploadTitle'),
			msgNo: getProp('fileinput.msgNo'),
			msgNoFilesSelected: getProp('fileinput.msgNoFilesSelected'),
			msgCancelled: getProp('fileinput.msgCancelled'),
			msgZoomModalHeading: getProp('fileinput.msgZoomModalHeading'),
			msgFileRequired: getProp('fileinput.msgFileRequired'),
			msgSizeTooSmall: getProp('fileinput.msgSizeTooSmall'),
			msgSizeTooLarge: getProp('fileinput.msgSizeTooLarge'),
			msgFilesTooLess: getProp('fileinput.msgFilesTooLess'),
			msgFilesTooMany: getProp('fileinput.msgFilesTooMany'),
			msgFileNotFound: getProp('fileinput.msgFileNotFound'),
			msgFileSecured: getProp('fileinput.msgFileSecured'),
			msgFileNotReadable: getProp('fileinput.msgFileNotReadable'),
			msgFilePreviewAborted: getProp('fileinput.msgFilePreviewAborted'),
			msgFilePreviewError: getProp('fileinput.msgFilePreviewError'),
			msgInvalidFileName: getProp('fileinput.msgInvalidFileName'),
			msgInvalidFileType: getProp('fileinput.msgInvalidFileType'),
			msgInvalidFileExtension: getProp('fileinput.msgInvalidFileExtension'),
			msgFileTypes: {
				'image': getProp('fileinput.msgFileTypes.image'),
				'html': getProp('fileinput.msgFileTypes.html'),
				'text': getProp('fileinput.msgFileTypes.text'),
				'video': getProp('fileinput.msgFileTypes.video'),
				'audio': getProp('fileinput.msgFileTypes.audio'),
				'flash': getProp('fileinput.msgFileTypes.flash'),
				'pdf': getProp('fileinput.msgFileTypes.pdf'),
				'object': getProp('fileinput.msgFileTypes.object')
			},
			msgUploadAborted: getProp('fileinput.msgUploadAborted'),
			msgUploadThreshold: getProp('fileinput.msgUploadThreshold'),
			msgUploadBegin: getProp('fileinput.msgUploadBegin'),
			msgUploadEnd: getProp('fileinput.msgUploadEnd'),
			msgUploadEmpty: getProp('fileinput.msgUploadEmpty'),
			msgUploadError: getProp('fileinput.msgUploadError'),
			msgValidationError: getProp('fileinput.msgValidationError'),
			msgLoading: getProp('fileinput.msgLoading'),
			msgProgress: getProp('fileinput.msgProgress'),
			msgSelected: getProp('fileinput.msgSelected'),
			msgFoldersNotAllowed: getProp('fileinput.msgFoldersNotAllowed'),
			msgImageWidthSmall: getProp('fileinput.msgImageWidthSmall'),
			msgImageHeightSmall: getProp('fileinput.msgImageHeightSmall'),
			msgImageWidthLarge: getProp('fileinput.msgImageWidthLarge'),
			msgImageHeightLarge: getProp('fileinput.msgImageHeightLarge'),
			msgImageResizeError: getProp('fileinput.msgImageResizeError'),
			msgImageResizeException: getProp('fileinput.msgImageResizeException'),
			msgAjaxError: getProp('fileinput.msgAjaxError'),
			msgAjaxProgressError: getProp('fileinput.msgAjaxProgressError'),
			ajaxOperations: {
				deleteThumb: getProp('fileinput.ajaxOperations.deleteThumb'),
				uploadThumb: getProp('fileinput.ajaxOperations.uploadThumb'),
				uploadBatch: getProp('fileinput.ajaxOperations.uploadBatch'),
				uploadExtra: getProp('fileinput.ajaxOperations.uploadExtra')
			},
			dropZoneTitle: getProp('fileinput.dropZoneTitle'),
			dropZoneClickTitle: getProp('fileinput.dropZoneClickTitle'),
			fileActionSettings: {
				removeTitle: getProp('fileinput.fileActionSettings.removeTitle'),
				uploadTitle: getProp('fileinput.fileActionSettings.uploadTitle'),
				uploadRetryTitle: getProp('fileinput.fileActionSettings.uploadRetryTitle'),
				zoomTitle: getProp('fileinput.fileActionSettings.zoomTitle'),
				dragTitle: getProp('fileinput.fileActionSettings.dragTitle'),
				indicatorNewTitle: getProp('fileinput.fileActionSettings.indicatorNewTitle'),
				indicatorSuccessTitle: getProp('fileinput.fileActionSettings.indicatorSuccessTitle'),
				indicatorErrorTitle: getProp('fileinput.fileActionSettings.indicatorErrorTitle'),
				indicatorLoadingTitle: getProp('fileinput.fileActionSettings.indicatorLoadingTitle')
			},
			previewZoomButtonTitles: {
				prev: getProp('fileinput.previewZoomButtonTitles.prev'),
				next: getProp('fileinput.previewZoomButtonTitles.next'),
				toggleheader: getProp('fileinput.previewZoomButtonTitles.toggleheader'),
				fullscreen: getProp('fileinput.previewZoomButtonTitles.fullscreen'),
				borderless: getProp('fileinput.previewZoomButtonTitles.borderless'),
				close: getProp('fileinput.previewZoomButtonTitles.close')
			}
		};
		hasInit = true;
	};
	xaa.addModule("file", new xfile());
})(window, $, xaa);
