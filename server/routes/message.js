const router = require('express').Router();
const { check } = require('express-validator/check');

const messageController = require('../controllers/messageController');

router.post('/', check('message', 'is required').exists({ checkFalsy: true }), messageController.processMessage);

module.exports = router;
