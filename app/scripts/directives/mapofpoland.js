'use strict';

/**
 * @ngdoc directive
 * @name januszeMotoryzacjiApp.directive:mapOfPoland
 * @description
 * # mapOfPoland
 */
angular.module('januszeMotoryzacjiApp')
  .directive('mapOfPoland', function () {
    return {
      templateUrl: 'images/mapofpoland.svg',
      restrict: 'A',
      link: function postLink() {
        
      }
    };
  });
