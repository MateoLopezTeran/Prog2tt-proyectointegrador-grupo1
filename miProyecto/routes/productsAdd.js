var express = require('express');
var router = express.Router();

const productAddController = require('../controllers/productAddController');

/* GET productsAdd page */
router.get('/', productAddController.productsAdd)

module.exports = router;