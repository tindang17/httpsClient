var https = require ('https');

function getAndPrintHTMLChunks () {
  var chunks = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(print) {
    print.setEncoding('utf8');
    print.on('data', function(data) {
    chunks += data;
    });
    print.on('end', function() {
      console.log(chunks);
    });
  });
}

getAndPrintHTMLChunks()