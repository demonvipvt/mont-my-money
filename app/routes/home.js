'use strict';

module.exports = function(app){
	app.get("/", function(req, res){
		console.log('Index')
	  res.render('index');
	});

	app.get('/partials/:name', function (req, res) {
	  var name = req.params.name;
	  console.log(req.params)
	  res.render('partials/' + name);
	});

	app.get('/not_found', function(req, res){
		console.log(404)
	  res.render('404');
	});
}