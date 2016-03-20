'use strict';

describe('Service: statistics', function () {

  // load the service's module
  beforeEach(module('statystykiAllegroApp'));

  // instantiate service
  var statistics;
  beforeEach(inject(function (_statistics_) {
    statistics = _statistics_;
  }));

  it('should do something', function () {
    expect(!!statistics).toBe(true);
  });

});
