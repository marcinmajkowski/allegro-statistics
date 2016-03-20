'use strict';

/**
 * @ngdoc service
 * @name statystykiAllegroApp.statistics
 * @description
 * # statistics
 * Service in the statystykiAllegroApp.
 */
angular.module('statystykiAllegroApp')
  .service('statistics', function () {
    var service = {};

    service.types = [
      {
        name: 'Średnia cena pojazdu',
        url: '#/averagePrice'
      },
      {
        name: 'Liczba pojazdów',
        url: '#/count'
      },
      {
        name: 'Przebieg a rok produkcji',
        url: '#/mileageByProductionYear'
      }
    ];

    service.current = '';

    return service;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
