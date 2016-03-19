'use strict';

/**
 * @ngdoc service
 * @name januszeMotoryzacjiApp.mileageByProductionYear
 * @description
 * # mileageByProductionYear
 * Service in the januszeMotoryzacjiApp.
 */
angular.module('januszeMotoryzacjiApp')
  .service('mileageByProductionYear', function ($resource) {
    return $resource('http://localhost:8080/stat/mileageByProductionYear', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  });
