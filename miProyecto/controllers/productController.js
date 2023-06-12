const db = require('../database/models');
const producto = db.Producto;
const user = db.Usuario;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

const productController = {

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
    .then(function (result) {
      return res.render("productDetail", {product: result});
    })
    .catch(function (err) {
      console.log(err);
    });
  },

  productsAdd: function(req, res) {
    
    return res.render('productsAdd')
  },
  
  productsAddpost: function (req, res) {
    let info = req.body;
    
    let userStore = {
      images: info.imagen,
      nombre_producto: info.nombreProducto,
      descrdescripcion_productoipcion: info.descripcion,
      created_at: info.fechaCarga,
      usuario_id: 1,
  }
  console.log(userStore);
    if (info.imagen == "" || info.nombreProducto == "" || info.descripcion == "" || created_at == "") {
      return res.redirect('/products/productsAdd')}
    else {
      producto.create(userStore)
      .then(function (result) {
        return res.redirect('/');
      })
      .catch(function (error) {
        console.log(error);
        return res.redirect('/products/productsAdd')
      });}
  },
}

module.exports = productController