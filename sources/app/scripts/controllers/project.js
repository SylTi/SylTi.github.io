'use strict';

/**
 * @ngdoc function
 * @name sylTiCvApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the sylTiCvApp
 */
angular.module('sylTiCvApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, projectsInfos, Project) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.project = new Project('invalid', '#', 'none');

	var current = $routeParams.name;
	var stop = false;

	for (var i = 0; i < projectsInfos.length; i++) {
		if (stop === true) {
			break;
		}
		for (var y = 0; y < projectsInfos[i].length; y++) {
			if (projectsInfos[i][y].name.indexOf(current) >= 0)
			{
				$scope.project = projectsInfos[i][y];
				stop = true;
				break;
			}
		}
	}
  });
