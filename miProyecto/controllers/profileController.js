const datamodule = require('../data/datamodule');
const db = require("../database/models");
const producto = db.Producto;
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
      d_n_i: info.numeroDocumento
  }
    if (info.contrasenna.length < 3 || info.email == "") {
      return res.redirect('/profiles/register')}
    else {
      user.create(userStore)
      .then(function (result) {
        //aca te tiene que enviar al login pero no esta funcionando
        return res.redirect('/profiles/login');
      })
      .catch(function (error) {
        return res.redirect('/profiles/profilesEdit') /* funciona pero hay que poner todos los campos obligatoriamente */
      });}
    
  },    

  login: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect('/profiles/profilesEdit');
    } else {
      return res.render('login');
    }
  },
  loginPost: function (req, res) {
    let emailBuscado = req.body.email;
    let contrasenna = req.body.contrasenna;

    let criterio = {
      where: [{email: emailBuscado}]
    };
    user.findOne(criterio)
    .then((result) => {
      if (result != null) {
        let claveCorrecta = bcrypt.compareSync(contrasenna, result.contrasenna)
          if (claveCorrecta) {
            /* poner en session */      
            req.session.user = result.dataValues;
            if (req.body.recordarme != undefined) {
              res.cookie('id', result.id, {maxAge: 1000 * 60 * 15});
            }   
              return res.redirect('/');
          } else {
              return res.send("Existe el mail pero la contrasenna es incorrecta");
          }
      } else {
          return res.send("No Existe el mail")
      }
    }).catch((err) => {
    });
  
  },

  cerrarSesion: function(req, res){
    res.clearCookie('id');

    let criterio = {
      order: [['created_at', 'DESC']],
      include: [{association: 'comentarios'},{association: 'usuarios'}]
    };

    producto
      .findAll(criterio)
      .then(function (result) {
        return res.render("index", { productos: result });
      })
      .catch(function (err) {
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