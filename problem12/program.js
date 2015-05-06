var http = require('http')
var fs = require('fs')
var map = require('through2-map');

var uppercase = map(function(chunk) {
	return chunk.toString().toUpperCase()
})

var server = http.createServer(function callback (request, response) {
		if (request.method == 'POST') {
			request.pipe(uppercase).pipe(response)
		}	
	});
server.listen(process.argv[2])


