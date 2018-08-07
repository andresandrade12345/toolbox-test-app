const server = require('./app');
const logger = require('./lib/logger');
const config = require('./config');

server.listen(config.port, () => logger.info(`App listening on ${config.port}`));