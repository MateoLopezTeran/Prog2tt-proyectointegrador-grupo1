const { log } = require('console');
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
  register: function (req, res) {
    return res.render('register')
  },
  //este es el post
  store: function (req, res) {
    let info = req.body;
    
    if (info.contrasenna < 3 || info.email == '') {
      return res.redirect('/profiles/register')}
    else {
      return res.redirect('/')}
    

    let userSave = {
      email: info.email,
      contrasenna: info.contrasenna
    }
    // en este create hay q sgregarle q la clave se envia encriptada y esta comentado para q no cambie todo el tiempo la sql

    /*  
    user.create(userSave)
    .then(function (result) {
      let mensaje = ""
      return res.redirect('/profiles/login');
    })
    .catch(function (error) {
      console.log(error);
      let mensaje = "El mail se encuentra en uso";
      return res.redirect('/profiles/register')
    });
*/
  },    

  login: function (req, res) {
    let info = req.body;
    let criterio = {
      where: [
        { email: info.email },
      ],
    }
    user.findOne(criterio)
        .then(function (result) {
          if (result == null) {
            return res.redirect('/profiles/login')
          } else {
            // aca va la comparacion del hasheo de la contraseña y el redirect tmb es provisorio
            return res.redirect('/')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  loginPost: function (req, res) {
    return res.redirect('/')
  },

  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      usuario: datamodule.usuario
    })
  }
}

module.exports = profileController