var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET index page */
router.get('/', indexController.index);
router.get("/searchResults", indexController.searchResults)


module.exports = router; 