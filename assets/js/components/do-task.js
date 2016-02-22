define(['require','text!do-task.html','knockout','Task'],function (require, doTaskTemplate){
	var ko = require('knockout');
	var Task = require('Task');

	function viewModel(){
		var self = this;
		self.task = ko.observable('');
		self.tasks = ko.observableArray();

		self.SaveTask = function(task,element){
			var task = new Task(self.task());
			self.tasks.push(task);
			self.task('');
			localStorage.setItem("myTasks", ko.toJSON(self.tasks()));
			document.querySelector('#typeTaskDescription').focus();
		}

		self.DeleteTask = function(task){
			var itemToRemove = self.tasks().filter(function(item, index){
				if(item.description() == task.description()) 
					return item.index = index;
			});
 			self.tasks.splice(itemToRemove[0].index, 1);
 		}

 		var filterClickedTask = function(array, taskClicked){
 			return array.description() == taskClicked.description();
 		}

 		var loadTasks = function(){
 			var myTasks = JSON.parse(localStorage.getItem("myTasks"));
 			var allMyTasks = [];
 			myTasks.forEach(function(item){
 				var task = new Task(item.description);
 				allMyTasks.push(task);
 			})
 			self.tasks.push(allMyTasks);
 		}();
	}

	ko.components.register('do-task', {
    	viewModel: viewModel,
    	template: doTaskTemplate
	});

	ko.applyBindings(new viewModel());
});