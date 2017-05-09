var https = require ('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
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
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML)
