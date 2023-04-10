-- Creo la base de datos
create schema miProyecto;

-- Usar base de datos
use miProyecto;

-- Creo la tabla de usuarios
create table usuarios (
/* NOMBRE				TIPO			RESTRICCIONES */
id						int				unsigned primary key auto_increment,
email					varchar(100)	not null,
contraseña				varchar(50)		not null,
foto_perfil				varchar(200)	not null,
fecha_nacimiento		date			not null,
DNI						int				not null,
createdAt				timestamp default current_timestamp,
updatedAt				timestamp default current_timestamp on update current_timestamp
);