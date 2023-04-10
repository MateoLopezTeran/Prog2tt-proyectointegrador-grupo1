const datamodule = require('../data/datamodule')

const productController = {
  products: function(req, res) {
    let id = req.params.id;
    let resultado = null;
    for (let i = 0; i < datamodule.productos.length; i++) {
      if (id == datamodule.productos[i].id) {
        resultado = datamodule.productos[i];
      }
    };
  res.render('products', {
    producto: resultado
    });
  },

  productsAdd: function(req, res) {
    res.render('productsAdd')
  },
}

module.exports = productController