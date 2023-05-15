const datamodule = require('../data/datamodule')

/* Requerimos modulos propios */
const db = require('../database/models');
const producto = db.Producto;
const usuario = db.Usuario;
let op = db.Sequelize.Op;


const indexController = {
  index: function(req, res) {
    res.render('index', {
      data: datamodule.productos});
  },

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