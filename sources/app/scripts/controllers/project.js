'use strict';

angular.module('sylTigithubioApp')
	.controller('ProjectCtrl', function ($scope, $routeParams, Projectsinfos, Project, $sce) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.project = new Project('invalid', '#', 'none');

		var current = $routeParams.name;
		/*console.log(current);
		if (current === "TeamCode")
		{
			//window.alert("here");
			console.debug($sce);
			$scope.url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/naBTXXypOAQ');
			$scope.youtube = $sce.trustAsHtml('<iframe width="560" height="315" ng-src="' + $scope.url +'" frameborder="0" allowfullscreen></iframe>');
			console.debug($scope.url);
			console.debug($scope.youtube);
		}*/
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
