'use strict';

/**
 * @ngdoc function
 * @name sylTiCvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sylTiCvApp
 */
angular.module('sylTiCvApp')
  .controller('AboutCtrl', function ($scope) 
  {
    	$scope.map =
		{
			center:
			{
				latitude: 48.793521,
				longitude: 2.398767
			},
			zoom: 12
		};
		 $scope.marker = {
			coords: {
				latitude: 48.793521,
				longitude: 2.398767
			},
			id: 0
		};
  });
