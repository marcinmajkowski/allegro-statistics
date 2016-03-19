'use strict';

/**
 * @ngdoc service
 * @name januszeMotoryzacjiApp.category
 * @description
 * # category
 * Service in the januszeMotoryzacjiApp.
 */
angular.module('januszeMotoryzacjiApp')
  .service('category', function ($resource) {
    return $resource('data/:categoryId.json', {}, {
      query: {method:'GET', params:{categoryId:'categories'}, isArray:true}
    });
  });
