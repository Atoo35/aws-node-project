const fetch = require('node-fetch');
const AWS = require('aws-sdk');
const logger = require('../common/logger');
const { INVALID_FILE_TYPE, FILE_TOO_BIG } = require('../common/errors');

const s3 = new AWS.S3();

const uploadImage = async (imageUrl) => {
    logger.info(`Uploading image from URL: ${imageUrl}`);
    const response = await fetch(imageUrl);
    // make sure the file is an image
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image/')) {
        throw new INVALID_FILE_TYPE();
    }

    // Check if the image is more than 1MB
    if (response.headers.get('content-length') > 1_048_576) {
        throw new FILE_TOO_BIG();
    }
    const buffer = await response.buffer();
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `image-${Date.now()}.jpg`,
        Body: buffer,
    };
    const result = await s3.upload(params).promise();

    return result.Location;
}

module.exports = {
    uploadImage,
};