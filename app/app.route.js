'use strict';

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: '/src/index.html'
        })
            .state('root.auth', {
                url: 'auth',
                templateUrl: '/src/components/auth/index.html',
                redirectTo:'root.auth.login'
            })
                .state('root.auth.login', {
                    url: '/login',
                    templateUrl: '/src/components/auth/login/index.html',
                    controller: 'LoginCtrl'
                })
                .state('root.auth.register', {
                    url: '/register',
                    templateUrl: '/src/components/auth/register/index.html',
                    controller: 'RegisterCtrl'
                });
    $locationProvider.html5Mode(true);
    // For any unmatched url, send to /populations
    // $urlRouterProvider.otherwise('/about')
});