'use strict';

angular.module('sylTigithubioApp')
	.controller('AboutCtrl', function ($scope)
	{
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.map =
		{
			center:
			{
				latitude: 48.793521,
				longitude: 2.398767
			},
			zoom: 12
		};
	});
