var fs = require('fs');

var fileRead = fs.readFileSync(process.argv[2]).toString();
var arr = fileRead.split('\n');

console.log(arr.length - 1);



// NODESCHOOL RESULT:
// var fs = require('fs');
// 
// var contents = fs.readFileSync(proess.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);
