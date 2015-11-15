

//create a service for myApp
angular.module('app').service('DataServiceGoal', function() {
	var myGoals = [];
	
	//Get myGoals data from local storage
	this.getGoal = function() {
		//convert JSON data from localStorage into JS object 
		var gArray = JSON.parse(localStorage.getItem('goalsLS')) || myGoals;
		//sync changes to all copies
		myGoals = gArray;
		//return myGoals data as JS Object
		return myGoals;
	}
	
	//Add a new worker-w/ position + contact info
	this.addGoal = function(aGoal) {
		var myGoal = { goal: aGoal };

		//add myGoal to array
		myGoals.push(myGoal);
		//convert myGoals array into JSON data and use to update the localstorage copy
		localStorage.setItem("goalsLS", JSON.stringify(myGoals));
	}
		
	//Remove worker
	this.forgotGoal = function (pIndex) {
		//find the worker at pIndex
		myGoals.splice(pIndex, 1);
		localStorage.setItem("goalsLS", JSON.stringify(myGoals));
	}
	
	this.allClear = function () {
		myGoals.splice(0);
		localStorage.clear();
	}
	
	
});