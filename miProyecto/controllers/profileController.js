const datamodule = require('../data/datamodule');
const db = require("../database/models");
const producto = db.Producto;
const user = db.Usuario;
const bcrypt = require('bcryptjs');

const profileController = {
  usuario: (req, res) => {
    let id = req.params.id
    let criterio = {
      include: [{association: 'productos'}, {association: 'comentarios'}]
    };
    
    user
      .findByPk(id, criterio)
      .then(function (result) {
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
  
      db.Usuario.create(req.body)
      .then(function (result) {
        console.log(result)
        //aca te tiene que enviar al login pero no esta funcionando
        return res.redirect('/profiles/login');
      })
      .catch(function (error) {
        console.log(error)
        });
    
    
  },    

  login: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect(`/profiles/profilesEdit/${req.session.user.id}`);
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
    const primary_key = req.params.id

    if (req.session.user != null ) {
    user
    .findByPk(primary_key)
    .then(function (result) {
      return res.render("profilesEdit", {user: result , id: primary_key});
    })
    .catch(function (err) {
    });
    } else {
      return res.redirect('/')
    }
  },

  profilesEditPost: function (req, res) {
    let id = req.params.id;
    let info = req.body;
    let a = req.session.user.id;
    let b = info.idd
    
    if (a == b) {
      let userStore = {
        contrasenna : bcrypt.hashSync(info.contrasenna, 10),
        email : info.email,
        foto_perfil : info.foto_perfil,
        fecha_nacimiento : info.fecha_nacimiento,
        d_n_i : info.d_n_i,
      }
      user
        .update(userStore, {
          where: [{ id: id }],
        })
        .then((result) => {
          return res.redirect("/profiles/id/"+ id);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.redirect('/');
    }
  }
}

module.exports = profileController