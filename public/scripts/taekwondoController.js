
  angular.module('olympicApp').controller('TaekwondoController', function($scope, DataService){

    // DataService.getTaekwondo();
    $scope.data = DataService.data;
      console.log('Tables everywhere');


  });
