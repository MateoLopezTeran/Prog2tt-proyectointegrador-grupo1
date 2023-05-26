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
    let info = req.body;
    
    let userSave = {
      email: info.email,
      contrasenna: info.contrasenna
    }
    db.Usuario.create(userSave)
    .then(function (result) {
      return res.redirect('users/login')
    })
    .catch(function (error) {
      console.log(error)
    })
    return res.redirect('/profiles/login')
  },
  loginPost: function (req, res) {
    return res.redirect('/profiles/all')
  }
}

module.exports = profileController