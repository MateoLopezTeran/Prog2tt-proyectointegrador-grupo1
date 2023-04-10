var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET index page */
router.get('/', indexController.index);
router.get('/headerLogueado', indexController.headerLogueado);
router.get('/searchresults', indexController.searchResults);

module.exports = router; 