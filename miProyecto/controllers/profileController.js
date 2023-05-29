const datamodule = require('../data/datamodule')
const db = require("../database/models");
const user = db.Usuario;

const profileController = {
  usuario: function (req, res) {
    res.render('profiles', {  
    usuario: datamodule.usuario,
    data: datamodule.productos
    })
  },
  //este es el get
  regitser: function (req, res) {
    return res.render('register')
  },
  //este es el post
  store: function (req, res) {
    let info = req.body;
    
    let userSave = {
      email: info.email,
      contrasenna: info.contrasenna
    }
    user.findAll({
      where: [
        { email: info.email },
      ],
    })
    .then(function (result) {
      mensaje = "";
      if (result == null) {

        user.create(userSave)
        .then(function (result) {
          return res.redirect('/profiles/login');
        })
        .catch(function (error) {
          console.log(error);
        });

      }else {
        mensaje = "El mail se encuentra en uso";
        return res.redirect('/profiles/register')
      }

    })
    .catch(function (error) {
      console.log(error);
    });
  },    

  login: function (req, res) {
    res.render('login')
  },
  loginPost: function (req, res) {
    return res.redirect('/profiles')
  },

  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      usuario: datamodule.usuario
    })
  }
}

module.exports = profileController