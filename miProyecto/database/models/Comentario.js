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
       timestamps: true,
       underscored: true,
   };

   const Actor = sequelize.define(alias, cols, config);

   return Actor;
}