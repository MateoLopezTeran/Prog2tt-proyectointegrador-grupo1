var express = require('express');
var router = express.Router();

const profileEditController = require('../controllers/profileEditController');

/* GET profilesEdit page */
router.get('/', profileEditController.profilesEdit)

module.exports = router;