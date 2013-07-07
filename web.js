var express = require('express');

var app = express.createServer(express.logger());
var fileContents = "";
var fs = require('fs');
var infile = "index.html"

fs.readFile(infile, function (err, data) {
  if (err) throw err;
  // console.log(data);
  fileContents = data;
});

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
  response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});