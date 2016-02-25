define(['knockout'], function(ko){
	var save = function(key, value){
		localStorage.setItem(key, ko.toJSON(value));
	}
	var find = function(key){
		return JSON.parse(localStorage.getItem(key));
	}

	return {
		save : save,
		find : find
	}
});