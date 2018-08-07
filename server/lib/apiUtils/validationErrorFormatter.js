const createError = require('http-errors');
const { validationResult } = require('express-validator/check');

/**
 * Formats errors from express-validator
 * @param {string} msg validation error message
 * @param {string} param validation param
 * @returns {string} a string with format [param] msg
 */
const errorFormatter = ({ msg, param }) => {
    return `[${param}] ${msg}`;
};

/**
 * Validation error middleware
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const processValidationErrors = (req, res, next) => {
    const result = validationResult(req).formatWith(errorFormatter);

    if (!result.isEmpty()) {
        return next(createError(400, result.array().join(', ')));
    }

    next();
};

module.exports = {
    errorFormatter,
    processValidationErrors,
};