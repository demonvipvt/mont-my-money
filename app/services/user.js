app.service('UserService', function($resource) {
	var userApi = "/api/user/";
    this.login = function (email, password) {
    	var user = {
    		email : email,
    		password : password
    	}
		return $resource(userApi + 'login').save(user);
    }
    this.register = function(user){
		return $resource(userApi + 'register').save(user);
    }
    this.getInfo = function() {
    	return $resource(userApi).get();
    }
});