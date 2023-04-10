var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET index page */
router.get('/', indexController.index);

module.exports = router; 