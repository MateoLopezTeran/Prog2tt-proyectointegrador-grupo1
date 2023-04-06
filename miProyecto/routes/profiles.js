var express = require('express');
const profileController = require('../controllers/profileController');
var router = express.Router();

router.get('/', profileController.prueba2);

module.exports = router;