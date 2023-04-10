-- Creo la base de datos
create schema miProyecto;

-- Usar base de datos
use miProyecto;

-- Tabla de usuarios
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

-- Tabla de productos
create table productos (
/* NOMBRE				TIPO			RESTRICCIONES */
id						int				unsigned primary key auto_increment,
nombre_producto			varchar(150)	not null,
descripcion_producto	varchar(200)	not null,
usuario_id				int 			unsigned,
createdAt				timestamp default current_timestamp,
updatedAt				timestamp default current_timestamp on update current_timestamp,
foreign key (usuario_id) references usuarios(id)
);

-- Tabla de comentarios
create table comentarios (
/* NOMBRE				TIPO			RESTRICCIONES */
id						int				unsigned primary key auto_increment,
texto_comentario		varchar(150)	not null,
createdAt 				timestamp default current_timestamp,
updatedAt				timestamp default current_timestamp on update current_timestamp,
usuario_id				int					unsigned,
producto_id				int					unsigned,
foreign key 			(usuario_id) references usuarios(id),
foreign key				(producto_id) references productos(id)
);

-- Usuarios
insert into usuarios values(default, 'juanperez@gmail.com', 'juan1234', '', '2003-03-03', 45415555, default, default);
insert into usuarios values(default, 'mlopezteran@udesa.edu.ar', 'wawateran', '', '2003-03-03', 45415344, default, default);
insert into usuarios values(default, 'aaugier@udesa.edu.ar', 'coloso21', '', '2003-03-03', 45415333, default, default);
insert into usuarios values(default, 'lfreixas@udesa.edu.ar', 'luchito22', '', '2003-03-03', 45415362, default, default);
insert into usuarios values(default, 'fdeangelis@udesa.edu.ar', 'elcuasi', '', '2003-03-03', 45415362, default, default);

-- Posteos
insert into productos values(default, 'Notebook Asus', 'La notebook Asus X515EA es una solución tanto para trabajar y estudiar como para entretenerte', 1, default, default);
insert into productos values(default, 'Macbook Air M2', 'La notebook Macbook Air M2 es una solución tanto para trabajar y estudiar como para entretenerte', 2, default, default);
insert into productos values(default, 'Macbook Pro 13 inch', 'La Macbook Pro 13 inch es la mezcla de la innovacion y la eficazia', 2, default, default);
insert into productos values(default, 'Dell Inpiron', 'La Dell Inspiron es ideal para trabajar', 4, default, default);
insert into productos values(default, 'Acer Nitro 5', 'La Acer Nitro 5 es ideal para el gaming', 5, default, default);
insert into productos values(default, 'Aser Predator Elios 300', 'La Aser Predator Elios 300 es una laptop con refrigeracion avanzazda', 5, default, default);
insert into productos values(default, 'Dell Latitude', 'La Dell Latitude tiene la memoria ideal para el trabajo', 3, default, default);
insert into productos values(default, 'Asus Rog Strix', 'La Asus Rog Strix tiene el sistema de refrigeracion ideal para el gaming', 4, default, default);
insert into productos values(default, 'Macbook Air M1', 'Liviana y con un procesador veloz', 2, default, default);
insert into productos values(default, 'MacBook Pro 16 inch', 'La MacBook Pro 16 inch es perfecta para trabajar porque tiene un teclado amplio y rapido prosesador', 2, default, default);

-- Comentarios
insert into comentarios values(default, 'esta bueno', default, default, 3, 3);
insert into comentarios values(default, 'esta bueno', default, default, 4, 5);
insert into comentarios values(default, 'esta bueno', default, default, 4, 7);
insert into comentarios values(default, 'esta bueno', default, default, 3, 7);
insert into comentarios values(default, 'esta bueno', default, default, 2, 8);
insert into comentarios values(default, 'esta bueno', default, default, 4, 6);
insert into comentarios values(default, 'esta bueno', default, default, 1, 1);
insert into comentarios values(default, 'esta bueno', default, default, 3, 9);
insert into comentarios values(default, 'esta bueno', default, default, 1, 10);
insert into comentarios values(default, 'esta bueno', default, default, 4, 2);
insert into comentarios values(default, 'esta bueno', default, default, 5, 2);
insert into comentarios values(default, 'esta bueno', default, default, 4, 9);
insert into comentarios values(default, 'esta bueno', default, default, 2, 3);
insert into comentarios values(default, 'esta bueno', default, default, 3, 2);
insert into comentarios values(default, 'esta bueno', default, default, 1, 4);
insert into comentarios values(default, 'esta bueno', default, default, 1, 5);
insert into comentarios values(default, 'esta bueno', default, default, 1, 3);
insert into comentarios values(default, 'esta bueno', default, default, 2, 4);
insert into comentarios values(default, 'esta bueno', default, default, 1, 2);
insert into comentarios values(default, 'esta bueno', default, default, 1, 7);
insert into comentarios values(default, 'esta bueno', default, default, 1, 8);
insert into comentarios values(default, 'esta bueno', default, default, 1, 7);
insert into comentarios values(default, 'esta bueno', default, default, 2, 4);
insert into comentarios values(default, 'esta bueno', default, default, 3, 5);
insert into comentarios values(default, 'esta bueno', default, default, 2, 7);
insert into comentarios values(default, 'esta bueno', default, default, 3, 6);
insert into comentarios values(default, 'esta bueno', default, default, 5, 6);
insert into comentarios values(default, 'esta bueno', default, default, 1, 4);
insert into comentarios values(default, 'esta bueno', default, default, 2, 9);
insert into comentarios values(default, 'esta bueno', default, default, 3, 5);
insert into comentarios values(default, 'esta bueno', default, default, 5, 10);

