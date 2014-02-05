'use strict';

angular.module('sylTigithubioApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
