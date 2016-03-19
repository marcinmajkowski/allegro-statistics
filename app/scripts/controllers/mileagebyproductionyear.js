'use strict';

/**
 * @ngdoc function
 * @name januszeMotoryzacjiApp.controller:MileagebyproductionyearCtrl
 * @description
 * # MileagebyproductionyearCtrl
 * Controller of the januszeMotoryzacjiApp
 */
angular.module('januszeMotoryzacjiApp')
  .controller('MileagebyproductionyearCtrl', function ($scope, statistics, category, mileageByProductionYear) {
    $scope.statistics = statistics;
    $scope.category = category;

    var mileages = [];

    $scope.labels = [];
    $scope.series = ['Przebieg'];
    $scope.data = [
      mileages
    ];

    $scope.mileageByProductionYear = mileageByProductionYear.query({make: 'Volkswagen'}, function(data) {
      angular.forEach(data, function (value, index) {
        $scope.labels.push(value.yearOfProduction);
        mileages.push(value.sumMileage / value.resultCount);
      });
    });

  });
