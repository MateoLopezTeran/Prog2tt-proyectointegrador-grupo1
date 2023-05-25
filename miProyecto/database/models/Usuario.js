module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "Usuarios"; /* Un apodo para requerirlo en los controllers */

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
        fotoPerfil:{
            type: dataTypes.STRING,
        },
        fechaNacimiento:{
            type: dataTypes.DATE,
        },
        DNI:{
            type: dataTypes.INTEGER,
        },
        createdAt:{
            type: dataTypes.DEFAULT,
        },
        updatedAt:{
            type: dataTypes.DEFAULT
        }
    }

    /* Obj literal paa configurar la tabla */
    let config = {
        tableName: 'usuarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;
};