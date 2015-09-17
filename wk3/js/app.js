angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){

	$routeProvider.when('/view1',{
		templateUrl: 'view1.html',
		controller: 'view1Controller'
	}).when('/view2', {
		templateUrl: 'view2.html',
		controller: 'view2Controller'
	}).when('/view3/:what', {
		templateUrl: 'view3.html',
		controller: 'view3Controller'
	}).otherwise({
		redirectTo: '/view1'
	});
})

.controller('view1Controller', function($scope, dataService) {
	$scope.task;
	$scope.newtasksArray = dataService.getTask;
	
	$scope.addnewTask = function() {
		dataService.newTask($scope.task);
		$scope.task = ' ';
	};
	
	$scope.deleteTask = function(deletedTask){
		var idx = 
			$scope.newtasksArray.indexOf(deletedTask);
		$scope.newtasksArray.splice(idx,1);
	}
})
/*
.controller('view2Controller', function($scope){
	$scope.test = 'Hello World 2';
	
	$scope.task;
	$scope.taskArray = {};

	$scope.addnewTask = function() {
		dataService.newTask($scope.newTask);
		$scope.newTask = {};
	}
	
	$scope.removeTasks = function(idx){
		dataService.removeTask(idx);
	}
	
	$scope.clear = function() {
		dataService.clearOut();
	}

})
	

.controller('view3Controller', function($scope, $routeParams){
	$scope.test = 'Hello World 3';
	$scope.otherTest = $routeParams.paramTest;
	$scope.calls;
	$scope.callsArray = ['Tim', 'Bob', 'Steve'];
	
	$scope.addItem = function() {
		$scope.callsArray.push($scope.calls)
	};
})	

.controller('MainController', function($scope){
	$scope.test = "Hello World";	
})*/