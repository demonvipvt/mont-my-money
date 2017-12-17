var express = require('express'),
	router = express.Router(),
	user = require('./controllers/user');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
// 	pageModel.title('/auth'+req.path, function(title){
// 		req.page_title = title;
// 		next();
// 	});
// })
// define the home page route
router.use('/user', user);

module.exports = router