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
  
  regitser: function (req, res) {
    return res.render('register')
  },
  store: function (req, res) {
    let info = req.body;
    
    let userSave = {
      email: info.email,
      contrasenna: info.contrasenna
    }

    user.create(userSave)
    .then(function (result) {
      return res.redirect('/profiles/login');
    })
    .catch(function (error) {
      console.log(error);
    });
  },

    /* movie.findAll({
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
      }); */
    

  login: function (req, res) {
    res.render('login')
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