var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var indexhtml = "index.html";

app.get('/', function(request, response) {
  response.send(fs.readFileSync(indexhtml, 'utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
