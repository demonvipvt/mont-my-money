'use strict';

// Declare app level module which depends on filters, and services

angular.module('AuthApp', [
  'AuthApp.controllers',
  // 'AuthApp.filters',
  // 'AuthApp.services',
  // 'AuthApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/auth', {
      templateUrl: 'auth/components/login/index.html',
      controller: 'LoginCtrl'
    })
    .when('/auth/login', {
      templateUrl: 'auth/components/login/index.html',
      controller: 'LoginCtrl'
    })
    .when('/auth/register', {
      templateUrl: 'auth/components/login/index.html',
      controller: 'LoginCtrl'
    });
    // .when('/view2', {
    //   templateUrl: 'partials/partial2',
    //   controller: 'MyCtrl2'
    // })
    // .when('/view2/:id', {
    //   templateUrl: 'partials/partial2/',
    //   controller: 'MyCtrl2'
    // })
    // .otherwise({
    //   templateUrl: 'err404'
    // });

  $locationProvider.html5Mode(true);
});