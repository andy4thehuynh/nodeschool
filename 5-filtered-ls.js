var fs = require('fs');
var path = require('path');

var dir_name = process.argv[2];
var ext_name = '.' + process.argv[3];

fs.readdir(dir_name, function(err, list) {
  if (err) throw err;

  list.forEach(function(filename) {
    var ext = path.extname(filename);
    if (ext == ext_name) {
      console.log(filename);
    }
  });
});


// NODESCHOOL SOLUTION:
// var fs = require('fs');
// var path = require('path');
// 
// fs.readdir(process.argv[2], function(err, list) {
//   list.forEach(function(file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file);
//   })
// });
