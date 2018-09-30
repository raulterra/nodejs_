/*
	Usinng a module instaled from npm.
	Run: npm install upper-case
*/
var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(uc('Hello Word!'));
	res.end();
}).listen(8080);