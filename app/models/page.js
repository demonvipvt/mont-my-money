'use strict';

exports.title = function(originalUrl, done){
	var path = getPath(originalUrl);
	__dbconn.query('Select title from page where path = ?',path,function(error, result){
		if(error || result.length == 0){
			var title = "No Tile";
		}else{
			var title = result[0].title;
		}
		done(title+' - Mont Money');
	})
}
function getPath(url){
	var path = url.replace(/\\/g,'/');
	if(path[path.length-1] == '/'){
		path = path.slice(0, -1);
	}
	return path;
}