'use strict';

/**
 * @ngdoc function
 * @name statystykiAllegroApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the statystykiAllegroApp
 */
angular.module('statystykiAllegroApp')
  .controller('CategoryCtrl', function ($scope, category) {
    $scope.categories = category.query();
    $scope.topLevel = true;

    var history = {};

    $scope.enter = function(index) {
      history.name = category.current;
      history = {
        history: history,
        categories: $scope.categories,
        name: $scope.categories[index].name
      };
      category.current = $scope.categories[index].name;
      $scope.categories = $scope.categories[index].subcategories;
      $scope.topLevel = history.history === undefined;
    };

    $scope.back = function() {
      $scope.categories = history.categories;
      history = history.history;
      category.current = history.name;
      $scope.topLevel = history.history === undefined;
    };
  });
