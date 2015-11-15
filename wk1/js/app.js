var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
		
	$scope.item;
	
	$scope.groceries = ['Apples', 'Oranges', 'Lactaid Milk', 'Simply Lemonade'];

	$scope.addItem = function(){
			$scope.groceries.push($scope.item);
			$scope.item = ' ';	
	}
	
	$scope.delItem = function(deletedItem){
		var idx = $scope.groceries.indexOf(deletedItem);
		$scope.groceries.splice(idx, 1);
	}
});
