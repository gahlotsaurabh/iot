const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const espValidation = require('../../validations/esp.validation.js');
const espController = require('../../controllers/esp.controller');

const router = express.Router();

router
    .route('/')
    .post(validate(espValidation.createEsp), espController.createEsp)
    .get(auth('getEsps'), validate(espValidation.getEsps), espController.getEsps);

router
    .route('/:espId')
    .get(auth('getEsps'), validate(espValidation.getEsp), espController.getEsp)
    .patch(validate(espValidation.updateEsp), espController.updateEsp)
    .delete(auth('manageEsps'), validate(espValidation.deleteEsp), espController.deleteEsp);

module.exports = router;