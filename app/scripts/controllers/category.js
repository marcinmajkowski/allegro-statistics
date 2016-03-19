'use strict';

/**
 * @ngdoc function
 * @name januszeMotoryzacjiApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the januszeMotoryzacjiApp
 */
angular.module('januszeMotoryzacjiApp')
  .controller('CategoryCtrl', function ($scope, category) {
    $scope.categories = category.query();

    $scope.enter = function(index) {
      $scope.categories = $scope.categories[index].subcategories;
    }
  });
