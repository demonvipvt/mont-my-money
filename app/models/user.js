'use strict';

exports.login = function(email, password, connection, done){
	connection.query('Select * from account where email = ? and password = ?',[email, password],done)
}