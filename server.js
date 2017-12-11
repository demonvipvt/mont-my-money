var app = require('./app');
var port = app.get('port');
var server = app.listen( port, function() {
  console.log('Express server listening on port ' + port);
});