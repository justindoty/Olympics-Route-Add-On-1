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
