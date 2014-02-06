'use strict';

angular.module('sylTigithubioApp')
	.controller('ProjectCtrl', function ($scope, $routeParams, Projectsinfos, Project) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.project = new Project('invalid', '#', 'none');

		var current = $routeParams.name;
		var stop = false;
		for (var i = 0; i < Projectsinfos.length; i++) {
			if (stop === true) {
				break;
			}
			for (var y = 0; y < Projectsinfos[i].length; y++) {
				if (Projectsinfos[i][y].name.indexOf(current) >= 0)
				{
					$scope.project = Projectsinfos[i][y];
					stop = true;
					break;
				}
			}
		}
	});
