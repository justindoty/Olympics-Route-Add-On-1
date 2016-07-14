angular.module('olympicApp').controller('TennisController', function($scope, DataService){

  // DataService.getTableTennis();
  $scope.data = DataService.data;
    console.log('Tables everywhere');


});
