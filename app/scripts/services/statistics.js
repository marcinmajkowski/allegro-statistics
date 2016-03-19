'use strict';

/**
 * @ngdoc service
 * @name januszeMotoryzacjiApp.statistics
 * @description
 * # statistics
 * Service in the januszeMotoryzacjiApp.
 */
angular.module('januszeMotoryzacjiApp')
  .service('statistics', function () {
    var service = {};

    service.types = [
      'Średnia cena pojazdu',
      'Liczba pojazdów',
      'Przebieg a rok produkcji'
    ];

    return service;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
