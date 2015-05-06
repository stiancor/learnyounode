var fs = require('fs')

var dir = process.argv[2];
var filter = process.argv[3];

var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1 && suffix.length < str.length;
}

var logFilteredList = function(list) {
	list.forEach(function(file){
        console.log(file)
    });
}

fs.readdir(dir,function callback (err, list) {  
	if(err)
		console.log(err);
	var files = [];
	list.forEach(function (file) {
        if (endsWith(file.toString(), filter)) {
            files.push(file.toString());
        }       
    });
	logFilteredList(files);
})


 