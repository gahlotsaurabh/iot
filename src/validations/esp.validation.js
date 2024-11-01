
const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEsp = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        uniqueId: Joi.string().required(),
        status: Joi.string().valid('opened', 'closed').required(),
    }),
};

const getEsps = {
    query: Joi.object().keys({
        name: Joi.string(),
        status: Joi.string().valid('opened', 'closed'),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getEsp = {
    params: Joi.object().keys({
        espId: Joi.string().custom(objectId),
    }),
};

const updateEsp = {
    params: Joi.object().keys({
        espId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            uniqueId: Joi.string(),
            status: Joi.string().valid('opened', 'closed'),
        })
        .min(1),
};

const deleteEsp = {
    params: Joi.object().keys({
        espId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createEsp,
    getEsps,
    getEsp,
    updateEsp,
    deleteEsp,
};