const mqtt = require('mqtt');

const MQTT_URL = process.env.MQTT_URL || 'mqtt://127.0.0.1:1883';
const MQTT_USERNAME = process.env.MQTT_USERNAME || '';
const MQTT_PASSWORD = process.env.MQTT_PASSWORD || '';

const options = {
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
    reconnectPeriod: 3000,
};

const client = mqtt.connect(MQTT_URL, options);

client.on('connect', () => {
    console.log(`Connected to MQTT broker at ${MQTT_URL}`);
});

client.on('reconnect', () => {
    console.log('Reconnecting to MQTT broker...');
});

client.on('close', () => {
    console.log('MQTT connection closed');
});

client.on('offline', () => {
    console.log('MQTT client is offline');
});

client.on('error', (err) => {
    console.error('MQTT connection error:', err.message);
});


module.exports = client;