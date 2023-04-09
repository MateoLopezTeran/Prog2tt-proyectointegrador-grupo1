var express = require('express');
var router = express.Router();

const headerLogueadoController = require('../controllers/headerLogueadoController');
const profileController = require('../controllers/profileController');

/* GET headerLogueado page */
router.get('/', headerLogueadoController.headerLogueado);
router.get('/', profileController.usuario)

module.exports = router;