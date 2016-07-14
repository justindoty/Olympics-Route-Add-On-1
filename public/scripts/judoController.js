angular.module('olympicApp').controller('JudoController', function($scope, DataService){

  // DataService.getJudo();
  $scope.data = DataService.data;
    console.log('Judoooo');


});
