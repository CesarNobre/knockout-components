define(['require','text!do-task.html','knockout','Task'],function (require, doTaskTemplate){
	var ko = require('knockout');
	var Task = require('Task');

	function viewModel(){
		var self = this;
		self.task = ko.observable('');
		self.tasks = ko.observableArray();

		self.SaveTask = function(){
			var task = new Task(self.task());
			self.tasks.push(task);
			self.task('');
		}

		self.DeleteTask = function(task){
 			self.tasks.splice(task.index);
 		}
	}
	
	ko.components.register('do-task', {
    	viewModel: viewModel,
    	template: doTaskTemplate
	});

	ko.applyBindings(new viewModel());
});