var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.usuario);

// Para obtener un formulario
router.get('/register', profileController.register);
// Para crear un usuario en la tabla y redirigirlo al login
router.post('/register', profileController.store);

// Para obtener un formulario para mostrar el login
router.get('/login', profileController.login);
// para loguear al usuario y redirigirlo al index
router.post('/login', profileController.loginPost);

router.get('/logout', profileController.cerrarSesion);

router.get('/profilesEdit', profileController.profilesEdit);

module.exports = router;