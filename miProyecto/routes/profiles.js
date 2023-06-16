var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/id/:id', profileController.usuario);

// Para obtener un formulario
router.get('/register', profileController.register);
// Para crear un usuario en la tabla y redirigirlo al login
router.post('/register', profileController.store);

// Para obtener un formulario para mostrar el login
router.get('/login', profileController.login);
// para loguear al usuario y redirigirlo al index
router.post('/login', profileController.loginPost);

router.get('/logout', profileController.cerrarSesion);

router.get('/profilesEdit/:id', profileController.profilesEdit);
router.post('/profilesEdit/:id', profileController.profilesEditPost);


module.exports = router;