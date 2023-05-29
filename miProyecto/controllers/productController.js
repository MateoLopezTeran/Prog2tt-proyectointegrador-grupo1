const datamodule = require('../data/datamodule')

/* Requerimos modulos propios */
const db = require('../database/models');
const producto = db.Producto;
const usuario = db.Usuario;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

const productController = {
  // products: function(req, res) {
  //   let id = req.params.id;
  //   let productos = null;
  //   for (let i = 0; i < datamodule.productos.length; i++) {
  //     if (id == datamodule.productos[i].id) {
  //       productos = datamodule.productos[i];
  //     }
  //   };
  //   comentarios = datamodule
  //   return res.render('products', {
  //   producto: productos,
  //   comentario: comentarios

  //   });
  // },
  products: (req, res) => {
    let id = req.params.id
    producto
    .findByPk(id, {include: [{association: 'comentarios'}]})
    .then(function (result) {
      // let nombre = []
      // for (let i = 0; i < result.length; i++) {
      //   nombre.push(result[i].productos[i]);
      // }
      // /* No funciona bien */

      // let fotoProduct = []
      // for (let i = 0; i < result.length; i++) {
      //   fotoProduct.push(result[i].productos.images);
      // }
      // /* res.send(fotoProduct) */

      // let comments = []
      // for (let i = 0; i < result.length; i++) {
      //   comments.push(result[i].comentarios[i].texto_comentario);
      // }
      // /* No funciona bien */
      // /* res.send(comments) */
      // let foto = []
      // for (let i = 0; i < result.length; i++) {
      //   foto.push(result[i].foto_perfil)
      // }
      
      // let mail = []
      // for (let i = 0; i < result.length; i++) {
      //   mail.push(result[i].email)
      // }
      
      for (let i = 0; i < productos.length; i++) {
        comentarios_productos = product.comentarios[i];
      }

      return res.render("productDetail", {product: result});
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


}

module.exports = productController