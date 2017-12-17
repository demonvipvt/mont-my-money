'use strict';
app.controller('RegisterCtrl', function($rootScope, $scope, $state, $localStorage, UserService) {
	$scope.isAgree = false;
	$scope.newUser = {
		fullname : '',
		email: '',
		password: ''
	};
	$scope.repass = '';

    $scope.submit = function(){
    	let user = $scope.newUser;
    	if($scope.RegisterFrom.$valid){
    		UserService.register(user).$promise.then(function(res){
    			$localStorage.token = res.data.token;
    			$rootScope.profile = {
    				fullname : user.fullname,
    				email : user.email,
    				type : res.data.type
    			}
    			$state.go('root')
    		}, function(error){
    			alert( error.data );
    		})
    	}else{
    		alert('Please fill all required fields.');
    	}
    }

});