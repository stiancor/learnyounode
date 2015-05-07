var http = require('http')
var url = require('url')

var createIsoObj = function(u) {
	var d = new Date(u.query.iso);
	return {
		hour: d.getHours(),
      	minute: d.getMinutes(),
     	second: d.getSeconds()	
  	}
}

var createUnixTimeObj = function(u) {
	var d = new Date(u.query.iso);
	return {unixtime: d.getTime()}	
}

var routes = function(u) {
	var res = '';
	if('/api/parsetime' === u.pathname) {
		return createIsoObj(u)
	} else if('/api/unixtime' === u.pathname) {
		return createUnixTimeObj(u)	
	}
}

var server = http.createServer(function callback (request, response) {
		var res = routes(url.parse(request.url, true))
		response.writeHead(200, { 'Content-Type': 'application/json' })		
		response.end(JSON.stringify(res))
	});
server.listen(process.argv[2])