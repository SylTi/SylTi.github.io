"use strict";angular.module("sylTigithubioApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/project/:name",{templateUrl:"views/project.html",controller:"ProjectCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("sylTigithubioApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);var Project=function(a,b,c){this.name=a,this.langage=b,this.link=c};angular.module("sylTigithubioApp").controller("ProjectCtrl",["$scope","$routeParams",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var c={};c.shell=new Project("shell","C","http://github.com/SylTi/"),c.rt=new Project("Raytracer","C","http://github.com/SylTi/"),c.techweb=new Project("Techweb","PHP","http://github.com/SylTi/");var d=b.name;a.project=void 0!==c[d]?c[d]:new Project("invalid","#","none")}]),angular.module("sylTigithubioApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.isActive=function(a){return a===b.path()}}]),angular.module("sylTigithubioApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("sylTigithubioApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);