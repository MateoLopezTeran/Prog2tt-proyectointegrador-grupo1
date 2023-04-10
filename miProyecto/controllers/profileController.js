const datamodule = require('../data/datamodule')

const profileController = {
  usuario: function (req, res) {
    res.render('profiles', {  
    email: datamodule.usuario.email,
    nombreUsuario: datamodule.usuario.nombreUsuario,
    contraseña: datamodule.usuario.contraseña,
    fechaNacimiento: datamodule.usuario.fechaNacimiento,
    numeroDocumento: datamodule.usuario.numeroDocumento,
    fotoPerfil: datamodule.usuario.fotoPerfil,
    data: datamodule.productos
    })
  },
  
  regitser: function (req, res) {
    res.render('register')
  },

  login: function (req, res) {
    res.render('login')
  },

  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      nombreUsuario: datamodule.usuario.nombreUsuario
    })
  },
}

module.exports = profileController