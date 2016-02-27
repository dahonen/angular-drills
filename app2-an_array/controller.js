angular.module('arrayApplication').controller('arrayController', function($scope, arrayService){
	$scope.array = arrayService.getData();
})