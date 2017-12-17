'use strict';
var express = require('express'),
	router = express.Router(),
	helper = require('./helper.js'),
	jwt = require('./jwt.js'),
	userModel = require('../models/user.js');
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
// 	pageModel.title('/auth'+req.path, function(title){
// 		req.page_title = title;
// 		next();
// 	});
// })
// define the home page route
router.post('/', function (req, res, next) {
	var user = req.body;
	user.type = 'user';
	userModel.register(user, function( error, data){
		req.error = error;
		if(data){
			var data = {
				token : jwt.createToken(data.insertId)
			}
			req.data = data;
		}
		next();
	})
});
// handle response
router.use(helper.handleResponse);

module.exports = router