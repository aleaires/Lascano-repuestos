const redis = require('redis');
const redisClient = redis.createClient();

client.on('error', (err) => {
    console.error('Error conectando a Redis:', err);
  });
  
  client.on('connect', () => {
    console.log('Conectado a Redis');
  });

module.exports = redisClient;
