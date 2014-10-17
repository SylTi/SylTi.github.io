'use strict';

/**
 * @ngdoc overview
 * @name sylTiCvApp
 * @description
 * # sylTiCvApp
 *
 * Main module of the application.
 */
angular
  .module('sylTiCvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'google-maps'.ns()
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/project/:name', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
