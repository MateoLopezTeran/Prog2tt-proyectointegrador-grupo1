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
    comentarios = datamodule
    return res.render('products', {
    producto: productos,
    comentario: comentarios

    });
  },

  productsAdd: function(req, res) {
    return res.render('productsAdd', {
      usuario: datamodule.usuario
    })
  },

  searchResults: function (req, res) {
    res.render('searchResults', {
      data: datamodule.productos});
  }
}

module.exports = productController