const { createLogger, format, transports } = require('winston');

/**
 * Creates logger instance
 */
const logger = (createLogger)({
    level: 'info',
    format: format.combine(
        format.colorize({ all: true }),
        format.printf(info => `${info.level}: ${info.message}`),
    ),
    transports: [
        new transports.Console()
    ],
});

module.exports = logger;