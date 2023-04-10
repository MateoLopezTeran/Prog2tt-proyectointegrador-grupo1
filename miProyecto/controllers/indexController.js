const datamodule = require('../data/datamodule')

const indexController = {
  index: function(req, res) {
    res.render('index', {
      data: datamodule.productos});
  },

  headerLogueado: function(req, res) {
    res.render('headerLogueado');
  },

  searchResults: function (req, res) {
    res.render('searchResults', {
      datamodule: datamodule
    });
  }
}
 
module.exports = indexController