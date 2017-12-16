'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    "ui.router",
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: '/components/index.html'
            // views: {
            //     'header': {
            //         templateUrl: '/components/header.html',
            //     },
            //     'footer': {
            //         templateUrl: '/components/footer.html'
            //     },
            //     'container@': {
            //         templateUrl: '/components/home/index.html'
            //     }
            // }
        })
        .state('root.about', {
            url: 'about',
            // templateUrl: 'components/about.html'
            views: {
                '': {
                    templateUrl: '/components/about.html'
                }
            }
        });
    $locationProvider.html5Mode(true);
    // .state('root', {
    //         url: '',
    //         templateUrl: 'components/home/index.html',
    //     })
    //     .state('404', {
    //         url: '/404',
    //         templateUrl: 'components/404.html'
    //     });
    // For any unmatched url, send to /populations
    // $urlRouterProvider.otherwise('/about')
});