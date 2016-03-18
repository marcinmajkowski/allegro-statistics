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
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/province', {
        templateUrl: 'views/province.html',
        controller: 'ProvinceCtrl',
        controllerAs: 'province'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
