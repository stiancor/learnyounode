var fs = require('fs')

var countNrOfLines = function(text) {
	return text.split('\n').length-1;
}

fs.readFile(process.argv[2], 'utf8', function callback (err, data) { 
	if(err)
		console.log(err);
	console.log(countNrOfLines(data.toString()));
})