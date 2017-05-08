var https = require ('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(print) {
    print.setEncoding('utf8');
    print.on('data', function(data) {
      console.log(data);
    });
    print.on('end', function() {
      console.log('Printed in chunks. ');
    });
  });
}

getAndPrintHTMLChunks()