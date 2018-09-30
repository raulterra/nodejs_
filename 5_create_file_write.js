/*
	This function write content in a file, overwriteing the content. 
	If a file not exits, a new file will be created
*/
var fs = require('fs');

fs.writeFile('demoFile.txt','New Content!', function(err) {
	if(err) throw err;
	console.log("Saved!")
});