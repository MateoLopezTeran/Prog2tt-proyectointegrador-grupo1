var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.usuario);
router.get('/register', profileController.regitser);
router.get('/login', profileController.login);
router.get('/profilesEdit', profileController.profilesEdit);

module.exports = router;