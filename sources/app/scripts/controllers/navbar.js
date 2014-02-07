'use strict';

angular.module('sylTigithubioApp')
  .controller('NavbarCtrl', function ($scope, $location, Projectsinfos) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function isActive(route) {
      if (($location.path().indexOf('project') >= 0) && (route.indexOf('project') >= 0))
      {
        return true;
      }
      else
      {
        return route === $location.path();
      }
    };
    $scope.Projectsinfos = Projectsinfos;
  });
