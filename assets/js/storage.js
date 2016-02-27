define(['knockout'], function(ko){
	
	var Save = function(key, value){
		localStorage.setItem(key, ko.toJSON(value));
	}
	var Find = function(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}

	var UpdateStatusTask = function(key, newValue){
		oldValue = Find(key);

		oldValue.forEach(function(item,index){
			if(item.description == newValue.description()){
				item.done = newValue.done();
			}
		});

		Save(key, oldValue);
	}

	return {
		Save : Save,
		Find : Find,
		UpdateStatusTask : UpdateStatusTask
	}
});