'use strict';

var fs = require('fs');

module.exports = function(app){
	// Lookup all routes files
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        // run the routes file
        require('./' + name)(app);
    });
}
