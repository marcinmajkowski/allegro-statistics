'use strict';

describe('Service: mileageByProductionYear', function () {

  // load the service's module
  beforeEach(module('statystykiAllegroApp'));

  // instantiate service
  var mileageByProductionYear;
  beforeEach(inject(function (_mileageByProductionYear_) {
    mileageByProductionYear = _mileageByProductionYear_;
  }));

  it('should do something', function () {
    expect(!!mileageByProductionYear).toBe(true);
  });

});
