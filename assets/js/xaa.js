(function() {

	// ///////////////////////////////////////common
	// utils///////////////////////
	this.Map = function() {
		this.elements = new Array();

		this.size = function() {
			return this.elements.length;
		};
		this.isEmpty = function() {
			return (this.elements.length < 1);
		};
		this.clear = function() {
			this.elements = new Array();
		};
		this.put = function(_key, _value) {
			this.remove(_key);
			this.elements.push({
				key : _key,
				value : _value
			});
		};
		this.remove = function(_key) {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					this.elements.splice(i, 1);
					return true;
				}
			}
			return false;
		};
		this.get = function(_key) {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					return this.elements[i].value;
				}
			}
			return null;
		};
		this.keyAt = function(_index) {
			if (_index < 0 || _index >= this.elements.length) {
				return null;
			}
			return this.elements[_index].key;
		};
		this.valueAt = function(_index) {
			if (_index < 0 || _index >= this.elements.length) {
				return null;
			}
			return this.elements[_index].value;
		};
		this.containsKey = function(_key) {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key)
					return true;
			}
			return false;
		};
		this.containsValue = function(_value) {
			for (var i = 0; i < this.elements.length; i++) {
				if (this.elements[i].value == _value)
					return true;
			}
			return false;
		};
		this.values = function() {
			var arr = new Array();
			for (var i = 0; i < this.elements.length; i++) {
				arr.push(this.elements[i].value);
			}
			return arr;
		};
		this.keys = function() {
			var arr = new Array();
			for (var i = 0; i < this.elements.length; i++) {
				arr.push(this.elements[i].key);
			}
			return arr;
		};
		this.addAll = function(map) {
			var elements = map.elements;
			for (var i = 0; i < elements.length; i++) {
				this.put(elements[i].key, elements[i].value);
			}
		};

	};
	this.ArrayList = function() {
		this.elementData = new Array();
		this.elementCount = 0;

		this.toArray = function() {
			return this.elementData;
		};
		this.size = function() {
			return this.elementCount;
		};
		this.add = function(element) {
			this.elementData[this.elementCount++] = element;
			return true;
		};
		this.addElementAt = function(index, element) {
			if (index > this.elementCount || index < 0)
				throw ("IndexOutOfBoundsException, Index: " + index
						+ ", Size: " + this.elementCount);
			for (var i = this.elementCount + 1; i > index; i--) {
				this.elementData[i] = this.elementData[i - 1];
			}
			this.elementData[index] = element;
			this.elementCount++;
		};
		this.setElementAt = function(index, element) {
			if (index > this.elementCount || index < 0)
				throw ("IndexOutOfBoundsException, Index: " + index
						+ ", Size: " + this.elementCount);
			this.elementData[index] = element;
		};
		this.get = function(index) {
			if (index >= this.elementCount)
				throw ("ArrayIndexOutOfBoundsException, index '" + index
						+ "' >= " + this.elementCount);
			return this.elementData[index];
		};
		this.removeAt = function(index) {
			if (index < 0)
				throw ("ArrayIndexOutOfBoundsException, index '" + index + "' < 0");
			if (index >= this.elementCount)
				throw ("ArrayIndexOutOfBoundsException, index '" + index
						+ "' >= " + this.elementCount);
			var oldData = this.elementData[index];
			for (var i = index; i < this.elementCount - 1; i++) {
				this.elementData[i] = this.elementData[i + 1];
			}
			this.elementData[this.elementCount - 1] = null;
			this.elementCount--;
			return oldData;
		};
		this.remove = function(elem) {
			var index = -1;
			for (var i = 0; i < this.elementCount; i++) {
				if (this.elementData[i] == elem) {
					index = i;
					break;
				}
			}
			return this.removeAt(index);
		};
		this.clear = function() {
			this.elementData = new Array();
			this.elementCount = 0;
		}
		this.isEmpty = function() {
			return this.elementCount == 0;
		};
		this.contains = function(elem) {
			for (var i = 0; i < this.elementCount; i++) {
				if (this.elementData[i] == elem)
					return true;
			}
			return false;
		};
	};

	{
		var initializing = false;
	    this.Class = function() {};
	    
	    Class._extend = function(prop){
	       var _super = this.prototype;
	       
	       initializing = true;
	       var prototype = new this();
	       initializing = false;
	       for(var name in prop) {
	              prototype[name] = prop[name];
	       }
	       function Class(){
	           if(!initializing && this._init)
	              this._init.apply(this, arguments);
	       }
	       Class.prototype = prototype;
	       Class.prototype._super = _super;
	       Class.constructor = Class;
	       Class._extend = arguments.callee;
	       return Class;
	    };
	}
	
	// /////////////////////////////////define xaa///////////////////////////

	var root = this;
	var previousXaa = root.xaa;
	var xaa = function(obj) {
		if (obj instanceof xaa)
			return obj;
		if (!(this instanceof xaa))
			return new xaa(obj);
		this._wrapped = obj;
	};

	// Export object for **Node.js**, with
	// backwards-compatibility for the old `require()` API. If we're in
	// the browser, add `xaa` as a global object.
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = xaa;
		}
		exports.xaa = xaa;
	} else {
		root.xaa = xaa;
	}

	// add modules
	xaa.modules = new Map();
	xaa.addModule = function(name, module) {
		this.modules.put(name, module);
	};

	// add page init
	xaa.pageInitFunctions = new ArrayList();
	xaa.registerPageInit = function(func) {
		this.pageInitFunctions.add(func);
	};

	// add page destroy
	xaa.pageDestroyFunctions = new ArrayList();
	xaa.registerPageDestroy = function(func) {
		this.pageDestroyFunctions.add(func);
	};

	// init xaa
	xaa.init = function(config) {
		this.config = config;
	};

	// page init
	xaa.pageInit = function() {
		// init module
		var modules = this.modules.keys();
		for (var i = 0; i < modules.length; i++) {
			var module = this.modules.get(modules[i]);
			this[modules[i]] = module;
			if (typeof (module.init) == "function") {
				module.init(this);
			}
		}
		this.modules.clear();

		// init forms
		this.forms.clear();
		this.forms.addAll(this.tempForms);
		this.tempForms.clear();
		var forms = this.forms.keys();
		for (var i = 0; i < forms.length; i++) {
			var form = this.forms.get(forms[i]);
			form.init(this);
		}

		// call page init
		for (var i = 0; i < this.pageInitFunctions.size(); i++) {
			var func = this.pageInitFunctions.get(i);
			func(this);
		}
		this.pageInitFunctions.clear();
	};

	// page destroy
	xaa.pageDestroy = function() {
		// call user-define pageDestroy
		for (var i = 0; i < this.pageDestroyFunctions.size(); i++) {
			var func = this.pageDestroyFunctions.get(i);
			func(this);
		}
		this.pageDestroyFunctions.clear();
	};

	xaa.hasModel = function(moduleName) {
		var modules = xaa.modules;
		return typeof (modules[moduleName]) != null
				|| typeof (xaa[moduleName]) != null;
	}

	// add form submit
	xaa.forms = new Map();
	xaa.tempForms = new Map();
	xaa.registerForm = function(config) {
		this.tempForms.put(config.id, new XaaForm(config));
	};
	

}.call(this));