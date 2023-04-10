const datamodule = require('../data/datamodule')

const indexController = {
  index: function(req, res) {
    res.render('index');
  },

  headerLogueado: function(req, res) {
    res.render('headerLogueado');
  },

  searchResults: function (req, res) {
    res.render('searchResults', {
      data: datamodule
    });
  }
}
 
module.exports = indexController