//create a service for myApp
angular.module('myApp').service('dataService', function() {
	var employeesArray = [];
	
	// function to get name
	this.getEmployee = function() {
		//get & save name from localStorage
		var eArray = JSON.parse(localStorage.getItem('empLS')) || employeesArray;
		employeesArray = eArray;
		//convert JSON string to JS object
		//display employees in array
		return employeesArray;
	}
	
	// function to add names
	this.addEmployee = function(eName, eTitle, eEmail, eMobile) {
		//store form data into object
		var addedEmployees = {			
			name	: eName,
			title	: eTitle,
			email	: eEmail,
			mobile	: eMobile
		};
		
		//add new employees to array
		employeesArray.push(addedEmployees);
		localStorage.setItem("empLS", JSON.stringify(employeesArray));
	}

	// function to delete names
	this.fireEmployee = function (eIndex) {
		//locate specified name
		employeesArray.splice(pIndex, 1);
		localStorage.setItem("empLS", JSON.stringify(employeesArray));
	}
	
	this.cleanHouse = function () {
		employeesArray.splice(0);
		localStorage.clear();
	}
})