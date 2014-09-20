var fs = require('fs');

var file_read = fs.readFileSync(process.argv[2]).toString();
var arr = file_read.split('\n');

console.log(arr.length - 1);



// NODESCHOOL RESULT:
// var fs = require('fs');
// 
// var contents = fs.readFileSync(proess.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);
