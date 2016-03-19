'use strict';

/**
 * @ngdoc directive
 * @name januszeMotoryzacjiApp.directive:mapOfPoland
 * @description
 * # mapOfPoland
 */
angular.module('januszeMotoryzacjiApp')
  .directive('mapOfPoland', function ($compile) {
    return {
      restrict: 'A',
      templateUrl: 'images/mapofpoland.svg',
      link: function (scope, element, attrs) {
        var provinces = element[0].querySelectorAll('.province');
        angular.forEach(provinces, function (path, key) {
          var provinceElement = angular.element(path);
          provinceElement.attr('province', '');
          provinceElement.attr('dummy-data', 'dummyData');
          provinceElement.attr('hover-province', 'hoverProvince');
          $compile(provinceElement)(scope);
        });
      }
    };
  });
