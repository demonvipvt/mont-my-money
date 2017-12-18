'use strict';

app.run(function ($localStorage, $http, $rootScope, UserService) {
    var token = $localStorage.token;
    if(token){
        $http.defaults.headers.common['x-access-token'] = $localStorage.token;
        UserService.getInfo().$promise.then(function(res){
        	$rootScope.profile = res.data;
        }, function(error){
        	delete $localStorage.token;
        })
    }
});