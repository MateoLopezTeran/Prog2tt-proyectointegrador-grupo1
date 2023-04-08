var express = require('express');
var router = express.Router();

const headerLogueadoController = require('../controllers/headerLogueadoController');

/* GET headerLogueado page */
router.get('/', headerLogueadoController.headerLogueado);

module.exports = router;