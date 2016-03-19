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
      {
        name: 'Średnia cena pojazdu',
        url: '#/province'
      },
      {
        name: 'Liczba pojazdów',
        url: '#/province'
      },
      {
        name: 'Przebieg a rok produkcji',
        url: '#/mileageByProductionYear'
      }
    ];

    service.current = "";

    return service;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
