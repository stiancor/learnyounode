var numbers = process.argv.slice(2);
var total = 0;

numbers.forEach(function(entry) {
	if(!isNaN(entry)) {
		total += parseInt(entry);
	}
}) 

console.log(total);