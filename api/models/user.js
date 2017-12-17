'use strict';

exports.getInfo = function( userId, done){
	__dbconn.query('SELECT email, fullname, type FROM `account` WHERE id = ?', userId, done)
}
exports.login = function( user, done){
	console.log(user.email)	
	console.log(user.password)	
	__dbconn.query('SELECT id as userId, email, fullname, type FROM `account` WHERE `email` = ? AND `password` = ?', [user.email, user.password], done)
}
exports.register = function( user, done){
	__dbconn.query('INSERT INTO `account` SET ?', user, done)
}