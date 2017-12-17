'use strict';

exports.register = function( user, done){
	__dbconn.query('INSERT INTO `account` SET ?', user, done)
}