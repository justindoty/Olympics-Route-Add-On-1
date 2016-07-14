angular.module('olympicApp').controller('WeightliftingController', function($scope, DataService){

  // DataService.getWeightlifting();
  $scope.data = DataService.data;
    console.log('LIFT');


});
