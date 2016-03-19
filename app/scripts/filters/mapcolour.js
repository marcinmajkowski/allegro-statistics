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
      var l = {
        r: 51,
        g: 122,
        b: 183
      };

      var h = {
        r: 271,
        g: 83,
        b: 79
      };

      var interpolate = function (l, h, input) {
        return Math.floor(l + (h - l) * input);
      };

      var r = interpolate(l.r, h.r, input);
      var g = interpolate(l.g, h.g, input);
      var b = interpolate(l.b, h.b, input);

      return 'rgba(' + r + ',' + g + ',' + b + ',1)';
    };
  });
