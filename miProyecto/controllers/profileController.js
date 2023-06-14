const datamodule = require('../data/datamodule');
const db = require("../database/models");
const producto = db.Producto;
const user = db.Usuario;
const bcrypt = require('bcryptjs');

const profileController = {
  usuario: (req, res) => {
    let criterio = {
      include: [{association: 'productos'}, {association: 'comentarios'}]
    };
    
    user
      .findByPk(req.session.user.id , criterio)
      .then(function (result) {
        /* return res.send(result.foto_perfil) */
        return res.render("profiles", { usuario: result });
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  //este es el get
  register: function (req, res) {
    return res.render('register')
  },
  //este es el post
  store: function (req, res) {
    req.body;
    
    const pass = req.body.contrasenna
    req.body.contrasenna = bcrypt.hashSync(pass, 10)
    console.log(req.body)
  
    
      db.Usuario.create(req.body)
      .then(function (result) {
        console.log(result)
        //aca te tiene que enviar al login pero no esta funcionando
        return res.redirect('/profiles/login');
      })
      .catch(function (error) {
        console.log(error)
        //return res.redirect('/profiles/profilesEdit') /* funciona pero hay que poner todos los campos obligatoriamente */
      });
    
    
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
    req.session.destroy();
    res.clearCookie('id');
    return res.redirect('/')
  },

  profilesEdit: function (req, res) {
    res.render('profilesEdit', {
      usuario: datamodule.usuario
    })
  }
}

module.exports = profileController