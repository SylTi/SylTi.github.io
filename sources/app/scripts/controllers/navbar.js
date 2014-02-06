'use strict';

angular.module('sylTigithubioApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function(route) {
      if ($location.path().indexOf('project') !== -1)
      {
        return true;
      }
      else
      {
        return route === $location.path();
      }
    };
  });
