app.service('UserService', function($resource) {
	var userApi = "/api/user/";
    this.login = function () {
        return 'login';
    }
    this.register = function(user){
		return $resource(userApi, {userId:'@id'}).save(user);
    }
});