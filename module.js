module.exports = function(dir, ext, callback) {
  var fs = require('fs'),
      path = require('path');
      ext = '.' + ext;

  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }

    var data = [];
    list.forEach(function(file) {
      var file_ext = path.extname(file);
      if (ext === file_ext) {
        data.push(file);
      }
    });
    callback(null, data);
  });
};
