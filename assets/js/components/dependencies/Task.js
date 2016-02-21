define(function (require){
	var ko = require('knockout');

	function Task(description){
		var self = this;
 		
 		self.description = ko.observable(description);
 		self.done = ko.observable(false);
 		self.actionName = ko.observable('Done');

 		self.TaskDone = function(){
 			var toggledBoolean = toggleBoolean(self.done());
 			self.done(toggledBoolean);
 		}

 		var toggleBoolean = function(myBool){
 			defineNameActionButton(myBool);
 			return !myBool;
 		}

 		var defineNameActionButton = function(doneTask){
 			if(doneTask){ 
 				self.actionName('Done')
 				return;
 			}
 			self.actionName('Undone');
 		}
	}

	return Task
})