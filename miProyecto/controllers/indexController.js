

/* Requerimos modulos propios */
const db = require('../database/models');
const producto = db.Producto;
const usuario = db.Usuario;
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
    producto
      .findAll({
        where: [
          {nombre_producto: {[op.like]: "%" + busqueda + "%"}}
        ],
        include: [{association: 'comentarios'}]
      })
      .then(function (result) {
        if (searchResults == null) {
          res.send('No hay resultados para su criterio de búsqueda')
        }
        return res.render('searchResults', {products: result });
        

      }).catch((err) => {
        console.log(err)
      })
  }
}
 
module.exports = indexController