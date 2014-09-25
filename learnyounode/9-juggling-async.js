var http = require('http');
var fs = require('fs');

var url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    queue = 0,
    responses = {};

var testURL1 = "http://www.google.com"
var testURL2 = "http://www.reddit.com"
var testURL3 = "http://www.github.com"

var complete = function(index, data) {
  queue += 1;
  responses[index] = data;

  if (queue === 3) {
    console.log(responses['0']);
    console.log(responses['1']);
    console.log(responses['2']);
  }
};

var req = function (index, url, complete) {
  http.get(url, function(response) {
    var res = '';
    response.setEncoding('utf8');

    response.on('data', function(data) {
      res += data;
    });

    response.on('end', function() {
      complete(index, res.replace(/\n/g, ''));
    });
  });
};

req('0', url1, complete);
req('1', url2, complete);
req('2', url3, complete);



// NODESCHOOL SOLUTION:  (doesn't work..)
// var http = require('http');
// var bl = require('bl');
// var results = [];
// var count = 0;
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i]);
// }
//
// function httpGet(index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(data);
//
//       results[index] = data.toString();
//       count++;
//
//       if (count == 3)
//         printResults();
//     }));
//   }
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i);
//
