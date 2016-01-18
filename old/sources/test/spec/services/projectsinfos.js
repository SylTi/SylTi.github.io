'use strict';

describe('Service: projectsInfos', function () {

  // load the service's module
  beforeEach(module('sylTiCvApp'));

  // instantiate service
  var projectsInfos;
  beforeEach(inject(function (_projectsInfos_) {
    projectsInfos = _projectsInfos_;
  }));

  it('should do something', function () {
    expect(!!projectsInfos).toBe(true);
  });

});
