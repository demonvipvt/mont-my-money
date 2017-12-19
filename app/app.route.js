'use strict';

app.config(function( $stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: '/src/index.html',
            controller: function($scope){
                document.body.className = "hold-transition wellcome";
            }
        })
        .state('auth', {
            url: '/auth',
            templateUrl: '/src/components/auth/index.html',
            controller: function($scope){
                document.body.className = "hold-transition auth-page";
            },
            redirectTo: 'auth.login'
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: '/src/components/auth/login/index.html',
            controller: 'LoginCtrl'
        })
        .state('auth.register', {
            url: '/register',
            templateUrl: '/src/components/auth/register/index.html',
            controller: 'RegisterCtrl'
        })
        .state('me', {
            url: '/me',
            templateUrl: '/src/components/me/index.html',    
            controller: function($scope){
                document.body.className = "hold-transition skin-blue sidebar-collapse fixed";
            },   
            // views: {
              // '': {      
              //   templateUrl: '/src/components/me/index.html',     
              // },
              // 'header': {      
              //   templateUrl: '/src/components/me/header.html',      
                // controller: function($scope){ ... controller stuff just for filters view ... }      
              // }
            // }
            // controller: 'RegisterCtrl'
        });
    $locationProvider.html5Mode(true);
    // For any unmatched url, send to /populations
    // $urlRouterProvider.otherwise('/about')
});