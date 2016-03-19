'use strict';

/**
 * @ngdoc directive
 * @name januszeMotoryzacjiApp.directive:province
 * @description
 * # province
 */
angular.module('januszeMotoryzacjiApp')
  .directive('province', function ($compile) {
    return {
      restrict: 'A',
      scope: {
        dummyData: "="
      },
      link: function (scope, element, attrs) {
        scope.elementId = element.attr("id");
        scope.provinceClick = function () {
          alert(scope.dummyData[scope.elementId].value);
        };
        element.attr('ng-click', 'provinceClick()');
        element.attr('ng-attr-fill', '{{dummyData[elementId].value | mapColour}}');
        element.removeAttr("province");
        $compile(element)(scope);
      }
    };
  });
