require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const s3 = new S3({
    S3_BUCKET_REGION,
    S3_BUCKET_ACCESS_KEY,
    S3_BUCKET_SECRET_KEY
})

// Upload file to S3
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: S3_BUCKET_NAME,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile

// Get file from S3
function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: S3_BUCKET_NAME
    }

    return s3.getObject(downloadParams).createReadStream()
}

exports.getFileStream = getFileStream