/*
	Delete a file
*/
var fs = require('fs');

fs.unlink('file_renamed.txt', function(err) {
	if(err) throw err;
	console.log("Deleted!");
});