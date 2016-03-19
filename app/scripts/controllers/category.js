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
    $scope.topLevel = true;

    var history = {};

    $scope.enter = function(index) {
      history = {
        history: history,
        categories: $scope.categories
      };
      $scope.categories = $scope.categories[index].subcategories;
      $scope.topLevel = history.history === undefined;
    };

    $scope.back = function() {
      $scope.categories = history.categories;
      history = history.history;
      $scope.topLevel = history.history === undefined;
    };
  });
