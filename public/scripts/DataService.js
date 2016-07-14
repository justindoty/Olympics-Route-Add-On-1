angular.module('olympicApp').factory('DataService', function($http){

  var data = {};




  function judoSuccess(response) {
      data.judo = response.data;
      console.log('Successs: ', response);
    }

  function archerySuccess(response) {
      data.archery = response.data;
      console.log('Successs: ', response);
    }

  function taekwondoSuccess(response) {
      data.taekwondo = response.data;
      console.log('Successs: ', response);
    }

  function tableTennisSuccess(response) {
      data.tableTennis = response.data;
      console.log('Successs: ', response);
    }

  function weightliftingSuccess(response) {
      data.weightlifting = response.data;
      console.log('Successs: ', response);
    }

    function handleFailure(response) {
      console.log('Failure: ', response);
    }



    function init() {
      $http.get("/olympics/judo").then(judoSuccess, handleFailure);
      $http.get("/olympics/weightlifting").then(weightliftingSuccess, handleFailure);
      $http.get("/olympics/taekwondo").then(taekwondoSuccess, handleFailure);
      $http.get("/olympics/tableTennis").then(tableTennisSuccess, handleFailure);
      $http.get("/olympics/archery").then(archerySuccess, handleFailure);
    }

    init();

    return {
      data: data,
      init: init
    }


})
