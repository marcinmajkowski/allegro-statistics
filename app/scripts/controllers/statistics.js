'use strict';

/**
 * @ngdoc function
 * @name januszeMotoryzacjiApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the januszeMotoryzacjiApp
 */
angular.module('januszeMotoryzacjiApp')
  .controller('StatisticsCtrl', function ($scope, statistics) {
    $scope.statistics = statistics;
  });
