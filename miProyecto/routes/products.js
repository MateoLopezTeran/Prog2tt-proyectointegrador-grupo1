var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.products)
router.get('/productsAdd', productController.productsAdd)

module.exports = router;