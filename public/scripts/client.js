angular.module('olympicApp').controller('RefreshController', function($scope, DataService){

$scope.refresh = function() {
  console.log('refreshController');
  $scope.data = DataService.data;
  $scope.init = DataService.init;
  $scope.init();

}

});
