'use strict';

/**
 * @ngdoc function
 * @name statystykiAllegroApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the statystykiAllegroApp
 */
angular.module('statystykiAllegroApp')
  .controller('StatisticsCtrl', function ($scope, statistics) {
    $scope.statistics = statistics;

    $scope.choose = function (type) {
      statistics.current = type;
    };
  });
