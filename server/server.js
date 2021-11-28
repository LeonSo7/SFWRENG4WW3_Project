"use strict";
const express = require('express');
const userAPI = require('./routes/user_router');
const businessAPI = require('./routes/business_router');
const reviewAPI = require('./routes/review_router');
const db = require('./common/database');

require('http');
require('dotenv').config();


const hostname = process.env.HOSTNAME;
const port = process.env.HTTP_PORT;

const app = express();

app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// User apis
app.use('/user', userAPI);
app.use('/business', businessAPI);
app.use('/review', reviewAPI);

app.listen(port, hostname, function () {
	console.log('HTTP Listening on ' + port);
});
