'use strict';

/**
 * @ngdoc function
 * @name sylTiCvApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the sylTiCvApp
 */
angular.module('sylTiCvApp')
  .controller('NavbarCtrl', function ($scope, $location, projectsInfos) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.isActive = function isActive(route) 
	{
		if (($location.path().indexOf('project') >= 0) && (route.indexOf('project') >= 0))
		{
			return true;
		}
		else
		{
			return route === $location.path();
		}
	};
	$scope.Projectsinfos = projectsInfos;
  });
