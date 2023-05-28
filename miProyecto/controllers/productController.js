const datamodule = require('../data/datamodule')

/* Requerimos modulos propios */
const db = require('../database/models');
const producto = db.Producto;
const usuario = db.Usuario;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

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
  products: (req, res) => {
    let id = req.params.id
    usuario
    .findAll({include: [{association: 'productos'}, {association: 'comentarios'}]})
    .then(function (result) {
      /* let comments = []
      for (let i = 0; i < result.comentarios.length; i++) {
        comments.push(result.comentarios[i].texto_comentario);
      } */
      res.send(result)
      for (let i = 0; i < result[i].length; i++) {
        
        
      }
      /* res.send(result) */
      return res.render("products", {products: result/* , comentarios: comments */});
    })
    .catch(function (err) {
      console.log(err);
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