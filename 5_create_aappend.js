/*
	The function appendFile concatenate content on file. If the file not exists, a new file is created
*/

var fs = require("fs");

fs.appendFile('file.txt', 'Hello World!', function(err) {
	if(err) throw err;
	console.log("Saved!");
});