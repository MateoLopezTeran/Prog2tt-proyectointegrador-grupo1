/* Requerimos modulos propios */
const db = require('../database/models');
const producto = db.Producto;
const user = db.Usuario;
let op = db.Sequelize.Op;
 

const indexController = {
  index: (req, res) => {
    let criterio = {
      order: [['created_at', 'DESC']],
      include: [{association: 'comentarios'},{association: 'usuarios'}]
    };
    
    producto
      .findAll(criterio)
      .then(function (result) {
        return res.render("index", { productos: result });
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  searchResults: function (req, res) {
    let busqueda = req.query.search
    producto.findAll({
        where: [
          {nombre_producto: {[op.like]: "%" + busqueda + "%"}}
        ],
        order: [['created_at', 'DESC']],
        include: [{association: 'comentarios'}]
      })
      .then(function (productos_busqueda) {
        //let busqueda_usuarios = req.query.search
        //let productos_busqueda = result
        user.findAll({
          where: [
            {email: {[op.like]: "%" + busqueda + "%"}}
          ]
        }).then(function (usuarios) {
          //let usuario = result
          if (usuarios.length < 1 && productos_busqueda.length < 1) {
            return res.send('No hay resultados para su criterio de búsqueda')
          }
          //return res.json({productos_busqueda, usuarios})
          return res.render('searchResults', {products: productos_busqueda, user: usuarios});
        })
        .catch(function (err) {
          console.log(err)
        })
         

      }).catch((err) => {
        console.log(err)
      })
  }
}
 
module.exports = indexController