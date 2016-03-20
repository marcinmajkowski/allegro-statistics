'use strict';

/**
 * @ngdoc service
 * @name statystykiAllegroApp.category
 * @description
 * # category
 * Service in the statystykiAllegroApp.
 */
angular.module('statystykiAllegroApp')
  .service('category', function ($resource, $location) {
    var service = $resource('api/:categoryId.json', {}, {
      query: {method:'GET', params:{categoryId:'categories'}, isArray:true}
    });

    service.current = {
      make: $location.search().make,
      model: $location.search().model,
      model2: $location.search().model2
    };

    return service;
  });
