var http = require('http');
var dt = require("./2_myDateTimeModule");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(dt.myDateTime());
    res.end();
}).listen(8080);