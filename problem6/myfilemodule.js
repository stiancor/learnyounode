var fs = require('fs')

function endsWith(str, suffix) {
   	return str.indexOf(suffix, str.length - suffix.length) !== -1 && suffix.length < str.length;
}

module.exports = function(directory, filter, callback) {
	fs.readdir(directory, function doneReading(err, list) {
		
      	var files = []
		if (err)
          return callback(err)
		list.forEach(function (file) {
			if (endsWith(file.toString(), filter)) {
				files.push(file.toString());
			}	
		});
		return callback(null, files);
	});	
}