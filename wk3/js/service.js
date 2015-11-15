//create a service for myApp
angular.module("myApp").service('dataService', function() {
	
	var tasksArray = ['do FWF homework', 'finish FOP reading', 'call Mom', 'clean kitchen', 'work @ 3pm - midnight' ];
	
	// function to get task
	this.getTask = function() {
		//convert to JS object
		var tArray = JSON.parse(localStorage.getItem('taskLS')) || [];
		//local copy is identical to server copy
		tasksArray = tArray;
		return tasksArray;
	}
	
	// function to add task
	this.newTask = function(task) {
		var savedTask = [];
		tasksArray.push(savedTask);
		//store form data into object
		localStorage.setItem('taskLS', JSON.stringify(tasksArray));
	}
	
	this.removeTask = function(nTask) {
		tasksArray.splice(nTask, 1);
		localStorage.setItem('taskLS', JSON.stringify(tasksArray));
	}
	
	this.clearOut = function() {
		tasksArray.splice(0);
		localStorage.clear();
	}
})