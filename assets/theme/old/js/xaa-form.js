function XaaForm(config) {
	this.config = config;
	this.id = config.id;
	this.validateOther = config.validateOther;
	this.init = function(xaa) {
		this.xaa = xaa;
		this.obj = $("#" + this.id);

		// bind submit event
		var temp = this;
		this.obj.submit(function() {
			return temp.submit();
		});

		// bind jquery validate
		this.xaa.registerPageInit(function() {
			temp.config.onsubmit = false;
			temp.jqvObj = temp.obj.validate(temp.config);
		});
	};

	this.validate = function() {

		// do jquery validate
		var result = this.jqvObj.form();
		if (!result)
			return false;

		// do other validate
		if (this.validateOther)
			return this.validateOther(this);

		return true;
	};

	this.submit = function() {

		// do validate
		var result = this.validate();
		if (result) {
			// block UI
			this.xaa.submitWait.blockUI();

			// call page destroy
			this.xaa.pageDestroy();
			return true;
		}
		return false
	};
}