const productController = {
    prueba1: function(req, res) {
        res.render('products', { title: 'Proyecto' });
      }
}

module.exports = productController