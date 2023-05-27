const datamodule = require('../data/datamodule')
const db = require("../database/models");

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
    movie.findAll({
        where: [
          { email: info.email },
        ],
      })
      .then(function (result) {
        if (result == null) {
          // hacer el create --> todavia no puedo agarrar bien el form xq se mezcla con otro form y no se cual es cual
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    db.Usuario.create(userSave)
    .then(function (result) {
      console.log(result) // no funciona
      return res.redirect('profiles/login')
    })
    .catch(function (error) {
      console.log(error)
    })
  } ,
  loginPost: function (req, res) {
    return res.redirect('/profiles/all')
  }
}

module.exports = profileController