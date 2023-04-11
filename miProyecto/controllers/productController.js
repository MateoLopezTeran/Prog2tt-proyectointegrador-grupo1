const datamodule = require('../data/datamodule')

const productController = {
  products: function(req, res) {
    let id = req.params.id;
    let productos = null;
    for (let i = 0; i < datamodule.productos.length; i++) {
      if (id == datamodule.productos[i].id) {
        productos = datamodule.productos[i];
      }
    };

    let comentarios = null;
    for (let i = 0; i < datamodule.comentarios.length; i++) {
      if (id == datamodule.comentarios[i].id) {
        comentarios = datamodule.comentarios[i];
      }
    };
  res.render('products', {
    producto: productos,
    comentario: comentarios
    });
  },

  productsAdd: function(req, res) {
    res.render('productsAdd')
  },
}

module.exports = productController