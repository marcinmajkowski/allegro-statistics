'use strict';

describe('Controller: MileagebyproductionyearCtrl', function () {

  // load the controller's module
  beforeEach(module('januszeMotoryzacjiApp'));

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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MileagebyproductionyearCtrl.awesomeThings.length).toBe(3);
  });
});
