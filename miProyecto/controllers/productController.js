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
    const primary_key = req.params.id
    const rel = {
      include: [
        {
          association: 'comentarios', 
          include: [{association: 'usuarios' }] },
        
      ] 
    }
    producto.findByPk(primary_key, rel)
    //.findAll({include: [{association: 'comentarios'}, {association: 'usuarios'}]})
    .then(function (result) {
      console.log(result)
      /* let results = []
      for (let i = 0; i < result.length; i++) {
        results.push(result)
      } */
      
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