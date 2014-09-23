var net = require('net');
var port = process.argv[2];

function padding(string) {
  if (string.length === 1) {
    return '0' + string;
  } else {
    return string;
  }
}

function currentTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  return [year + '-' + padding(month.toString()) + '-' + padding(day) + ' ' + 
    padding(hour.toString()) + ':' + padding(minute)].toString() + '\n'; 
}

var server = net.createServer(function(socket) {
  socket.write(currentTime());
  socket.end();
});

server.listen(port);



// NODESCHOOL SOLUTION:
// var net = require('net');
// 
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i;
// }
// 
// function now() {
//   var d = new Date();
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }
// 
// var server = net.createServer(function(socket) {
//   socket.end(now() + '\n');
// });
// 
// server.listen(Number(process.argv[2]));
