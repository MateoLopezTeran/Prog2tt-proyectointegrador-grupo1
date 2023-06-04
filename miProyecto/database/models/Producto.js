/* 1er paso: Exportar fun */
module.exports = function(sequelize, dataTypes){

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */
    let alias = 'Producto';

    /* 3er paso : Es crear una variable con la extructura de la tabla */
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre_producto:{
            type: dataTypes.STRING(150),
        },
        descripcion_producto:{
            type: dataTypes.STRING,
        },
        images:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        usuario_id:{
            type: dataTypes.INTEGER,
        }
    };

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        table:'productos',
        timestamps: false,
        underscore: true,
    };

    /* 5to paso : crear el metodo define() con los 3 parametros */
    const Producto = sequelize.define(alias,cols,config);

   /* Crear relacion */
   Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'usuario_id'
        }),
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'producto_id'
        })
    };
   
    /* 6to retornar el valor del modelo */
    return Producto;
}