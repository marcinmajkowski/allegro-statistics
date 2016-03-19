'use strict';

/**
 * @ngdoc service
 * @name januszeMotoryzacjiApp.category
 * @description
 * # category
 * Service in the januszeMotoryzacjiApp.
 */
angular.module('januszeMotoryzacjiApp')
  .service('category', function ($resource, $location) {
    var currentCategory = "Osobowe";

    var service = $resource('http://localhost:8080/stat/:categoryId', {}, {
      query: {method:'GET', params:{categoryId:'categories'}, isArray:true}
    });

    service.current = {
      make: $location.search().make,
      model: $location.search().model,
      model2: $location.search().model2
    };

    return service;
  });
