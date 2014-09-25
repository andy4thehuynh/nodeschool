var http = require('http');
var url = process.argv[2];
var dataString = "";

var testURL = "http://www.google.com"

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    dataString = dataString.concat(data);
  });
  response.on('end', function() {
    console.log(dataString.length);
    console.log(dataString);
  });
}).on('error', console.error);


// NODESCHOOL SOLUTION:
// var http = require('http');
// var bl = require('bl');
// 
// http.get(process.argv[2], function(response) {
//   response.pipe(bl(function(err, data) {
//     if (err)
//       return console.error(data);
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
// });
