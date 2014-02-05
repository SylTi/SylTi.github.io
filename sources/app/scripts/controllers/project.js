'use strict';

angular.module('sylTigithubioApp')
  .controller('ProjectCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.projectName = $routeParams.name;
  });
