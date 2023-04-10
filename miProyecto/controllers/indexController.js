const indexController = {
  index: function(req, res) {
    res.render('index');
  },

  headerLogueado: function(req, res) {
    res.render('headerLogueado');
  },

  searchResults: function (req, res) {
    res.render('searchResults');
  }
}

module.exports = indexController