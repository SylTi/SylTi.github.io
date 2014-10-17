'use strict';

/**
 * @ngdoc directive
 * @name sylTiCvApp.directive:progressBar
 * @description
 * # progressBar
 */
angular.module('sylTiCvApp')
  .directive('progressBar', function (value) {
  	return {
		template: '<div class="progress progress-striped active"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+value+'" aria-valuemin="0" aria-valuemax="100" style="width: '+value+'%"><span class="sr-only">85% Complete</span></div></div>',
		restrict: 'A'
	};
  });
