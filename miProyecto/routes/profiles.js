var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.profiles);

module.exports = router;