const datamodule = require('../data/datamodule')

const productController = {
  products: function(req, res) {
    res.render('products');
  },

  productsAdd: function(req, res) {
    res.render('productsAdd', {
      nombreUsuario: datamodule.usuario.nombreUsuario
    });
  },
}

module.exports = productController