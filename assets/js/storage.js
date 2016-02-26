define(['knockout'], function(ko){
	
	var Save = function(key, value){
		localStorage.setItem(key, ko.toJSON(value));
	}
	var Find = function(key){
		return JSON.parse(localStorage.getItem(key));
	}

	var UpdateStatusTask = function(key, newValue){
		oldValue = find(key);

		oldValue.forEach(function(item,index){
			if(item.description() == newValue.description()){
				item.done(newValue.done());
			}
		});
	}

	return {
		Save : save,
		Find : find,
		UpdateStatusTask : UpdateStatusTask
	}
});