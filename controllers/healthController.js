const { StatusCodes: { OK } } = require("http-status-codes");
const logger = require("../common/logger");

const healthCheck = (req, res, next) => {
    logger.info("Got request in healthCheck");
    return res.status(OK).json({
        message: "Hello from health!",
    });
}

module.exports = {
    healthCheck,
};