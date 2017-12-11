'use strict';

/*
 * Serve JSON to our AngularJS client
 */

module.exports = function(app){
	app.get("/api/name" , function (req, res) {
	  res.json({
	    name: 'Bob'
	  });
	});
}