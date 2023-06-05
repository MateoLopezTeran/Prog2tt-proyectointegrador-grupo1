const datamodule = require('../data/datamodule');
const db = require("../database/models");
const user = db.Usuario;
const bcrypt = require('bcryptjs');

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
      contrasenna: bcrypt.hashSync(info.contrasenna, 10),
      email: info.email,
      foto_perfil: info.fotoPerfil,
      fecha_nacimiento: info.fechaNacimiento,
      d_n_i: info.numeroDocumento, 
      remember_token: ""
  }
    if (info.contrasenna.length < 3 || info.email == "") {
      return res.redirect('/profiles/register')}
    else {
      user.create(userStore)
      .then(function (result) {
        //aca te tiene que enviar al login pero no esta funcionando
        return res.redirect('/profiles/profilesEdit');
      })
      .catch(function (error) {
        return res.redirect('/profiles/register')
      });}
    
  },    

  login: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect('/movies/all');
    } else {
      return res.render('login');
    }
  },
  loginPost: function (req, res) {
    let emailBuscado = req.body.email;
    let pass = req.body.password;

    let filtrado = {
      where: [{email: emailBuscado}]
    };
    user.findOne(filtrado)
    .then((result) => {
      if (result != null) {
        let claveCorrecta = bcrypt.compareSync(pass, result.password)
          if (claveCorrecta) {
            /* poner en session */      
            req.session.user = result.dataValues;
            if (req.body.rememberme != undefined) {
              res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15});
            }   
              return res.redirect('/movies/all');
          } else {
              return res.send("Existe el mail y pero la password es incorrecta");
          }
      } else {
          return res.send("Noooo Existe el mail")
      }
    }).catch((err) => {
        console.log(err);
    });
   
  },

  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      usuario: datamodule.usuario
    })
  }
}

module.exports = profileController