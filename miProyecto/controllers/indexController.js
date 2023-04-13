const datamodule = require('../data/datamodule')

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