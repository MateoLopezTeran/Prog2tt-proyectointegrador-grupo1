var express = require('express');
const indexController = require('../controllers/indexController');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.prueba);

module.exports = router;
