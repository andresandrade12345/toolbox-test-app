const nodeEnv = process.env.NODE_ENV || 'development';
const target = './env/' + nodeEnv;

module.exports = require(target);