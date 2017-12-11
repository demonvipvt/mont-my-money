
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  // morgan = require('morgan'),
  routes = require('./routes'),
  http = require('http'),
  config = require('./config'),
  mysql = require('mysql'),
  fs = require('fs'),
  path = require('path');
// set root variable
global.__root   = __dirname; 

var app = module.exports = express();


/**
 * Configuration
 */


// all environments
app.set('config', config);
app.set('port', config.port);
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');
app.use(bodyParser());


 // Setup logger
 // var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
 // app.use(morgan('tiny', {stream: accessLogStream}))
// app.use(morgan('dev'));


app.use(methodOverride());

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}
// DB connection
var DBConnection = mysql.createConnection(config.db);
global.__dbconn   = DBConnection; 
app.set('DBConnection', DBConnection);

/**
 * Routes
 */
require('./routes')(app);

module.exports = app;
