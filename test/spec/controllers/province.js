'use strict';

describe('Controller: ProvinceCtrl', function () {

  // load the controller's module
  beforeEach(module('statystykiAllegroApp'));

  var ProvinceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProvinceCtrl = $controller('ProvinceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
