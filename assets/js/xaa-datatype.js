(function($, xaa) {
	
	var datatype = function(){
		this.dataTypes = new Map();
		this.charset = xaa.charset;
	};
	
	datatype.prototype.registerDataType = function(name, impl)
	{
		this.dataTypes.put(name, impl);
	};
	
	datatype.prototype.getDataType = function(name)
	{
		return this.dataTypes.get(name);
	};
	
	datatype.prototype.getErrorCodes = function()
	{
		var errorCodes = new Array();
		for (var i = 0; i < this.dataTypes.size(); i++)
		{
			var dataType = this.dataTypes.valueAt(i);
			var es = dataType.getErrorCodes();
			if (es == null) continue;

			if (es instanceof Array)
			{
				for (var j = 0; j < es.length; j++)
				{
					errorCodes.push(es[j]);
				}
			} else
			{
				errorCodes.push(es);
			}
		}
		return errorCodes;
	};
	
	var DataType = Class._extend({
		_init : function(charset)
		{
			this.charset = charset;
		},
		format : function(value, format)
		{
			return value;
		},
		unformat : function(value, format)
		{
			return value;
		},
		isValid : function(value, format)
		{
			return (this.validate(value, format) == null);
		},
		validate : function(value, format)
		{
			return null;
		},
		getErrorCodes : function()
		{
			return null;
		}
	});
	
	function Message(errorCode, parameters)
	{
	    this.errorCode = errorCode;
	    if (parameters == null || parameters instanceof Array)
	    {
	       this.parameters = parameters;
	    } else
	    {
	       this.parameters = [ parameters ];
	    }
	    this.toString = function()
	    {
	       var sb = "{ errorCode:'" + this.errorCode + "', parameters:[";
	       if (this.parameters != null)
	       {
	           for (var i = 0; i < this.parameters.length; i++)
	           {
	              sb += "'";
	              sb += this.parameters[i];
	              sb += "'";
	              if (i < this.parameters.length - 1) sb += ", ";
	           }
	       }
	       sb += "] }";
	       return sb;
	    };
	}
	
	var DateDataType = DataType._extend({
		_init : function(defaultInputFormat, defaultOutFormat)
		{
			this.defaultInputFormatFinal = defaultInputFormat;
			this.defaultOutFormatFinal = defaultOutFormat;
			this.tempValueMap = new Map();
		},
		format : function(value, format)
		{
			if (typeof (format) == 'undefined')
				format = this.defaultOutFormatFinal;
			var date = new Date(value.substr(this.defaultInputFormatFinal
					.indexOf("y"), 4), value.substr(
					this.defaultInputFormatFinal.indexOf("M"), 2) - 1,
					value.substr(this.defaultInputFormatFinal.indexOf("d"),
							2));
			var o = {
				"M+" : date.getMonth() + 1,
				"d+" : date.getDate(),
				"H+" : date.getHours(),
				"m+" : date.getMinutes(),
				"s+" : date.getSeconds(),
				"S" : date.getMilliseconds()
			};
			var formatTemp = format;
			if (/(y+)/.test(formatTemp))
				formatTemp = formatTemp.replace(RegExp.$1, (date
						.getFullYear() + "").substr(4 - RegExp.$1.length));
			for ( var k in o)
			{
				if (new RegExp("(" + k + ")").test(formatTemp))
					formatTemp = formatTemp.replace(RegExp.$1,
							(RegExp.$1.length == 1) ? (o[k])
									: (("00" + o[k])
											.substr(("" + o[k]).length)));
			}
			this.tempValueMap.put(format + formatTemp, value);
			return formatTemp;
		},
		unformat : function(value, format)
		{
			if (typeof (format) == 'undefined')
				format = this.defaultOutFormatFinal;
			return this.tempValueMap.get(format + value);
		},
		validate : function(value, format)
		{
			if (typeof (format) == 'undefined')
				format = this.defaultOutFormatFinal;
			if (value == null || value == '') return null;
			if (value.length != 8)
			{
				return new Message("XAA060005",
						this.defaultInputFormatFinal);
			}
			var year = value.substr(this.defaultInputFormatFinal
					.indexOf("y"), 4);
			var month = value.substr(this.defaultInputFormatFinal
					.indexOf("M"), 2);
			var day = value.substr(this.defaultInputFormatFinal
					.indexOf("d"), 2);
			value = year + month + day;
			var result = value
					.match(/((^((1[8-9]\d{2})|([2-9]\d{3}))(10|12|0?[13578])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(11|0?[469])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(0?2)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(0?2)(29)$)|(^([3579][26]00)(0?2)(29)$)|(^([1][89][0][48])(0?2)(29)$)|(^([2-9][0-9][0][48])(0?2)(29)$)|(^([1][89][2468][048])(0?2)(29)$)|(^([2-9][0-9][2468][048])(0?2)(29)$)|(^([1][89][13579][26])(0?2)(29)$)|(^([2-9][0-9][13579][26])(0?2)(29)$))/);
			if (result != null)
			{
				return null;
			} else
			{
				return new Message("XAA060005",
						this.defaultInputFormatFinal);
			}
		},
		getErrorCodes : function()
		{
			return "XAA060005";
		}
	});
	
	var TimeDataType = DataType._extend({
		_init : function(defaultInputFormat, defaultOutFormat)
		{
			this.defaultInputFormatFinal = defaultInputFormat;
			this.defaultOutFormatFinal = defaultOutFormat;
			this.tempValueMap = new Map();
		},
		format : function(value, format)
		{
			if (typeof (format) == 'undefined')
				format = this.defaultOutFormatFinal;
			var date = new Date();
			date.setHours(value.substr(this.defaultInputFormatFinal
					.indexOf("H"), 2));
			date.setMinutes(value.substr(this.defaultInputFormatFinal
					.indexOf("m"), 2));
			date.setSeconds(value.substr(this.defaultInputFormatFinal
					.indexOf("s"), 2));
			var o = {
				"M+" : date.getMonth() + 1, 
				"d+" : date.getDate(), 
				"H+" : date.getHours(), 
				"m+" : date.getMinutes(),
				"s+" : date.getSeconds(),
				"S" : date.getMilliseconds()
			};
			var formatTemp = format;
			if (/(y+)/.test(formatTemp))
				formatTemp = formatTemp.replace(RegExp.$1, (date
						.getFullYear() + "").substr(4 - RegExp.$1.length));
			for ( var k in o)
			{
				if (new RegExp("(" + k + ")").test(formatTemp))
					formatTemp = formatTemp.replace(RegExp.$1,
							(RegExp.$1.length == 1) ? (o[k])
									: (("00" + o[k])
											.substr(("" + o[k]).length)));
			}
			this.tempValueMap.put(format + formatTemp, value);
			return formatTemp;
		},
		unformat : function(value, format)
		{
			if (typeof (format) == 'undefined')
				format = this.defaultOutFormatFinal;
			return this.tempValueMap.get(format + value);
		},
		validate : function(value, format)
		{
			if (typeof (format) == 'undefined')
				format = this.defaultOutFormatFinal;
			if (value == null || value == '') return null;
			if (value.length != 6)
			{
				return new Message("XAA060022",
						this.defaultInputFormatFinal);
			}
			value = value.substr(this.defaultInputFormatFinal.indexOf("H"),
					2)
					+ value.substr(this.defaultInputFormatFinal
							.indexOf("m"), 2)
					+ value.substr(this.defaultInputFormatFinal
							.indexOf("s"), 2);
			var result = value
					.match(/^(20|21|22|23|[0-1]\d)[0-5]\d[0-5]\d$/);
			if (result != null)
			{
				return null;
			} else
			{
				return new Message("XAA060022",
						this.defaultInputFormatFinal);
			}
		},
		getErrorCodes : function()
		{
			return "XAA060022";
		}
	});
	
	var DecimalDataType = DataType._extend({
		_init : function(charset, acceptLeadingZero, defaultFormat)
		{
			this._super._init(charset);
			this.defaultFormatFinal = defaultFormat;
			this.acceptLeadingzeroFinal = acceptLeadingZero;
			this.tempValueMap = new Map();
		},
		format : function(value, format)
		{
			if (typeof (this.defaultFormatFinal) != 'undefined')
				format = this.defaultFormatFinal;
			var formatKeeper = format;
			if (value != null && value != '' && !this.acceptLeadingzeroFinal)
			{
				value = "" + parseFloat(value);
			}
			var tmpArr = format.split('.');
			if (tmpArr[0].indexOf(',') > -1)
			{
				var length = value.split('.')[0].length;
				var seperateArr = tmpArr[0].split(',');
				var seperateLen = seperateArr[seperateArr.length - 1].length;
				format = seperateArr[seperateArr.length - 1];
				for (var o = seperateLen + 1; o <= length; o += seperateLen)
				{
					format = "," + format;
					for (var k = 0; k < seperateLen; k++)
					{
						format = "#" + format;
					}
				}
				if (tmpArr.length > 1)
				{
					format = format + "." + tmpArr[1];
				}
			}
			var forms = format.split('.');
			var value = '' + value;
			var numbers = value.split('.');
			var leftnumber = numbers[0].split('');
			var exec = function(lastMatch)
			{
				if (lastMatch == '0' || lastMatch == '#')
				{
					if (leftnumber.length)
					{
						return leftnumber.pop();
					} else if (lastMatch == '0')
					{
						return lastMatch;
					} else
					{
						return '';
					}
				} else
				{
					return lastMatch;
				}
			};
			var string;
			string = forms[0].split('').reverse().join('').replace(/./g, exec)
					.split('').reverse().join('');
			string = leftnumber.join('') + string;

			if (forms[1] && forms[1].length)
			{
				leftnumber = (numbers[1] && numbers[1].length) ? numbers[1].split(
						'').reverse() : [];
				string += '.' + forms[1].replace(/./g, exec);
			}
			var tempValues = string.replace(/\.$/, '');
			this.tempValueMap.put(formatKeeper + tempValues, value);
			return tempValues;
		},
		unformat : function(value, format)
		{
			if (typeof (this.defaultFormatFinal) != 'undefined')
				format = this.defaultFormatFinal;
			//value = value.replace(/,/g, "");
			//return parseFloat(value);
			return this.tempValueMap.get(format+value);
		},
		validate : function(value, format)
		{
			if (value == null || value == '') return null;
			if (typeof (this.defaultFormatFinal) != 'undefined')
				format = this.defaultFormatFinal;
			if (!this.charset.isStringDecimal(value))
				return new Message("XAA060006");
			var result = isNaN(value);
			if (result)
			{
				return new Message("XAA060006");
			} else
			{
				return null;
			}
		},
		getErrorCodes : function()
		{
			return "XAA060006";
		}
	});
	
	datatype.prototype.init = function(xaa)
	{
		xaa.datatype.registerDataType("Date", new DateDataType(xaa.config.format.input.date, xaa.config.format.output.date));
		xaa.datatype.registerDataType("Time", new TimeDataType(xaa.config.format.input.time, xaa.config.format.output.time));
		xaa.datatype.registerDataType("Amount", new DecimalDataType(xaa.charset, false, xaa.config.format.output.amount));
	}
	
	xaa.addModule("datatype", new datatype());
	
})(jQuery, xaa);
