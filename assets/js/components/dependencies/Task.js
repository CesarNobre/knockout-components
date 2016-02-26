define(function (require){
	var ko = require('knockout');
	var storage = require('storage');

	function Task(description){
		var self = this;
 		
 		self.description = ko.observable(description);
 		self.done = ko.observable(false);
 		self.actionName = ko.observable('Done');

 		self.FinishTask = function(){
 			var toggledBoolean = toggleBoolean(self.done());
 			self.done(toggledBoolean);
 			storage.UpdateStatusTask('myTasks', this);
 		}

 		var toggleBoolean = function(myBool){
 			defineActionNameButton(myBool);
 			return !myBool;
 		}

 		var defineActionNameButton = function(doneTask){
 			if(doneTask){ 
 				self.actionName('Done')
 				return;
 			}
 			self.actionName('Undone');
 		}
	}

	return Task
})