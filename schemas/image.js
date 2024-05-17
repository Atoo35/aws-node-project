const { Joi } = require('celebrate');

const upload = {
    body: Joi.object({
        url: Joi.string().uri({
            scheme: [
                'http',
                'https'
            ]
        }).required(),
    }).required(),
};

module.exports = {
    upload,
};