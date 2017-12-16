'use strict';

// Declare app level module which depends on filters, and services

angular.module('AuthApp', [
  'AuthApp.controllers',
  'ui.router',
  // 'AuthApp.services',
  // 'AuthApp.directives'
]).
config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  // For any unmatched url, send to /populations
      // $urlRouterProvider.otherwise('/404')
      
      $stateProvider
        .state('auth', {
          url: '/auth',
          templateUrl: 'auth/components/login/index.html',
          controller: 'LoginCtrl'
        })
        // .state('populations', {
        //     url: "/populations",
        //     templateUrl: "populations.html"
        // })
        // .state('populations.visits', {
        //     url: "/visits",
        //     templateUrl: "populations.visits.html",
        //     controller: 'VisitCtrl'
        // })
        // .state('populations.subjects', {
        //     url: "/subjects",
        //     templateUrl: "populations.subjects.html",
        //     controller: 'SubjectCtrl'
        // })
        // .state('personnel', {
        //     url: "/personnel",
        //     templateUrl: "personnel.html"
        // })
        // .state('personnel.list', {
        //   url: '/list',
        //   templateUrl: 'personnel.list.html',
        //   controller: 'PersonnelCtrl'
        // })
        // .state('personnel.list.person', {
        //   url: '/:id',
        //   templateUrl: 'personnel.list.person.html',
        //   controller: function($scope, $stateParams){
        //     $scope.id = $stateParams.id
        //   }
        // });
  // $routeProvider.
  //   when('/auth', {
  //     templateUrl: 'auth/components/login/index.html',
  //     controller: 'LoginCtrl'
  //   })
  //   .when('/auth/login', {
  //     templateUrl: 'auth/components/login/index.html',
  //     controller: 'LoginCtrl'
  //   })
  //   .when('/auth/register', {
  //     templateUrl: 'auth/components/login/index.html',
  //     controller: 'LoginCtrl'
  //   })
  //   .otherwise({
  //     templateUrl: 'err404'
  //   });

  $locationProvider.html5Mode(true);
});