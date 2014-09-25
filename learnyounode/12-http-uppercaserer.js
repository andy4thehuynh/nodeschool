var http = require('http');

var port = process.argv[2];
var testPort = '9393';

http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.on('data', function(chunk) {
      response.write(chunk.toString().toUpperCase());
    });

    request.on('end', response.end);
  }
}).listen(port);



// NODESCHOOL SOLUTION:
// var http = require('http');
// var map = require('through2-map');
// 
// var server = http.createServer(function(req, res) {
//   if (req.method != 'POST')
//     return res.end('Send me a POST\n');
// 
//   req.pipe(map(function(chunk) {
//     return chunk.toString().toUpperCase();
//   })).pipe(res);
// });
// 
// server.listen(Number(process.argv[2]));
