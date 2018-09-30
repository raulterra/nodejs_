/*
	Renaame a existent file
*/
var fs = require('fs');

fs.rename('file.txt','file_renamed.txt', function(err) {
	if(err) throw err;
	console.log("File renamed!");
})