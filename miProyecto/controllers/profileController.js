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
    
    let userStore = {
      contrasenna: info.contrasenna,
      email: info.email,
      foto_perfil: info.fotoPerfil,
      fecha_nacimiento: info.fechaNacimiento,
      d_n_i: info.numeroDocumento, 
      //password: bcrypt.hashSync(info.password, 10),
      remember_token: ""
  }
    if (info.contrasenna < 3 || info.email == "") {
      return res.redirect('/profiles/register')}
    else {
      user.create(userStore)
      .then(function (result) {
        return res.redirect('/profiles/profilesEdit');
      })
      .catch(function (error) {
        console.log("error = " + error);
        let mensaje = "El mail se encuentra en uso";
        return res.redirect('/profiles/register')
      });}
    
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
    let emailBuscado = req.body.email;
    let pass = req.body.password;

    let filtrado = {
      where: [{email: emailBuscado}]
    }
    return res.redirect('/')
  },

  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      usuario: datamodule.usuario
    })
  }
}

module.exports = profileController