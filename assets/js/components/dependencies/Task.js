define(function (require){
	var ko = require('knockout');

	function Task(description){
		var self = this;
 		
 		self.description = ko.observable(description);
 		self.done = ko.observable();
 
 		self.TaskDone = function(){
 			var toggledBoolean = self.done(toggleBoolean(self.done()));
 			self.done(toggledBoolean);
 		}
 
 		var toggleBoolean = function(myBool){
 			myBool = !myBool;
 		}
	}

	return Task
})