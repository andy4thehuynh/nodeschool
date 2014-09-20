var module = require('./6-module.js');
var dir = process.argv[2];
var extFilter = process.argv[3];

module(dir, extFilter, function(err, data) {
  if (err) console.log("We got a problem: ", err);

  data.forEach(function(item){
    console.log(item);
  });
});
