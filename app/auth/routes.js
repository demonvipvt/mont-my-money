var express = require('express'),
	router = express.Router(),
	path = require('path'),
	pageModel = require('../models/page');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
	pageModel.title('/auth'+req.path, function(title){
		req.page_title = title;
		next();
	});
})
// Static files
router.use('/components', express.static( path.join(__dirname, 'components') ) );
// define the home page route
router.use('/', render_auth_view);

function render_auth_view(req, res){
	res.render('auth/index',{page_title : req.page_title}); 
}

module.exports = router