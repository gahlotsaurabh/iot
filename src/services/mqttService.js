const mqttClient = require('../config/mqtt');

const subscribe = (topic) => {
    mqttClient.subscribe(topic, (err) => {
        if (err) {
            console.error(`Failed to subscribe to topic ${topic}:`, err);
        } else {
            console.log(`Subscribed to topic ${topic}`);
        }
    });
};

const publish = (topic, message) => {
    mqttClient.publish(topic, message, (err) => {
        if (err) {
            console.error(`Failed to publish message to topic ${topic}:`, err);
        } else {
            console.log(`Message published to topic ${topic}`);
        }
    });
};

mqttClient.on('message', (topic, message) => {
    console.log(`Received message from topic ${topic}:`, message.toString());
    // Handle the message
});

module.exports = {
    subscribe,
    publish,
};