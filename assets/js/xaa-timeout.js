(function(window, $, xaa) {
	
	var timeout = function() {
		
		this.maxInactiveInterval = 25 * 60 * 1000;
		this.timer = null;
		this.timeoutStatus = false;
	};

	var xaa_timeout_reminder_after_func = function() {
		xaa.timeout.setTimeout(true);
		xaa.ajax.send({
			url : XAA_CALLSERVER_PATH,
			refreshTimer: false,
			blockedByTimeout: false,
			data : {
				t : "t",
				"parms.SCREEN_LOCK_FLAG" : "true"
			},
			success : function() {
				reloginShow();
				xaa.timeout.clearTimer();
			},
			fail : function() {
				reloginShow();
				xaa.timeout.clearTimer();
			},
			error : function() {
				reloginShow();
				xaa.timeout.clearTimer();
			}
		});
	};
	
	var logoutTimers = function(maxInactiveInterval) {
		xaa.timeout.timer = window.setTimeout(xaa_timeout_reminder_after_func, maxInactiveInterval);
	};
	
	timeout.prototype.setMaxInactiveInterval = function(maxInactiveInterval) {
		this.maxInactiveInterval = maxInactiveInterval; 
	};
	
	timeout.prototype.updateTimer = function() {
		if (this.timer != null) {
			xaa.timeout.clearTimer();
			xaa.timeout.startUpTimer();
		}
	};
	
	timeout.prototype.clearTimer = function() {
		window.clearTimeout(this.timer);
	}
	
	timeout.prototype.startUpTimer = function() {
		xaa.timeout.setTimeout(false);
		logoutTimers(this.maxInactiveInterval);
	};
	
	timeout.prototype.isTimeout = function() {
		return this.timeoutStatus;
	}
	
	timeout.prototype.setTimeout = function(timeoutStatus) {
		this.timeoutStatus = timeoutStatus;
	}
	
	xaa.addModule("timeout", new timeout());

})(window, $, xaa);