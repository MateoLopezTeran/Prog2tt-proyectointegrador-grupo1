var express = require('express');
const registerController = require('../controllers/registerController');
var router = express.Router();

/* GET register page */
router.get('/', registerController.prueba4)

module.exports = router;