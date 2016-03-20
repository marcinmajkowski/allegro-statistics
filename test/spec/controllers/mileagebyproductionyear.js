'use strict';

describe('Controller: MileagebyproductionyearCtrl', function () {

  // load the controller's module
  beforeEach(module('statystykiAllegroApp'));

  var MileagebyproductionyearCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MileagebyproductionyearCtrl = $controller('MileagebyproductionyearCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
