const express = require('express');
const router = express.Router();
router.use('/api', require('./api.route'));
router.use('/checkip', require('./checkip'));
module.exports = router;