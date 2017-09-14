var http = require('http');
var fs = require('fs');
var path = require('path');
var host = 'localhost';
var port = '3000';
var mimes = {
	'.html' : 'text/html',
	'.css' : 'text/css',
	'.js' : 'text/javascript',
	'.gif' : 'image/gif',
	'.jpg' : 'image/jpeg',
	'.png' : 'image/png'
};

var server = http.createServer(function(req, res){
	var filepath  = (req.url === '/') ? ('./index.htm') : ('.' + req.url);
	var contenttype = mimes[path.extname(filepath)];
	fs.exists(filepath, function(file_exists){
		if(file_exists) {
			fs.readFile(filepath, function(err, content){
				if(err){
					res.writeHead(500);
					res.end();
				}else {
					res.writeHead(200, {'content-type': contenttype });
					res.end(content, 'utf8');
				}
			});

		}else{
			res.writeHead(404);
			res.end('The requested file was not found.');
		}
	});
});

server.listen(port,host,function(){
	console.log('Server is listening at http://'+host+':'+port);
});