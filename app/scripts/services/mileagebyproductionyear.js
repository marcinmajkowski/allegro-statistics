'use strict';

/**
 * @ngdoc service
 * @name statystykiAllegroApp.mileageByProductionYear
 * @description
 * # mileageByProductionYear
 * Service in the statystykiAllegroApp.
 */
angular.module('statystykiAllegroApp')
  .service('mileageByProductionYear', function ($resource) {
    return $resource('api/mileageByProductionYear.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  });
