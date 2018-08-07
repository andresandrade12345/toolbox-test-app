/**
 * Returns the message passed as a parameter
 * @param {string} message the message
 * @returns {Promise<string>} A Promise with the message
 */
const getMyMessage = ({ message }) => {
    return new Promise((resolve, reject) => {
        if (!message) {
            reject(new Error('Message is empty'));
        } else {
            resolve(message);
        }
    });
};

module.exports = {
    getMyMessage,
};