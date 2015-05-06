var fs = require('fs')

var text = fs.readFileSync(process.argv[2]).toString();
var nrOfLines = text.split('\n').length-1;
console.log(nrOfLines);