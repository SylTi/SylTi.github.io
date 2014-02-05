'use strict';

var Project = function (name, langage, link)
{
	this.name = name;
	this.langage = langage;
	this.link = link;
};

angular.module('sylTigithubioApp')
	.controller('ProjectCtrl', function ($scope, $routeParams) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		var projects = {};
		projects.shell = new Project('shell', 'C', 'http://github.com/SylTi/');
		projects.rt = new Project('Raytracer', 'C', 'http://github.com/SylTi/');
		projects.techweb = new Project('Techweb', 'PHP', 'http://github.com/SylTi/');


		var current = $routeParams.name;
		if (projects[current] !== undefined)
		{
			$scope.project = projects[current];
		}
		else
		{
			$scope.project = new Project('invalid', '#', 'none');
		}
		
	});
