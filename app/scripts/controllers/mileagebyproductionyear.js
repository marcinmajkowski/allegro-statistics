'use strict';

/**
 * @ngdoc function
 * @name statystykiAllegroApp.controller:MileagebyproductionyearCtrl
 * @description
 * # MileagebyproductionyearCtrl
 * Controller of the statystykiAllegroApp
 */
angular.module('statystykiAllegroApp')
  .controller('MileagebyproductionyearCtrl', function ($scope, $location, statistics, category, mileageByProductionYear) {
    $scope.statistics = statistics;
    $scope.category = category;

    var mileages = [];

    $scope.labels = [];
    $scope.series = ['Przebieg'];
    $scope.data = [
      mileages
    ];

    $scope.mileageByProductionYear = mileageByProductionYear.query($location.search(), function(data) {
      angular.forEach(data, function (value, index) {
        $scope.labels.push(value.yearOfProduction);
        mileages.push(value.sumMileage / value.resultCount);
      });
    });

  });
