angular.module('olympicApp').controller('ArcheryController', function($scope, DataService){

  // DataService.getArchery();
  $scope.data = DataService.data;
  $scope.archery = DataService.archery;
  console.log('Archers...ARCH');


});
