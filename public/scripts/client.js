angular.module('olympicApp', ['ngRoute']);

// angular.controller('GenerateAthletes', function ($scope, $http){
//     function handleSuccess(response) {
//       $scope.olympics = response.data;
//       console.log('Successs: ', response);
//     }
//
//     function handleFailure(response) {
//       console.log('Failure: ', response);
//     }
//
//     $scope.getTeams = function() {
//       console.log('button clicked');
//       $http.get("/olympics/randomAthletes").then(handleSuccess, handleFailure);
//     }
//   })

angular.module('olympicApp').config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/archery', {
        templateUrl: 'views/archery.html',
        controller: 'ArcheryController'
      })
      .when('/judo', {
        templateUrl: 'views/judo.html',
        controller: 'JudoController'
      })
      .when('/tableTennis', {
        templateUrl: 'views/tableTennis.html',
        controller: 'TennisController'
      })
      .when('/taekwondo', {
        templateUrl: 'views/taekwondo.html',
        controller: 'TaekwondoController'
      })
      .when('/weightlifting', {
        templateUrl: 'views/weightlifting.html',
        controller: 'WeightliftingController'
      })

    $locationProvider.html5Mode(true);

  });

  angular.module('olympicApp').controller('ArcheryController', function($scope, $http){
    function handleSuccess(response) {
        $scope.archer = response.data;
        console.log('Successs: ', response);
      }

      function handleFailure(response) {
        console.log('Failure: ', response);
      }

      console.log('Archers...ARCH');
      $http.get("/olympics/archery").then(handleSuccess, handleFailure);

  });

  angular.module('olympicApp').controller('JudoController', function($scope, $http){
    function handleSuccess(response) {
        $scope.judo = response.data;
        console.log('Successs: ', response);
      }

      function handleFailure(response) {
        console.log('Failure: ', response);
      }

      console.log('Judoooo');
      $http.get("/olympics/judo").then(handleSuccess, handleFailure);

  });

  angular.module('olympicApp').controller('TennisController', function($scope, $http){
    function handleSuccess(response) {
        $scope.tennis = response.data;
        console.log('Successs: ', response);
      }

      function handleFailure(response) {
        console.log('Failure: ', response);
      }

      console.log('Tables everywhere');
      $http.get("/olympics/tableTennis").then(handleSuccess, handleFailure);

  });

  angular.module('olympicApp').controller('TaekwondoController', function($scope, $http){
    function handleSuccess(response) {
        $scope.taekwondo = response.data;
        console.log('Successs: ', response);
      }

      function handleFailure(response) {
        console.log('Failure: ', response);
      }

      console.log('Tables everywhere');
      $http.get("/olympics/taekwondo").then(handleSuccess, handleFailure);

  });

  angular.module('olympicApp').controller('WeightliftingController', function($scope, $http){
    function handleSuccess(response) {
        $scope.weightlifting = response.data;
        console.log('Successs: ', response);
      }

      function handleFailure(response) {
        console.log('Failure: ', response);
      }

      console.log('LIFT');
      $http.get("/olympics/weightlifting").then(handleSuccess, handleFailure);

  });
