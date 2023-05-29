const datamodule = require('../data/datamodule')
const db = require("../database/models");
const bcrypt = require('bcryptjs');
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
      let mensaje = "";
      if (result == null) {
        user.create(userSave)
        .then(function (result) {
          return res.redirect('/profiles/login');
        })
        .catch(function (error) {
          console.log(error);
        });

      }
      else {
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
    let emailBuscado = req.body.email;
    let pass = req.body.contrasenna;
    let filtrado = {
      where: [{email: emailBuscado}]
    };
    user.findOne(filtrado)
    .then((result) => {
      if (result != null) {
        let claveCorrecta = bcrypt.compareSync(pass, result.pass)
        if (claveCorrecta) {
          return res.redirect('/profile/login/index');

        } else {
          return res.redirect('/profile/login');
      }
    } else {
      return res.send('No Existe el mail')
        }
      }).catch(function(err) {
        console.log(err);
      })
  },
  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      usuario: datamodule.usuario
    })
  }
}

module.exports = profileController