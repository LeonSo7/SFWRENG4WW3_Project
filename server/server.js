const http = require('http');
const express = require("express");

const hostname = '127.0.0.1';
const port = 3000;

app = express();

app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.listen(port, hostname, function () {
	console.log("HTTP Listening on " + port);
});
