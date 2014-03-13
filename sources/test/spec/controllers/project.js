'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('sylTigithubioApp'));

  var ProjectCtrl,
    scope, current;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    current = 'Shell';
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope,
      current: current
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should be equal', function ()
  {
    expect(scope.project.toBe(current));
  });
});
