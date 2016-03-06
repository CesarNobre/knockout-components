define(['do-task','Task'],function(doTask,Task){
	var vm = new doTask.viewModel()
	
	describe("When try to save a task", function() {
	  it("if description is empty, shouldn't save a task", function() {
	    vm.task('');
	    vm.SaveTask();
	    expect(vm.tasks().length).toEqual(0);
	  });
	});
});

