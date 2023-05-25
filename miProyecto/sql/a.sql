-- Creo la base de datos
create schema miProyecto;

-- Usar base de datos
use miProyecto;

-- Tabla de usuarios
create table usuarios (
/* NOMBRE				TIPO			RESTRICCIONES */
id						int				unsigned primary key auto_increment,
email					varchar(100)	not null,
contrasenna				varchar(50)		not null,
fotoPerfil				varchar(200)	not null,
fechaNacimiento		date			not null,
DNI						int				not null,
createdAt				timestamp default current_timestamp,
updatedAt				timestamp default current_timestamp on update current_timestamp
);

-- Tabla de productos
create table productos (
/* NOMBRE				TIPO			RESTRICCIONES */
id						int				unsigned primary key auto_increment,
nombreProducto			varchar(150)	not null,
descripcionProducto	    varchar(200)	not null,
images                  varchar(100)    not null,
createdAt				timestamp default current_timestamp,
updatedAt				timestamp default current_timestamp on update current_timestamp,
usuarioId				int 			unsigned,
foreign key (usuarioId) references usuarios(id)
);

-- Tabla de comentarios
create table comentarios (
/* NOMBRE				TIPO			RESTRICCIONES */
id						int				unsigned primary key auto_increment,
textoComentario		varchar(150)	not null,
createdAt 				timestamp default current_timestamp,
updatedAt				timestamp default current_timestamp on update current_timestamp,
usuarioId				int					unsigned,
productoId				int					unsigned,
foreign key 			(usuarioId) references usuarios(id),
foreign key				(productoId) references productos(id)
);

-- Usuarios
insert into usuarios values(default, 'mlopezteran@udesa.edu.ar', 'wawateran', '/images/users/usuario1.png', '2003-03-03', 45415555, default, default);
insert into usuarios values(default, 'aaugier@udesa.edu.ar', 'coloso21', '/images/users/usuario2.png', '2003-03-03', 45415344, default, default);
insert into usuarios values(default, 'lfreixas@udesa.edu.ar', 'luchito22', '/images/users/usuario3.png', '2003-03-03', 45415333, default, default);
insert into usuarios values(default, 'bgomez@udesa.edu.ar', 'brian123', '/images/users/usuario4.png', '2003-03-03', 45415362, default, default);
insert into usuarios values(default, 'mraad@udesa.edu.ar', 'miguelraad123', '/images/users/usuario5.png', '2003-03-03', 45415362, default, default);

-- Posteos
insert into productos values(default, 'Notebook Asus', 'La notebook Asus X515EA es una solución tanto para trabajar y estudiar como para entretenerte', "/images/products/computadora_1.webp", default, default, 1);
insert into productos values(default, 'Macbook Air M2', 'La notebook Macbook Air M2 es una solución tanto para trabajar y estudiar como para entretenerte', '/images/products/computadora_2.webp', default, default, 2);
insert into productos values(default, 'Macbook Pro 13 inch', 'La Macbook Pro 13 inch es la mezcla de la innovacion y la eficazia', '/images/products/computadora_3.webp', default, default, 2);
insert into productos values(default, 'Dell Inpiron', 'La Dell Inspiron es ideal para trabajar', '/images/products/computadora_4.webp', default, default, 4);
insert into productos values(default, 'Acer Nitro 5', 'La Acer Nitro 5 es ideal para el gaming', '/images/products/computadora_5.webp', default, default, 5);
insert into productos values(default, 'Aser Predator Elios 300', 'La Aser Predator Elios 300 es una laptop con refrigeracion avanzazda', '/images/products/computadora_6.webp', default, default, 5);
insert into productos values(default, 'Dell Latitude', 'La Dell Latitude tiene la memoria ideal para el trabajo', '/images/products/computadora_7.webp', default, default, 3);
insert into productos values(default, 'Asus Rog Strix', 'La Asus Rog Strix tiene el sistema de refrigeracion ideal para el gaming', '/images/products/computadora_8.webp', default, default, 4);
insert into productos values(default, 'Macbook Air M1', 'Liviana y con un procesador veloz', '/images/products/computadora_9.webp', default, default, 2);
insert into productos values(default, 'MacBook Pro 16 inch', 'La MacBook Pro 16 inch es perfecta para trabajar porque tiene un teclado amplio y rapido prosesador', '/images/products/computadora_10.webp', default, default, 2);

-- Comentarios
insert into comentarios values(default, 'esta bueno', default, default, 3, 3);
insert into comentarios values(default, 'esta muy malo', default, default, 4, 5);
insert into comentarios values(default, 'anda mal', default, default, 4, 7);
insert into comentarios values(default, 'anda rapido', default, default, 3, 7);
insert into comentarios values(default, 'esta mas o menos', default, default, 2, 8);
insert into comentarios values(default, 'es muy buena', default, default, 4, 6);
insert into comentarios values(default, 'anda muy lento', default, default, 1, 1);
insert into comentarios values(default, 'me convencio', default, default, 3, 9);
insert into comentarios values(default, 'me parece lenta', default, default, 1, 10);
insert into comentarios values(default, 'me parecio rapida', default, default, 4, 2);
insert into comentarios values(default, 'es lenta', default, default, 5, 2);
insert into comentarios values(default, 'tiene mucha memoria', default, default, 4, 9);
insert into comentarios values(default, 'anda muy bien', default, default, 2, 3);
insert into comentarios values(default, 'tiene poco espacio', default, default, 3, 2);
insert into comentarios values(default, 'no me anduvo como esperaba', default, default, 1, 4);
insert into comentarios values(default, 'no es recomendable', default, default, 1, 5);
insert into comentarios values(default, 'el cargador me vino roto', default, default, 1, 3);
insert into comentarios values(default, 'la pantalla me vino manchada', default, default, 2, 4);
insert into comentarios values(default, 'es la mejor computadora que tuve', default, default, 1, 2);
insert into comentarios values(default, 'es la peor cosa que compre', default, default, 1, 7);
insert into comentarios values(default, 'no me parecio tan buena', default, default, 1, 8);
insert into comentarios values(default, 'tiene buena resolucion', default, default, 1, 7);
insert into comentarios values(default, 'muy mala de memoria', default, default, 2, 4);
insert into comentarios values(default, 'anda rapido pero tarda en cargar', default, default, 3, 5);
insert into comentarios values(default, 'esta bueno, pero no me convence el tiempo que toma cargarse', default, default, 2, 7);
insert into comentarios values(default, 'no me convence la resolucion', default, default, 3, 6);
insert into comentarios values(default, 'me parece buena', default, default, 5, 6);
insert into comentarios values(default, 'es medio lenta, pero anda bien', default, default, 1, 4);
insert into comentarios values(default, 'es rapida para algunas cosas', default, default, 2, 9);
insert into comentarios values(default, 'no me convence la carga', default, default, 3, 5);
insert into comentarios values(default, 'fue muy cara y no parece resistente', default, default, 5, 10);
insert into comentarios values(default, 'tiene buena resolucion', default, default, 1, 7);
insert into comentarios values(default, 'muy mala de memoria', default, default, 2, 4);
insert into comentarios values(default, 'anda rapido y es de buena calidad pero tarda en cargar', default, default, 3, 5);
insert into comentarios values(default, 'no me convence el tiempo que toma cargarse', default, default, 2, 7);
insert into comentarios values(default, 'me convence la resolucion', default, default, 3, 6);
insert into comentarios values(default, 'me parece buena para jugar', default, default, 5, 6);
insert into comentarios values(default, 'es medio lenta y anda mal', default, default, 1, 4);
insert into comentarios values(default, 'es lenta para algunas cosas', default, default, 2, 9);
insert into comentarios values(default, 'me convence la carga', default, default, 3, 5);
insert into comentarios values(default, 'fue muy barata y me parece resistente', default, default, 5, 10);

