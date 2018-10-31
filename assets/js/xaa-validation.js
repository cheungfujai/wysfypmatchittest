xaa.registerPageInit(function() {
	jqueryvalidatorPageInit();
});
var jqueryvalidatorPageInit = function() {
	var $window = $(window);

	$.validator.getXAAMessage = function(messageDefinition) {
		var errorCodes = [];
		for ( var rule in messageDefinition) {
			errorCodes.push(messageDefinition[rule]);
		}
		xaa.i18nMessageProvider.preload(errorCodes);

		for ( var rule in messageDefinition) {
			var message = xaa.i18nMessageProvider
					.getText(messageDefinition[rule]);
			if (message.indexOf("{0}") > 0) {
				messageDefinition[rule] = $.validator.format(message);
			} else {
				messageDefinition[rule] = message;
			}
		}
		return messageDefinition;
	}
	$.extend($.validator.messages, $.validator.getXAAMessage({
		required : 'XAA051001',
		remote : 'XAA051002',
		email : 'XAA051003',
		url : 'XAA051004',
		date : 'XAA051005',
		dateISO : 'XAA051006',
		number : 'XAA051007',
		digits : 'XAA051008',
		creditcard : 'XAA051009',
		equalTo : 'XAA051010',
		maxlength : 'XAA051011',
		minlength : 'XAA051012',
		rangelength : 'XAA051013',
		range : 'XAA051014',
		max : 'XAA051015',
		min : 'XAA051016',
		currency : 'XAA051101',
		time : 'XAA051102',
		phoneHK : 'XAA051103',
		decimal : 'XAA051104',
		alphanumeric : 'XAA051105',
		alphanumericSpace : 'XAA051106',
		alpha : 'XAA051107',
		alphaSpace : 'XAA051108',
		swift : 'XAA051109',
		pattern : 'XAA051110'
	}));

	var xaaDebugLog = function(message, validator) {
		if (validator.settings.debug && window.console)
			console.log(message);
	}

	var isEmpty = function(value) {
		return typeof (value) == 'undefined' || value == null
				|| (typeof (value) == 'string' && value == "")
				|| ($.isArray(value) && value.length == 0);
	}

	// extended jquery validtor for server side error message
	var showErrors = function(errors) {
		if (errors) {
			var validator = this;

			// Add items to error list and map
			$.extend(this.errorMap, errors);
			this.errorList = [];
			for ( var name in errors) {
				if (typeof (name) != "undefined") {
					var elem = validator.findByName(name);
					if (typeof (elem) == 'undefined'
							|| typeof (elem[0]) == 'undefined') {
						elem = document.createElement("input");
						elem.server = true;
					} else
						elem = elem[0];
					this.errorList.push({
						message : errors[name],
						element : elem
					});
				}

			}

			// remove items from success list
			this.successList = $.grep(this.successList, function(element) {
				return !(element.name in errors);
			});
		}

		if (this.settings.showErrors) {
			this.settings.showErrors.call(this, this.errorMap, this.errorList);
		} else {
			this.defaultShowErrors();
		}
	};

	$.validator.prototype.showErrors = showErrors;

	// //////////////////////////////////validation rules
	// start/////////////////////////////////////////
	$.validator
			.addMethod(
					"currency",
					function(value, element, params) {
						xaaDebugLog("currencty validator, value='" + value
								+ "', params='" + params + "'", this);
						if (this.optional(element))
							return true;
						if (isEmpty(value))
							return false;

						// ISO 4217 Currency Codes
						var currencyList = "AED,AFN,ALL,AMD,ANG,AOA,ARS,AUD,AWG,AZN,BAM,BBD,BDT,BGN,BHD,BIF,BMD,BND,BOB,BRL,BSD,BTN,BWP,BYN,BZD,CAD,CDF,CHF,CLP,CNY,COP,CRC,CUC,CUP,CVE,CZK,DJF,DKK,DOP,DZD,EGP,ERN,ETB,EUR,FJD,FKP,GBP,GEL,GGP,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL,HRK,HTG,HUF,IDR,ILS,IMP,INR,IQD,IRR,ISK,JEP,JMD,JOD,JPY,KES,KGS,KHR,KMF,KPW,KRW,KWD,KYD,KZT,LAK,LBP,LKR,LRD,LSL,LYD,MAD,MDL,MGA,MKD,MMK,MNT,MOP,MRO,MUR,MVR,MWK,MXN,MYR,MZN,NAD,NGN,NIO,NOK,NPR,NZD,OMR,PAB,PEN,PGK,PHP,PKR,PLN,PYG,QAR,RON,RSD,RUB,RWF,SAR,SBD,SCR,SDG,SEK,SGD,SHP,SLL,SOS,SPL,SRD,STD,SVC,SYP,SZL,THB,TJS,TMT,TND,TOP,TRY,TTD,TVD,TWD,TZS,UAH,UGX,USD,UYU,UZS,VEF,VND,VUV,WST,XAF,XCD,XDR,XOF,XPF,YER,ZAR,ZMW,ZWD";
						var separator = ",";
						xaaDebugLog("typeof(param)='" + typeof (params) + "'",
								this);
						if (typeof (params) == 'string' || $.isArray(params)) {
							var isParamString = typeof (params) == "string";
							currencyList = isParamString ? params : params[0];
							if (!isParamString)
								separator = params[1];
						}

						currencyList = currencyList.toUpperCase().split(
								separator);
						xaaDebugLog("currency list='" + currencyList
								+ "', separator='" + separator + "'", this);

						return $.inArray(value.toUpperCase(), currencyList) >= 0;
					}, $.validator.messages["currency"]);

	$.validator
			.addMethod(
					"date",
					function(value, element, params) {
						xaaDebugLog("date validator, value='" + value
								+ "', params='" + params + "'", this);
						if (this.optional(element))
							return true;
						if (isEmpty(value))
							return false;

						if (typeof (params) != "string")
							params = "dd-MM-yyyy";

						if (params.length != value.length) {
							xaaDebugLog(
									"param length do not equal to value length.",
									this);
							return false;
						}

						var year = "1987", month = "01", day = "01";
						var index = params.indexOf("y");
						if (index >= 0)
							year = value.substr(index, 4);
						index = params.indexOf("M");
						if (index >= 0)
							month = value.substr(index, 2);
						index = params.indexOf("d");
						if (index >= 0)
							day = value.substr(index, 2);

						value = year + month + day;
						xaaDebugLog("final date string is " + value, this);
						return /((^((1[8-9]\d{2})|([2-9]\d{3}))(10|12|0?[13578])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(11|0?[469])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(0?2)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(0?2)(29)$)|(^([3579][26]00)(0?2)(29)$)|(^([1][89][0][48])(0?2)(29)$)|(^([2-9][0-9][0][48])(0?2)(29)$)|(^([1][89][2468][048])(0?2)(29)$)|(^([2-9][0-9][2468][048])(0?2)(29)$)|(^([1][89][13579][26])(0?2)(29)$)|(^([2-9][0-9][13579][26])(0?2)(29)$))/
								.test(value);
					}, $.validator.messages["date"]);

	$.validator.addMethod("time", function(value, element, params) {
		xaaDebugLog("time validator, value='" + value + "', params='" + params
				+ "'", this);
		if (this.optional(element))
			return true;
		if (isEmpty(value))
			return false;

		if (typeof (params) != "string") {
			params = "HH:mm:ss";
			var paramsArray = params.split(":");
			var valueArray = value.split(":");
			if (valueArray.length == paramsArray.length) {
				if ((":" != value.charAt(2)) || (":" != value.charAt(5))) {
					return false;
				}
			} else {
				return false;
			}
		}

		if (params.length != value.length) {
			xaaDebugLog("param length do not equal to value length.", this);
			return false;
		}

		var hour = "00", min = "00", sec = "00";
		var index = params.indexOf("H");
		if (index >= 0)
			hour = value.substr(index, 2);
		index = params.indexOf("m");
		if (index >= 0)
			min = value.substr(index, 2);
		index = params.indexOf("s");
		if (index >= 0)
			sec = value.substr(index, 2);

		value = hour + min + sec;
		xaaDebugLog("final time string is " + value, this);
		return /^(20|21|22|23|[0-1]\d)[0-5]\d[0-5]\d$/.test(value);
	}, $.validator.messages["time"]);

	$.validator.addMethod("phoneHK", function(value, element, params) {
		xaaDebugLog("phoneHK validator, value='" + value + "'", this);
		if (this.optional(element))
			return true;
		if (isEmpty(value))
			return false;

		return /^[23569]{1}[0-9]{7}$/.test(value);
	}, $.validator.messages["phoneHK"]);

	$.validator.addMethod("decimal", function(value, element, format) {
		xaaDebugLog("decimal validator, value='" + value + "', format='"
				+ format + "'", this);
		if (this.optional(element))
			return true;
		if (isEmpty(value))
			return false;

		if (typeof (format) != "string" || isEmpty(format)) {
			xaaDebugLog("format is empty, reset default format:0.00", this);
			format = "0.00";
		}

		var tempVal = value.replace(/,/g, "");
		if (isNaN(tempVal))
			return false;

		var tmpArr = format.split('.');
		if (tmpArr[0].indexOf(',') > -1) {
			var length = tempVal.split('.')[0].length;
			var seperateArr = tmpArr[0].split(',');
			var seperateLen = seperateArr[seperateArr.length - 1].length;
			format = seperateArr[seperateArr.length - 1];
			for (var o = seperateLen + 1; o <= length; o += seperateLen) {
				format = "," + format;
				for (var k = 0; k < seperateLen; k++) {
					format = "#" + format;
				}
			}
			if (tmpArr.length > 1) {
				format = format + "." + tmpArr[1];
			}
		}
		var forms = format.split('.');
		var numbers = ('' + parseFloat(tempVal)).split('.');
		var nubmers2 = value.split('.');
		if (numbers.length > 2) {
			xaaDebugLog("unexpected length:" + numbers.length, this);
			return false;
		}
		var leftnumber = numbers[0].split('');
		var exec = function(lastMatch) {
			if (lastMatch == '0' || lastMatch == '#') {
				if (leftnumber.length) {
					return leftnumber.pop();
				} else if (lastMatch == '0') {
					return lastMatch;
				} else {
					return '';
				}
			} else {
				return lastMatch;
			}
		};
		var string;
		string = forms[0].split('').reverse().join('').replace(/./g, exec)
				.split('').reverse().join('');
		string = leftnumber.join('') + string;
		xaaDebugLog("numbers[0]:" + numbers[0] + ",check number:" + nubmers2[0]
				+ ", formated string" + string, this);
		if (nubmers2[0] != string) {
			return false;
		}

		if (nubmers2.length == 2 && isEmpty(nubmers2[1])) {
			xaaDebugLog("decimal place is empty", this);
			return false;
		}

		if (forms[1] && forms[1].length && nubmers2[1]) {
			leftnumber = (numbers[1] && numbers[1].length) ? numbers[1].split(
					'').reverse() : [];
			string = forms[1].replace(/./g, exec);
			xaaDebugLog("numbers[1]:" + numbers[1] + ",check number:"
					+ nubmers2[1] + ", formated string" + string, this);

			var srcDecList = nubmers2[1].split('');
			var decDecList = string.split('');

			if (srcDecList.length > decDecList.length) {
				xaaDebugLog("length is not match..", this);
				return false;
			}
			var checkZero = false;
			for (var i = 0; i < decDecList.length; i++) {
				var decChar = decDecList[i];
				if (checkZero) {
					if (decChar != '0') {
						return false;
					}
				} else {
					if (srcDecList.length > i) {
						var srcChar = srcDecList[i];
						if (decChar != srcChar)
							return false;
					} else {
						checkZero = true;
					}
				}
			}
		} else if (nubmers2[1] && nubmers2[1].length) {
			return false;
		}

		return true;
	}, $.validator.messages["decimal"]);

	$.validator.addMethod("alphanumeric", function(value, element) {
		return this.optional(element) || /^[0-9a-zA-Z]+$/i.test(value);
	}, $.validator.messages["alphanumeric"]);

	$.validator.addMethod("alphanumericSpace", function(value, element) {
		return this.optional(element) || /^[0-9a-zA-Z\s]+$/i.test(value);
	}, $.validator.messages["alphanumericeSpace"]);

	$.validator.addMethod("alpha", function(value, element) {
		return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
	}, $.validator.messages["alpha"]);

	$.validator.addMethod("alphaSpace", function(value, element) {
		return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
	}, $.validator.messages["alphaSpace"]);

	$.validator.addMethod("swift", function(value, element) {
		if (this.optional(element))
			return true;
		return /^[A-Za-z0-9 ?().,\'+][A-Za-z0-9 \-?:().,\'+]*$/g.test(value);
	}, $.validator.messages["swift"]);

	$.validator.addMethod("pattern", function(value, element, param) {
		if (this.optional(element)) {
			return true;
		}
		if (typeof param === "string") {
			param = new RegExp("^(?:" + param + ")$");
		}
		//param = param.compile(param.source);
		return param.test(value);
	}, $.validator.messages["pattern"]);

	// Override jquery remote method
	$.validator
			.addMethod(
					"remote",
					function(value, element, param) {
						var paramNew = param;
						if (typeof (param) == 'object')
							paramNew = $.extend(true, {}, param);
						if (this.optional(element)) {
							return "dependency-mismatch";
						}

						var previous = this.previousValue(element), validator, data;

						if (!this.settings.messages[element.name]) {
							this.settings.messages[element.name] = {};
						}
						previous.originalMessage = this.settings.messages[element.name].remote;
						this.settings.messages[element.name].remote = previous.message;

						paramNew = typeof paramNew === "string" && {
							url : paramNew
						} || paramNew;

						if (previous.old === value) {
							return previous.valid;
						}

						previous.old = value;
						validator = this;
						this.startRequest(element);
						data = {};
						data[element.name] = value;
						if (paramNew.data) {
							var tempData = paramNew.data;
							delete paramNew["data"];
							for ( var d in tempData) {
								data[d] = $.isFunction(tempData[d]) ? tempData[d]
										()
										: tempData[d];
							}
						}

						xaa.ajax
								.send($
										.extend(
												true,
												{
													mode : "abort",
													port : "validate"
															+ element.name,
													dataType : "json",
													data : data,
													success : function(response) {
														var submitted;

														validator.settings.messages[element.name].remote = previous.originalMessage;
														submitted = validator.formSubmitted;
														validator
																.prepareElement(element);
														validator.formSubmitted = submitted;
														validator.successList
																.push(element);
														delete validator.invalid[element.name];
														validator.showErrors();
														previous.valid = true;
													},
													fail : function(response) {
														var errors, message;

														validator.settings.messages[element.name].remote = previous.originalMessage;
														errors = {};
														message = (response && response.message)
																|| validator
																		.defaultMessage(
																				element,
																				"remote");
														errors[element.name] = previous.message = $
																.isFunction(message) ? message(value)
																: message;
														validator.invalid[element.name] = true;
														validator
																.showErrors(errors);
														previous.valid = false;
													},
													afterReceive : function(
															valid) {
														validator.stopRequest(
																element, valid);
													}
												}, paramNew));
						return "pending";
					}, $.validator.messages["remote"]);

	// //////////////////////////////////validation rules
	// end/////////////////////////////////////////

};
