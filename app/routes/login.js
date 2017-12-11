'use strict';

var userModel = require('../models/user');

module.exports = function(app){
	var con = app.get('DBConnection');
	app.route('/login')
	  .get(function (req, res) {
	  	console.log(req.headers)
		var page_title = "Login - My Money";
		res.render('login',{page_title : page_title});
	  })
	  .post(login,handle_reponse)
	  .put(function (req, res) {
	    res.send('Update the book')
	  })
	function login(req, res, next){
		var email = req.body.email;
		var password = req.body.password;
		if(!email || !password){
			req.error = true;
			req.message = 'Please fill all required fields';
			next();
		}else{
			userModel.login(email, password, con, function(error, result){
				if(error){
					req.error = true;
					req.message = error.message;
					next();
				}
				if(result.length == 0){
					req.message = 'user not found';
					req.error = true;
				}

				req.data = result[0];
				next();
			});
		}
	}
	function handle_reponse(req, res){
		let result = {
			error : req.error || false,
			message : req.message || '',
			data : req.data || {}
		}
		res.json(result);
	}
}