module.exports = function (sequelize, dataTypes){

   let alias = 'Comentario';

   let cols = {
       id: {
           autoIncrement: true,
           primaryKey: true,
           type: dataTypes.INTEGER
       },
       texto_comentario : {
            type: dataTypes.STRING
       },
       created_at : {
           type: dataTypes.DATE,
           allowNull:true,
       },
       updated_at: {
           type: dataTypes.DATE,
           allowNull: true,
       },
       usuario_id: {
           type: dataTypes.INTEGER
       },
       producto_id: {
        type: dataTypes.INTEGER
    }
   };

   let config = {
       tableName : "comentarios",
       timestamps: false,
       underscored: true,
   };
   const Comentario = sequelize.define(alias, cols, config);

   Comentario.associate = function (models) {
    Comentario.belongsTo(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'usuario_id'
    });
    
    Comentario.belongsTo(models.Producto, {
        as: 'productos',
        foreignKey: `producto_id`
    })

   }

   return Comentario;
}