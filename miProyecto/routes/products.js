var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.products)

module.exports = router;