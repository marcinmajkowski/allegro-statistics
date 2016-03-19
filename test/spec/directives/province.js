'use strict';

describe('Directive: province', function () {

  // load the directive's module
  beforeEach(module('januszeMotoryzacjiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<province></province>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the province directive');
  }));
});
