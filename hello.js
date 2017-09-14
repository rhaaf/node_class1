var http = require('http');
var fs = require('fs');
var path = require('path');
var host = 'localhost';
var port = '3000';

http.createServer(function(req, res) {
	res.writeHead(200,{'content-type':'text/html'});
	res.end();
}).listen(port,host,function() {
	console.log('Server is listening at http://'+host+':'+port);
});