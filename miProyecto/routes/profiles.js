var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.usuario);
router.get('/login', profileController.login);
router.get('/profilesEdit', profileController.profilesEdit);

// Para obtener un formulario
router.get('/register', profileController.regitser);

// Para crear un usuario en la tabla y redirigirlo al login
router.post('/register', profileController.store)

// Para obtener un formulario para mostrar el login
router.get('/login', profileController.login)

// para loguear al usuario y redirigirlo al index
router.post('/login', profileController.loginPost)

module.exports = router;