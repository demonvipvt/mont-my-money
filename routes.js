'use strict';
var authRoutes = require("./app/auth/routes"),
	path = require('path'),
	express = require('express');


module.exports = function(app){
	// Static
	app.use('/assets', express.static(path.join(__dirname, 'public')));
	app.use('/libs', express.static(path.join(__dirname, 'node_modules')));
	// Auth
	app.use("/auth", authRoutes);
	// Home 
	app.get("/", function(req, res){ res.render('home/index'); });
}