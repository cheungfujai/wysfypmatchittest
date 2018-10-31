(function($,xaa){
	//chooser tree  three   root->second node->third node 
	function TreeManage(){
		this.html_catch = document.createDocumentFragment();
	}
	
	//build html
	TreeManage.prototype.buildHtml = function(options){
		var obj = JSON.parse(options.data),
			max_height = options.height || '208px',
			xaa_tree = document.createElement("div");
		xaa_tree.className = 'xaa-tree';
		xaa_tree.style.cssText = "height:"+max_height;
		for(var k in obj){
			var _ul = document.createElement("div"),
				first_part = document.createElement("div");
		//	_ul.className = 'xaa-tree';
			first_part.className = 'xaa-tree-pr js-first-part';
			//first_part.className = "js-first-part"
			if(obj[k].child && obj[k].child.length>0){	
				first_part.innerHTML = '<i class="glyphicon glyphicon-plus-sign"></i>'+
											'<span data-id="'+obj[k].id+'">'+obj[k].name+'</span>';
			}
			else{first_part.innerHTML = '<span data-id="'+obj[k].id+'">'+obj[k].name+'</span>';}
			$(_ul).append(first_part);
			if(obj[k].child && obj[k].child.length>0){
				for(var j in obj[k].child){
					var first_part_child = document.createElement("div");
					var second_part = document.createElement("div");
					first_part_child.className = 'pd-second-part';
					second_part.className = 'xaa-tree-pr js-second-part';
					//second_part.className = 'js-second-part';
					if(obj[k].child[j].child && obj[k].child[j].child.length>0){	
						second_part.innerHTML = '<i class="glyphicon glyphicon-plus-sign"></i>'+
														'<span data-id="'+obj[k].child[j].id+'">'+obj[k].child[j].name+'</span>';
					}
					else{second_part.innerHTML = '<span data-id="'+obj[k].child[j].id+'">'+obj[k].child[j].name+'</span>';}
					$(first_part_child).append(second_part);
					//$(_ul).append(second_part);
					if(obj[k].child[j].child && obj[k].child[j].child.length>0){
						for(var l in obj[k].child[j].child){
							var second_part_child = document.createElement("div");
							second_part_child.className = 'pd-third-part';
							var third_part = document.createElement("div");
							third_part.className = 'js-third-part';
							third_part.innerHTML = '<span data-id="'+obj[k].child[j].child[l].id+'">'+obj[k].child[j].child[l].name+'</span>';
							$(second_part_child).append(third_part);
							$(first_part_child).append(second_part_child);
							//$(second_part).append(third_part);
						}
					}
					$(_ul).append(first_part_child);
				}
				//$(_ul).append(first_part_child);
			}
			$(xaa_tree).append(_ul)
		}
		$(this.html_catch).append(xaa_tree);
	}
	//append
	TreeManage.prototype.appendHtml = function(options){
		var $document = document,
		this_dom = $document.getElementById(options.el)? $document.getElementById(options.el) : "";
		if(this_dom){
			var replace_temp = this_dom.querySelector(".xaa-tree");
			replace_temp? this_dom.replaceChild(this.html_catch,replace_temp) : this_dom.appendChild(this.html_catch);
		}
	}
	//bind click event
	TreeManage.prototype.bindEvent = function(){
		//root event
		$('.js-first-part i').off("click").on("click",function(e){
			e.stopPropagation();
			var _temp = $(this).parent(),
				_temp_sib = _temp.siblings(".pd-second-part");
			_temp_sib.slideToggle();
			_temp_sib.find(".pd-third-part").slideUp();
			_temp.children("i").toggleClass("glyphicon-minus-sign");
			_temp_sib.find("i").removeClass("glyphicon-minus-sign");
		});
		//second node event
		$('.js-second-part i').off("click").on("click",function(e){
			e.stopPropagation();
			var _temp = $(this).parent();
			_temp.siblings(".pd-third-part").slideToggle();
			_temp.children("i").toggleClass("glyphicon-minus-sign");
		});
		//third node event
		
		//items event
		//root item
		$('.js-first-part span').off("click").on("click",function(e){
			e.stopPropagation();
			var _temp = $(this);
			_temp.parent(".js-first-part").toggleClass("xaa-item-active-root tree-item-active");
			var _target_operaiton_second = _temp.parent().siblings().find(".js-second-part"),
				_target_operaiton_third = _temp.parent().siblings().find(".js-third-part");
			if(_temp.parent(".js-first-part").hasClass("xaa-item-active-root")){
				_target_operaiton_second.addClass("xaa-item-active-second tree-item-active");
				_target_operaiton_third.addClass("xaa-item-active-third tree-item-active");
			}else{
				_target_operaiton_second.removeClass("xaa-item-active-second tree-item-active");
				_target_operaiton_third.removeClass("xaa-item-active-third tree-item-active");
			}
		});
		
		//second node item
		$('.js-second-part span').off("click").on("click",function(e){
			e.stopPropagation();
			var _temp = $(this);
			_temp.parent(".js-second-part").toggleClass("xaa-item-active-second tree-item-active");
			var _target_operation_third = _temp.parent().siblings().find(".js-third-part");
			_temp.parent(".js-second-part").hasClass("xaa-item-active-second")? _target_operation_third.addClass("xaa-item-active-third tree-item-active") : _target_operation_third.removeClass("xaa-item-active-third tree-item-active");
			
			var _temp_parent = _temp.parent().parent().parent(),
				_root_length = _temp_parent.find(".js-third-part").length + _temp_parent.find(".js-second-part").length,
				_rel_root_length = _temp_parent.find(".xaa-item-active-second").length + _temp_parent.find(".xaa-item-active-third").length,
				_target_operaiton = _temp_parent.find(".js-first-part");
			
			_root_length == _rel_root_length? _target_operaiton.addClass("xaa-item-active-root tree-item-active") : _target_operaiton.removeClass("xaa-item-active-root tree-item-active");
		});
		
		//third node item
		$('.js-third-part span').off("click").on("click",function(e){
			e.stopPropagation();
			var _temp = $(this);
			_temp.parent(".js-third-part").toggleClass("xaa-item-active-third tree-item-active");
			var _length = _temp.parent().parent().parent().find(".xaa-item-active-third").length,
				third_length =  _temp.parent().parent().siblings(".pd-third-part").length + 1,
			_target_operation_third = _temp.parent().parent().siblings(".js-second-part");
			
			third_length == _length? _target_operation_third.addClass("xaa-item-active-second tree-item-active") : _target_operation_third.removeClass("xaa-item-active-second tree-item-active");
			
			var root_parent= _temp.parent().parent().parent().parent(),
				root_child_length = root_parent.find(".js-third-part").length + root_parent.find(".js-second-part").length,
				rel_root_child_length = root_parent.find(".xaa-item-active-second").length + root_parent.find(".xaa-item-active-third").length,
				_target_operation = root_parent.find(".js-first-part");
			root_child_length == rel_root_child_length?_target_operation.addClass("xaa-item-active-root tree-item-active") : _target_operation.removeClass("xaa-item-active-root tree-item-active");
		});
	}
	
	TreeManage.prototype.setTree = function(option){
		this.buildHtml(option);
		this.appendHtml(option);
		this.bindEvent();
	}
	
	xaa.addModule("treeMan", new TreeManage());
})($,xaa)