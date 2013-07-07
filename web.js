var express = require('express');

var app = express.createServer(express.logger());
var fileContents = "";

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  // console.log(data);
  fileContents = data;
});

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
  response.sent(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});