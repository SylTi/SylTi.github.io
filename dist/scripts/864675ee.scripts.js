"use strict";angular.module("sylTigithubioApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/project/:name",{templateUrl:"views/project.html",controller:"ProjectCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("sylTigithubioApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("sylTigithubioApp").controller("ProjectCtrl",["$scope","$routeParams",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.projectName=b.name}]),angular.module("sylTigithubioApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.isActive=function(a){return a===b.path()}}]);