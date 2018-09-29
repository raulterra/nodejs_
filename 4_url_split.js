// access http://localhost:8080/?name=Jonh&lastname=Doe

var http = require('http');
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url,true).query;
	res.write(q.name + " " + q.lastname);
    res.end();
}).listen(8080);