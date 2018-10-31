(function($, xaa) {
	var charset = function()
	{
		this.calculateLength = function(sTargetStr)
		{
			var sTmpStr, sTmpChar;
			var nOriginLen = 0;
			var nStrLength = 0;
			sTmpStr = new String(sTargetStr);
			nOriginLen = sTmpStr.length;
			for (var i = 0; i < nOriginLen; i++)
			{
				sTmpChar = sTmpStr.charAt(i);
				if (escape(sTmpChar).length > 4)
				{
					nStrLength += 3;
				} else
				{
					nStrLength++;
				}
			}
			return nStrLength;
		};
		this.isIncludeNonSwiftChar = function(data)
		{
			var reg = new RegExp(/[<!&|$*;^%_>`#@="~\[\]{}\\]/);
			if (reg.test(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.trim = function(data)
		{
			if (data != null && data != '')
			{
				data = data.replace(/(^\s*)|(\s*$)/g, "");
			}
			return data;
		};
		this.isCharChinese = function(data)
		{
			if (data == null || data == '') return false;
			if (escape(data.charAt(0)).length > 4)
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isIpCharset = function(data)
		{
			if (data == null || data == '') return false;
			if (!this.isNumFormat(data) && data != ".")
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.removeChinese = function(data)
		{
			if (data != null && data != '')
			{
				var dataTemp = '';
				for (var i = 0; i < data.length; i++)
				{
					if (escape(data.charAt(i)).length > 4)
					{
						continue;
					} else
					{
						dataTemp += data.charAt(i);
					}
				}
				return dataTemp;
			}
			return '';
		};
		this.removeBreakLine = function(data)
		{
			if (data != null && data != '')
			{
				var dataTemp = '';
				for (var i = 0; i < data.length; i++)
				{
					var stringTemp = data.substring(i, i + 1);
					if (stringTemp == '\n')
					{
						continue;
					} else
					{
						dataTemp += stringTemp;
					}
				}
				return dataTemp;
			}
			return '';
		};
		this.isSpaceFormat = function(data)
		{
			if (data != null && data != '')
			{
				var reg = new RegExp(/[^ ]/);
				if (reg.test(data)) return false;
				else
					return true;
			}
			return false;
		};
		this.isBreakLineFormat = function(data)
		{
			if (data != null && data != '')
			{
				if (data == "\r" || data == "\n")
				{
					return true;
				} else
					return false;
			}
			return false;
		};
		this.isNumFormat = function(data)
		{
			if (data == null || data == '') return false;

			var reg = new RegExp(/[^0-9]/);
			if (reg.test(data))
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.isDecimalFormat = function(data)
		{
			if (data == null || data == '') return false;
			var reg = new RegExp(/[^0-9.]/);
			if (reg.test(data))
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.isAlphaFormat = function(data)
		{
			if (data == null || data == '') return false;

			var reg = new RegExp(/[^A-Za-z]/);
			if (reg.test(data))
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.isSimplifiedFormat = function(data)
		{
			return true;
		};
		this.isTraditionalFormat = function(data)
		{
			return true;
		};
		this.isSwiftFormat = function(data)
		{
			if (data == null || data == '') return false;

			// Check swift char
			var reg = new RegExp(/[^\-?:( ).,'+]/);
			if (reg.test(data))
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.isCharSet1Format = function(data)
		{
			if (data == null || data == '') return false;

			var reg = new RegExp(/[^<\[\]>,.?:"'(|)\\\/\-+=_;]/);
			if (reg.test(data))
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.isCharSet2Format = function(data)
		{
			if (data == null || data == '') return false;

			var reg = new RegExp(/[^~`!@#$%^&*]/);
			if (reg.test(data)) return false;
			else
				return true;
		};
		this.isScreenChar = function(data)
		{
			var reg = new RegExp(
					/[^a-zA-Z0-9`\-=,.\/;' \\~!@#$%^&*()_+|":?><{}\[\]]/);
			if (reg.test(data))
			{
				return false;
			} else
			{
				return true;
			}
		};
		this.isChar = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharT = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharS = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharE = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharFull = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data))
			{
				return true;
			} else if (this.isCharSet2Format(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharMail = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data))
			{
				var reg = new RegExp(/[,]/);
				if (reg.test(data))
				{
					return false;
				}
				return true;
			} else
			{
				var reg2 = new RegExp(/[^a-zA-Z0-9!@#$%^&'*+\/\-=?_`{}|~]/);
				if (reg2.test(data))
				{
					return false;
				} else
				{
					return true;
				}
			}
		};
		this.isCharPwd = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharName = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data) || this.isCharSet2Format(data))
			{
				return true;
			} else
			{
				return false
			}
		};
		this.isCharSWIFT = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isSwiftFormat(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isCharSwiftWithOutZH = function(data)
		{
			if (this.isNumFormat(data) || this.isAlphaFormat(data)
					|| this.isCharSet1Format(data) || this.isCharSet2Format(data))
			{
				return true;
			} else
			{
				return false;
			}
		};
		this.isString = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isChar(data.substring(i, i + 1))
						&& !this.isSpaceFormat(data.substring(i, i + 1))
						&& !this.isBreakLineFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringDecimal = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isDecimalFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringNumber = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isNumFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringTime = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isNumFormat(data.substring(i, i + 1))
						&& data.substring(i, i + 1) != ":")
				{
					return false;
				}
			}
			return true;
		};
		this.isStringTimeN = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isNumFormat(data.substring(i, i + 1))
						&& data.substring(i, i + 1) != ":"
						&& data.substring(i, i + 1) != "N")
				{
					return false;
				}
			}
			return true;
		};
		this.isStringAlpha = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isAlphaFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringT = function(data)
		{
			if (data == null || data == '') return false;

			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharChinese(data.substring(i, i + 1)))
				{
					if (!this.isCharT(data.substring(i, i + 1))
							&& !this.isSpaceFormat(data.substring(i, i + 1))
							&& !this.isBreakLineFormat(data.substring(i, i + 1)))
					{
						return false;
					}
				}
			}
			return true;
		};
		this.isStringS = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharChinese(data.substring(i, i + 1)))
				{
					if (!this.isCharS(data.substring(i, i + 1))
							&& !this.isSpaceFormat(data.substring(i, i + 1))
							&& !this.isBreakLineFormat(data.substring(i, i + 1)))
					{
						return false;
					}
				}
			}
			return true;
		};
		this.isStringE = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharE(data.substring(i, i + 1))
						&& !this.isSpaceFormat(data.substring(i, i + 1))
						&& !this.isBreakLineFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringEWithoutSpace = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharE(data.substring(i, i + 1))
						&& !this.isBreakLineFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringAlphaNumber = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharE(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringIp = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isIpCharset(data.substring(i, i + 1)))
				{
					return false;
				} else
				{
					var reg = new RegExp(
							/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/);
					if (reg.test(data))
					{
						return true
					} else
						return false;
				}
			}
			return true;
		};
		this.isStringFull = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharChinese(data.substring(i, i + 1)))
				{
					if (!this.isCharFull(data.substring(i, i + 1))
							&& !this.isSpaceFormat(data.substring(i, i + 1))
							&& !this.isBreakLineFormat(data.substring(i, i + 1)))
					{
						return false;
					}
				}
			}
			return true;
		};
		this.isStringSwiftWithOutZH = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (this.isCharChinese(data.substring(i, i + 1)))
				{
					return false;
				} else if (!this.isCharSwiftWithOutZH(data.substring(i, i + 1))
						&& !this.isSpaceFormat(data.substring(i, i + 1))
						&& !this.isBreakLineFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringName = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharName(data.substring(i, i + 1))
						&& !this.isSpaceFormat(data.substring(i, i + 1))
						&& !this.isBreakLineFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringMail = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharMail(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringPwd = function(data)
		{
			if (data == null || data == '') return false;

			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharPwd(data.substring(i, i + 1)))
				{
					return false;
				}
			}

			return true;
		};
		this.isStringNewPwd = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharPwd(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			// Check 3 continues char
			var regContinues = new RegExp(/([a-zA-Z\d])\1{2,}/);
			var result = regContinues.test(data);
			if (result) return false;

			return true;
		};
		this.isStringSWIFT = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharSWIFT(data.substring(i, i + 1))
						&& !this.isSpaceFormat(data.substring(i, i + 1))
						&& !this.isBreakLineFormat(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			// Check first char
			var charset = "-:";
			var firstChar = data.substring(0, 1);
			if (charset.indexOf(firstChar) != -1)
			{
				return false;
			}
			return true;
		};
		this.toChar = function(event)
		{
			var code = "";
			if (typeof (event.charCode) == "undefined")
			{
				code = event.keyCode;
			} else
			{
				code = event.charCode;
			}
			return String.fromCharCode(code)
		};
		this.isStringCharSet1 = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharSet1Format(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isStringCharSet2 = function(data)
		{
			if (data == null || data == '') return false;
			var i = 0;
			for (i = 0; i < data.length; i++)
			{
				if (!this.isCharSet2Format(data.substring(i, i + 1)))
				{
					return false;
				}
			}
			return true;
		};
		this.isEmpty = function(data)
		{
			if (data == null || data == '') return true;
			else
				return false;
		}
	};
	
	xaa.addModule("charset", new charset());
})(jQuery, xaa);
