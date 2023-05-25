var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.usuario);
router.get('/register', profileController.regitser);
router.get('/login', profileController.login);
router.get('/profilesEdit', profileController.profilesEdit);

// Para obtener un formulario
router.get('/register', profileController.create);

// Para crear un usuario en la tabla y redirigirlo al login
router.post('/register', userController.store)

module.exports = router;