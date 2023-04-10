var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/:id', productController.products)
router.get('/productsAdd/:id', productController.productsAdd)

module.exports = router;