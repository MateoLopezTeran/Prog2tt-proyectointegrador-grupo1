var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
const indexController = require('../controllers/indexController');

router.get('/detail/:id', productController.products);

router.get('/productsAdd', productController.productsAdd);
router.post('/productsAdd', productController.productsAddpost);
//router.get('/searchResults', indexController.searchResults)

module.exports = router;