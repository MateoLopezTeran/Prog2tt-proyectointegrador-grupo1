var express = require('express');
const headerLogueadoController = require('../controllers/headerLogueadoController');
var router = express.Router();

/* GET home page */
router.get('/', headerLogueadoController.prueba3);

module.exports = router;