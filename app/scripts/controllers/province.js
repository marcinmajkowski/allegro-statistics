'use strict';

/**
 * @ngdoc function
 * @name januszeMotoryzacjiApp.controller:ProvinceCtrl
 * @description
 * # ProvinceCtrl
 * Controller of the januszeMotoryzacjiApp
 */
angular.module('januszeMotoryzacjiApp')
  .controller('ProvinceCtrl', function ($scope) {
    var provinces = [
      'dolnoslaskie',
      'kujawsko-pomorskie',
      'lubelskie',
      'lubuskie',
      'lodzkie',
      'malopolskie',
      'mazowieckie',
      'opolskie',
      'podkarpackie',
      'podlaskie',
      'pomorskie',
      'slaskie',
      'swietokrzyskie',
      'warminsko-mazurskie',
      'wielkopolskie',
      'zachodniopomorskie'
    ];

    $scope.createDummyData = function () {
      var dataTemp = {};
      angular.forEach(provinces, function (province, key) {
        dataTemp[province] = {value: Math.random()};
      });
      $scope.dummyData = dataTemp;
    };
    $scope.createDummyData();
  });