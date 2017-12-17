'use strict';
app.controller('LoginCtrl', function($rootScope, $scope, $http, $localStorage, $state, UserService) {
    $scope.isRememberMe = false;
    $scope.email = '';
    $scope.password = '';

    $scope.login = function(){
    	if($scope.LoginForm.$valid){
    		UserService.login($scope.email, $scope.password).$promise.then(function(res){
    			$localStorage.token = res.data.token;
    			$rootScope.profile = {
    				fullname : res.data.fullname,
    				email : res.data.email,
    				type : res.data.type
    			}
    			$state.go('root');
    		}, function(error){
    			if(error.status == 404){
    				alert('Email or password is incorrect.')
    			}else{
    				console.log('Internal server error, please try again later.');
    			}
    		})
    	}
    }

});