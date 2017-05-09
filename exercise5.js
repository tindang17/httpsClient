var https = require('https');

module.exports = function getHTML (options, callback) {
  var chunks = '';

  https.get(options, function(print) {
    print.setEncoding('utf8');
    print.on('data', function(data) {
    chunks += data;
    });
    print.on('end', function() {
      callback(chunks);
    });
  });
};