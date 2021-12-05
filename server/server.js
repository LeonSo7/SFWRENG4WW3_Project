"use strict";

const express = require('express');
const userAPI = require('./routes/user_router');
const businessAPI = require('./routes/business_router');
const imagesAPI = require('./routes/images_router');
const reviewAPI = require('./routes/review_router');
const cors = require('cors');
const bodyParser = require('body-parser')

require('http');
require('dotenv').config();
require('./common/database');

const hostname = process.env.HOSTNAME;
const port = process.env.HTTP_PORT;

const app = express();

// For parsing application/json
app.use(bodyParser.json());
// Cross-origin resource sharing
app.use(cors());

// Default route
app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Scoops server');
});

// Routes
app.use('/user', userAPI);
app.use('/business', businessAPI);
app.use('/review', reviewAPI);
app.use('/images', imagesAPI);

app.listen(port, hostname, function () {
	console.log('HTTP Listening on ' + port);
});