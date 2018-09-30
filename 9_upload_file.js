/*
	Upload a file ussing the 'Formidable' module
	install: npm install formidable
*/

var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req, res) {
	if(req.url == '/fileUpload') {
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, files, file) {
			var oldpath = file.arquivo.path;
      		var newpath = './' + file.arquivo.name;
      		fs.rename(oldpath, newpath, function (err) {
        		if (err) throw err;
        		res.write('File uploaded and moved!');
        		res.end();
      		});
		});
	} else {
		fs.readFile('form.html', function(err, data) {
			if(err) throw err;
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(data);
			res.end();
		})	
	}
	
}).listen(8080);