'use strict';

/**
 * @ngdoc overview
 * @name januszeMotoryzacjiApp
 * @description
 * # januszeMotoryzacjiApp
 *
 * Main module of the application.
 */
angular
  .module('januszeMotoryzacjiApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
