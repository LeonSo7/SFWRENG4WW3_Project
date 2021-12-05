"use strict";

const express = require('express');
const api = express.Router();

const multer = require("multer");
const upload = multer({dest: './uploads'});
const { uploadFile, getFileStream } = require('../common/s3');

const fs = require('fs');
const util = require('util');

const unlinkFile = util.promisify(fs.unlink);

api.get('/images/:key', (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
})

api.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file;
  // Use the path and filename for the s3 bucket. Also store the filename in the db so we can easily get it later
  
  // Wait for upload to be successful 
  const result = await uploadFile(file);

  // Delete the file after it is uploaded to S3
  await unlinkFile(file.path);

  res.send(JSON.stringify({imagePath: `/images/${result.Key}`}));
})

module.exports = api;