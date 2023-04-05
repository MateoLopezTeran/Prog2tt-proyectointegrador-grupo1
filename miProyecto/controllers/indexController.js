const indexController = {
    prueba: function(req, res) {
        res.render('index', { title: 'Proyecto' });
      }
}

module.exports = indexController