'use strict';
app.controller('LoginCtrl', function($scope, $http, UserService) {
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    var test = UserService.login();
    console.log(test);

});