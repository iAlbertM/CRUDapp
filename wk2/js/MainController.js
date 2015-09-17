app.controller('MainController', ['$scope', function($scope) {
	$scope.namesArray = [];
	
	$scope.addName = function(){
		$scope.addName($scope.name);
			
		$scope.name = ' ';	
	}
	
	$scope.delName = function(deletedName){
		dataService.delName(deletedName);
	}
});
/*app.controller('MainController', ['$scope', function($scope) {
	
	app.directive('appInfo', function() {
	return {
    restrict: 'E',
    scope: {
      info: '='
    }, 
    templateURL: 'js/directives/appInfo.html'
  };
}]);*/