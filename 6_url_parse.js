/*
	Operations with the 'parse' function of 'url' module
*/
var url = require('url');
var addr = 'http://localhost:8080/index.html?day=30&month=09&year=2018';
var q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var query = q.query;
console.log(query.day + " de " + query.month + " de " + query.year);