const mqttService = require('../services/mqttService');

const subscribeToTopic = (req, res) => {
    const { topic } = req.body;
    mqttService.subscribe(topic);
    res.status(200).send(`Subscribed to topic ${topic}`);
};

const publishMessage = (req, res) => {
    const { topic, message } = req.body;
    mqttService.publish(topic, message);
    res.status(200).send(`Message published to topic ${topic}`);
};

module.exports = {
    subscribeToTopic,
    publishMessage,
};