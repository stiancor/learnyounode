var http = require('http')
var bl = require('bl')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var arr = []
var count = 0

var getContent = function(url, index) {
	http.get(url, function callback(response){
		response.pipe(bl(function (err, data) {
			if(err)
				console.log(err);
			arr[index] = data.toString();
			count++

			if(count== 3)
				printResponse()
		}))
	})
} 

var execute = function(url, index, callback) {
	callback(url, index)
}

execute(url1, 0, getContent)
execute(url2, 1, getContent)
execute(url3, 2, getContent)

var printResponse = function() {
	arr.forEach(function(entry) {
	console.log(entry);
});	
}

