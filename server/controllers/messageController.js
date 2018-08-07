const { processValidationErrors } = require('../lib/apiUtils/validationErrorFormatter');
const { messageService } = require('../services');

const processMessage = (req, res, next) => {
    const { message } = req.body;

    messageService.getMyMessage({message})
        .then(message => res.status(200).json({ message }))
        .catch(next)
};

module.exports = {
    processMessage: [
        processValidationErrors,
        processMessage,
    ]
};