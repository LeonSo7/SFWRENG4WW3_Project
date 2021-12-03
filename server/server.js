"use strict";

const express = require('express');
const userAPI = require('./routes/user_router');
const businessAPI = require('./routes/business_router');
const reviewAPI = require('./routes/review_router');
const db = require('./common/database');
const cors = require('cors');
const bodyParser = require('body-parser')

require('http');
require('dotenv').config();

const hostname = process.env.HOSTNAME;
const port = process.env.HTTP_PORT;

const app = express();

// Image Storage
const multer = require("multer");
const upload = multer({dest: './uploads'});
const { uploadFile, getFileStream } = require('./s3');

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

app.get('/images/:key', (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)
  // Use the path and filename for the s3 bucket. Also store the filename in the db so we can easily get it later
  
  // Wait for upload to be successful 
  const result = await uploadFile(file)

  // Delete the file after it is uploaded to S3
  await unlinkFile(file.path)
  console.log(result)
  const description = req.body.description

  res.send({imagePath: `/images/${result.Key}`})
})

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

app.listen(port, hostname, function () {
	console.log('HTTP Listening on ' + port);
});


