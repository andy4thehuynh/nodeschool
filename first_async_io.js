var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data) {
  // if no error
  if (err !== true) {
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
  }
});


// NODESCHOOL SOLUTION:
// var fs = require('fs');
// var file = process.argv[2];
// 
// fs.readFile(file, function(err, content) {
//   var lines = contents.toString().split('\n').length - 1;
//   console.log(lines);
// });
