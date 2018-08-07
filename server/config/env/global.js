const config = {};

config.port = +process.env.PORT || 8080;

config.apiVersion = 'v1';

config.isTest = false;

module.exports = config;