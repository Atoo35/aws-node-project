const { StatusCodes: { OK } } = require('http-status-codes');
const imageService = require('../services/imageService');

const uploadImage = async (req, res, next) => {
    try {
        const { url } = req.body;
        const uploadedUrl = await imageService.uploadImage(url);
        return res.status(OK).json({
            message: "Image uploaded successfully!",
            url: uploadedUrl,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    uploadImage,
};