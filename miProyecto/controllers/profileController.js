const mercadoLiebre = require('../data/mercadoLiebre')

const profileController = {
  usuario: function (req, res) {
    res.render('profiles', {  
    email: mercadoLiebre.usuario.email,
    nombreUsuario: mercadoLiebre.usuario.nombreUsuario,
    contraseña: mercadoLiebre.usuario.contraseña,
    fechaNacimiento: mercadoLiebre.usuario.fechaNacimiento,
    numeroDocumento: mercadoLiebre.usuario.numeroDocumento,
    fotoPerfil: mercadoLiebre.usuario.fotoPerfil
    })
  },
  
  regitser: function (req, res) {
    res.render('register')
  },

  login: function (req, res) {
    res.render('login')
  }
}

module.exports = profileController