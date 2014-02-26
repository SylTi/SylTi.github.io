'use strict';

describe('Service: Trad', function () {

  // load the service's module
  beforeEach(module('sylTigithubioApp'));

  // instantiate service
  var Trad;
  beforeEach(inject(function (_Trad_) {
    Trad = _Trad_;
  }));

  it('should do something', function () {
    expect(!!Trad).toBe(true);
  });

});
