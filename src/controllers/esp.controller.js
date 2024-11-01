const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { espService } = require('../services');
const { publish } = require('../services/mqttService');
const pick = require('../utils/pick');

const createEsp = catchAsync(async (req, res) => {
    const esp = await espService.createEsp(req.body);
    res.status(httpStatus.CREATED).send(esp);
});

const getEsps = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'status']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await espService.queryEsps(filter, options);
    res.send(result);
});

const getEsp = catchAsync(async (req, res) => {
    const esp = await espService.getEspById(req.params.espId);
    if (!esp) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ESP not found');
    }
    res.send(esp);
});

const updateEsp = catchAsync(async (req, res) => {
    publish(req.body.uniqueId, req.body.status);
    const esp = await espService.updateEspById(req.params.espId, req.body);
    res.send(esp);
});

const deleteEsp = catchAsync(async (req, res) => {
    await espService.deleteEspById(req.params.espId);
    res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    createEsp,
    getEsps,
    getEsp,
    updateEsp,
    deleteEsp,
};