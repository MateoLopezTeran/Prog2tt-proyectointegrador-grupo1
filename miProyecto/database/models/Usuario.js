module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "Usuario"; /* Un apodo para requerirlo en los controllers */

    /* mapeo exacto de cada una de las columnas */
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        contrasenna:{
            type: dataTypes.STRING,
        },
        foto_perfil:{
            type: dataTypes.STRING,
        },
        fecha_nacimiento:{
            type: dataTypes.DATE,
        },
        d_n_i:{
            type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull: true,
        }
    }

    /* Obj literal paa configurar la tabla */
    let config = {
        tableName: 'usuarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'usuario_id'
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id'
        })
    };

    return Usuario;
};