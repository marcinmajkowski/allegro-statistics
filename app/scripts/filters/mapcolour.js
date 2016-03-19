'use strict';

/**
 * @ngdoc filter
 * @name januszeMotoryzacjiApp.filter:mapColour
 * @function
 * @description
 * # mapColour
 * Filter in the januszeMotoryzacjiApp.
 */
angular.module('januszeMotoryzacjiApp')
  .filter('mapColour', function () {
    return function (input) {
      var b = 255 - Math.floor(input * 255);
      var g = Math.floor(input * 255);
      return 'rgba(255,' + g + ',' + b + ',1';
    };
  });
