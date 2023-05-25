const datamodule = require('../data/datamodule')

const profileController = {
  usuario: function (req, res) {
    res.render('profiles', {  
    usuario: datamodule.usuario,
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
      usuario: datamodule.usuario
    })
  },
  store: function (req, res) {
    return res.redirect('/profiles/login')
  }
}

module.exports = profileController