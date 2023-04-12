var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id', productController.products)
router.get('/productsAdd', productController.productsAdd)

module.exports = router;