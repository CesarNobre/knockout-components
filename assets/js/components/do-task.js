define(['require','text!do-task.html','storage','knockout','Task'],function (require, doTaskTemplate, storage){
	var ko = require('knockout');
	var Task = require('Task');
	
	function viewModel(){
		var self = this;
		self.task = ko.observable('');
		self.tasks = ko.observableArray();

		self.SaveTask = function(task){
			if(!self.task()) return;
			var task = new Task(self.task());
			self.tasks.push(task);
			self.task('');
			storage.Save("myTasks", self.tasks());
			document.querySelector('#typeTaskDescription').focus();
		}

		self.DeleteTask = function(task){
			self.tasks().forEach(function(item, indexToRemove){
				if(item.description() == task.description()) self.tasks.splice(indexToRemove, 1);
			});
			localStorage.setItem("myTasks", ko.toJSON(self.tasks()));
 		}

 		var loadTasks = function(){
 			var myTasks = storage.Find("myTasks");
 			myTasks.forEach(function(item){
 				var task = new Task(item.description);
 				self.tasks.push(task);
 			})
 		}();
	}

	ko.components.register('do-task', {
    	viewModel: viewModel,
    	template: doTaskTemplate
	});

	ko.applyBindings(new viewModel());
});