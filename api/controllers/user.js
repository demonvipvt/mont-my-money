'use strict';
var express = require('express'),
	router = express.Router(),
	helper = require('./helper.js'),
	jwt = require('./jwt.js'),
	userModel = require('../models/user.js');
// middleware that is specific to this router
// router.use(jwt.verifyToken);
// define the home page route
router.get('/', jwt.verifyToken, function (req, res, next) {
	if(!req.userId) next();
	
	userModel.getInfo(req.userId, function( error, data){
		req.error = error;
		if(data){
			req.data = data[0];
		}
		next();
	})
});
router.post('/login', function (req, res, next) {
	var user = req.body;
	userModel.login(user, function( error, data){
		req.error = error;
		if(data && data.length > 0){
			req.data = {
				token : jwt.createToken(data.userId),
				type : data.type,
				email : data.email,
				fullname : data.fullname
			};
		}
		next();
	})
});
router.post('/register', function (req, res, next) {
	var user = req.body;
	user.type = 'user';
	userModel.register(user, function( error, data){
		req.error = error;
		if(data){
			req.data = {
				token : jwt.createToken(data.insertId),
				type : user.type
			};
		}
		next();
	})
});
// handle response
router.use(helper.handleResponse);

module.exports = router