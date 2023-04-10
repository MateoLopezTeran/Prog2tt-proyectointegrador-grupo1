var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.usuario);
router.get('/profiles/register', profileController.regitser);
router.get('/login', profileController.login);

module.exports = router;