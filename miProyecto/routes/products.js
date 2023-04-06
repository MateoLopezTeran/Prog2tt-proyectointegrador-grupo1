var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get('/', productController.prueba1);

module.exports = router;