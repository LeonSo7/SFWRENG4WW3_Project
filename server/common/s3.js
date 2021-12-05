"use strict";

require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucketName = process.env.S3_BUCKET_NAME;
const bucketRegion = process.env.S3_BUCKET_REGION;
const bucketAccessKey = process.env.AWS_ACCESS_KEY_ID;
const bucketSecretKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
    bucketRegion,
    bucketAccessKey,
    bucketSecretKey
});

// Upload file to S3
exports.uploadFile = function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    };

    const result = s3.upload(uploadParams).promise();

    return result;

};

// Get file from S3
exports.getFileStream = function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    };

    return s3.getObject(downloadParams).createReadStream();
};