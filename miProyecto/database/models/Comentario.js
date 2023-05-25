module.exports = function (sequelize, dataTypes){

   let alias = 'Comentario';

   let cols = {
       id: {
           autoIncrement: true,
           primaryKey: true,
           type: dataTypes.INTEGER
       },
       textoComentario : {
            type: dataTypes.STRING
       },
       createdAt : {
           type: dataTypes.DATE,
           allowNull:true,
       },
       updatedAt: {
           type: dataTypes.DATE,
           allowNull: true,
       },
       usuarioId: {
           type: dataTypes.INTEGER
       },
       productoId: {
        type: dataTypes.INTEGER
    }
   };

   let config = {
       tableName : "comentarios",
       timestamps: true,
       underscored: true,
   };

   const Actor = sequelize.define(alias, cols, config);

   return Actor;
}