'use strict';
var express = require('express'),
	router = express.Router(),
	path = require('path'),
	pageModel = require('./app/models/page');
	express = require('express');


module.exports = function(app){
	// Static
	app.use('/assets', express.static(path.join(__dirname, 'public')));
	app.use('/libs', express.static(path.join(__dirname, 'node_modules')));
	app.use('/src', express.static( path.join(__dirname, 'app') ) );
	// Auth
	// app.use("/auth", authRoutes);
	// middleware that is specific to this router
	app.use(getPageTile);
	// Home 
	app.use("/", render_index_view);
}
function getPageTile (req, res, next) {
	pageModel.title(req.path, function(title){
		req.page_title = title;
		next();
	});
}
function render_index_view(req, res){
	res.render('index',{page_title : req.page_title}); 
}
