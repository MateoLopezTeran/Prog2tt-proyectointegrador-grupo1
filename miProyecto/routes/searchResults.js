var express = require('express');
var router = express.Router();

const searchResultController = require('../controllers/searchResultController');

/* GET searchResults page */
router.get('/', searchResultController.searchResults)

module.exports = router;