const { celebrate } = require("celebrate");
const { imageSchema } = require("../schemas");
const healthController = require("../controllers/healthController");
const imageController = require("../controllers/imageController");
const logger = require("../common/logger");

module.exports = (app) => {
    app.get("/", healthController.healthCheck);


    app.post("/upload", celebrate(imageSchema.upload), imageController.uploadImage);
}