'use strict';

describe('Filter: mapColour', function () {

  // load the filter's module
  beforeEach(module('statystykiAllegroApp'));

  // initialize a new instance of the filter before each test
  var mapColour;
  beforeEach(inject(function ($filter) {
    mapColour = $filter('mapColour');
  }));
});
