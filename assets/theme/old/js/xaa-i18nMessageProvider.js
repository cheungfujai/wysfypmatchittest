(function($, xaa) {

	var cache = {};
	// define a constructor method
	var i18nMessageProvider = function() {
	}

	// preload errorCodes
	i18nMessageProvider.prototype.preload = function(errorCodes) {
		var result = this.getTextFromServer(errorCodes);
		for ( var i in result) {
			cache[result[i].errorCode] = result[i].message;
		}
	}
	// get single error message
	i18nMessageProvider.prototype.getText = function(errorCode) {
		var message = cache[errorCode];
		if (typeof message != "undefined")
			return message;

		var result = this.getTextFromServer(errorCode);
		message = result[0].message;
		cache[errorCode] = message;
		return message;
	}

	i18nMessageProvider.prototype.getTextFromServer = function(errorCodes) {
		var parameter = "[";
		if (errorCodes instanceof Array) {
			for (var i = 0; i < errorCodes.length; i++) {
				parameter += "\"";
				parameter += errorCodes[i];
				parameter += "\"";

				if (i != errorCodes.length - 1)
					parameter += ",";
			}
		} else {
			parameter += "\"";
			parameter += errorCodes;
			parameter += "\"";
		}
		parameter += "]";

		var result = null;
		xaa.ajax.send({
			async : false,
			url : XAA_i18n_PATH,
			data : {
				errorCodes : parameter
			},
			success : function(response) {
				result = response;
			}
		});
		return result;
	}

	xaa.addModule("i18nMessageProvider", new i18nMessageProvider());
}($, xaa));
