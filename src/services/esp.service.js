const Esp = require('../models/esp.model');

const createEsp = async (espBody) => {
    return Esp.create(espBody);
};

const queryEsps = async (filter, options) => {
    const esps = await Esp.paginate(filter, options);
    return esps;
};

const getEspById = async (id) => {
    return Esp.findById(id);
};

const updateEspById = async (espId, updateBody) => {
    const esp = await getEspById(espId);
    if (!esp) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ESP not found');
    }
    Object.assign(esp, updateBody);
    await esp.save();
    return esp;
};

const deleteEspById = async (espId) => {
    const esp = await getEspById(espId);
    if (!esp) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ESP not found');
    }
    await esp.remove();
    return esp;
};

module.exports = {
    createEsp,
    queryEsps,
    getEspById,
    updateEspById,
    deleteEspById,
};