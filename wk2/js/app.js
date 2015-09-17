var app = angular.module('myApp', []);

app.controller('MainController', function($scope, dataService){
	
	$scope.employees = dataService.getEmployee();
	
	$scope.addnewEmployee = function () {
		$scope.addnewEmployee = dataService.addEmployee (
			$scope.name,
			$scope.title,
			$scope.email,
			$scope.mobile
		);
	}
	
	$scope.fireEmployees = function(idx){
		dataService.fireEmployee(idx);
	}
	
	$scope.cleansHouse = function() {
		dataService.cleanhouse();
	}
	
}) 

