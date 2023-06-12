var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id', productController.products);
router.post('/detail/:id', productController.comentsAdd);

router.get('/productsAdd', productController.productsAdd);
router.post('/productsAdd', productController.productsAddpost);

module.exports = router;