'use strict';

/**
 * @ngdoc directive
 * @name statystykiAllegroApp.directive:province
 * @description
 * # province
 */
angular.module('statystykiAllegroApp')
  .directive('province', function ($compile) {
    return {
      restrict: 'A',
      scope: {
        dummyData: '=',
        hoverProvince: '='
      },
      link: function (scope, element) {
        scope.elementId = element.attr('id');
        scope.provinceClick = function () {
          window.alert(scope.dummyData[scope.elementId].value);
        };
        scope.provinceMouseOver = function () {
          scope.hoverProvince = scope.elementId;
          element[0].parentNode.appendChild(element[0]);
        };
        element.attr('ng-click', 'provinceClick()');
        element.attr('ng-attr-fill', '{{dummyData[elementId].value | mapColour}}');
        element.attr('ng-mouseover', 'provinceMouseOver()');
        element.attr('ng-class', '{active:hoverProvince==elementId}');
        element.removeAttr('province');
        $compile(element)(scope);
      }
    };
  });
