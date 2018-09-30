/*
	The 'open' function open a file. If this file is not exist, a new file will be created
*/
var fs = require('fs');

fs.open('file.txt', 'w', function(err) {
	if(err) throw err;
	console.log('saved!');
});