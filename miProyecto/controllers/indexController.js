const datamodule = require('../data/datamodule')

/* Requerimos modulos propios */
const db = require('../database/models');
const producto = db.Producto;
const usuario = db.Usuario;
let op = db.Sequelize.Op;
 

const indexController = {
  index: (req, res) => {
    return res.render("index", ) /* Este render es el del then. Está acá para que no crashee la pagina */
  },
   /*  let criterio = {
      order: [['createdAT', 'ASC']]
    };
    
    producto
      .findAll(criterio)
      .then(function (result) {
        return res.render("index", { productos: result });
      })
      .catch(function (err) {
        console.log(err);
      });
  }, */

  
  headerLogueado: function(req, res) {
    res.render('headerLogueado', {
      usuario: datamodule.usuario
    });
  }, 

  searchResults: function (req, res) {
    res.render('searchResults', {
      data: datamodule.productos});
  }
}
 
module.exports = indexController