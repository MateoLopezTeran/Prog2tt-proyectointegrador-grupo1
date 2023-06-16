const db = require('../database/models');
const producto = db.Producto;
const user = db.Usuario;
const comentario = db.Comentario;
let op = db.Sequelize.Op;

const productController = {

  products: (req, res) => {
    const primary_key = req.params.id
    const rel = {
      order: [['created_at', 'DESC']],
      include: [
        {
          association: 'comentarios', 
          include: [{association: 'usuarios' }] },
        ]
    }
    producto.findByPk(primary_key, rel)
    .then(function (result) {
      /* return res.send(result) */
      return res.render("productDetail", {product: result});
    })
    .catch(function (err) {
      console.log(err);
    });
  },

// coments add no funciona pero esta a un pelo, hay un problema con la ruta y la pagina que no se recarga bien 

  comentsAdd: (req,res) => {
    
      if (req.body.com == "") {
        res.redirect('/products/detail/'+ id)
      } else {
        if (req.session.user != null) { 
          let id = req.params.id ;
          let userStore = {
          order: [['created_at', 'DESC']],
          texto_comentario: req.body.com,
          usuario_id: req.session.user.id ,
          producto_id: id,
          }

          comentario
          .create(userStore)
          .then(function (result) {
            return res.redirect('/products/detail/'+ id);
          })
          .catch(function (error) {
            console.log("error = " + error);
            return res.redirect('/products/detail/'+ id);
          });
           } else { 
           return res.redirect('/profiles/login')
         }
      }
  },

  productsAdd: function(req, res) {
    
    return res.render('productsAdd')
  },
  
  productsAddpost: function (req, res) {
    let info = req.body;
    
    let userStore = {
      images: info.imagen,
      nombre_producto: info.nombreProducto,
      descripcion_producto: info.descripcion,
      created_at: info.fechaCarga, 
      usuario_id: req.session.user.id ,
      }
    if (info.imagen == "" || info.nombreProducto == "" || info.descripcion == "" || info.fechaCarga == "") {
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

  productEdit : function (req,res) {
    const primary_key = req.params.id
    const rel = {
      include: [
        {
          association: 'comentarios', 
          include: [{association: 'usuarios' }] },
      ] 
    }

    if (req.session.user != null ) {
      producto.findByPk(primary_key, rel)
    .then(function (result) {
      return res.render("productsEdit", {product: result , id: primary_key});
    })
    .catch(function (err) {
      console.log(err);
    });
    } else {
      return res.redirect('/profiles/login')
    }
  }, 

  productEditPost : function (req,res) {
    let id = req.params.id;
    let info = req.body;
    let a = req.session.user.id;
    let b = info.idd
    
    if (a == b) {
      let userStore = {
        nombre_producto : info.nombre_producto,
        descripcion_producto : info.descripcion_producto,
        images : info.images,
      }
      producto
        .update(userStore, {
          where: [{ id: id }],
        })
        .then((result) => {
          return res.redirect("/products/detail/" + id);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.redirect('/');
    }

  }

}
 
module.exports = productController