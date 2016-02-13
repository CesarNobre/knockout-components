define(function (require){
	var ko = require('knockout');

	function Task(description){
		this.Description = ko.observable(description);
	}

	return Task
})