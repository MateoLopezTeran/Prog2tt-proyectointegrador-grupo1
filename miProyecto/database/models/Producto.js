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
        nombreProducto:{
            type: dataTypes.STRING(150),
        },
        descripcionProducto:{
            type: dataTypes.STRING,
        },
        images:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        usuarioId:{
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
        as: 'usuario',
        foreignKey: 'usuarioID'
    })
};
   
    /* 6to retornar el valor del modelo */
    return Producto;
}