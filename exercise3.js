var https = require ('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTMLChunks (options) {
  var chunks = '';

  https.get(options, function(print) {
    print.setEncoding('utf8');
    print.on('data', function(data) {
    chunks += data;
    });
    print.on('end', function() {
      console.log(chunks);
    });
  });
}

getAndPrintHTMLChunks(requestOptions)