const datamodule = {
    usuario: {
        email: 'mlopezteran@udesa.edu.ar',
        nombreUsuario: 'Mateo Lopez Teran',
        contraseña: 'contraseña',
        fechaNacimiento: 17/06/2004,
        numeroDocumento: 47248533,
        fotoPerfil: 'foto'
    },
    productos: [{
        imagen: "/images/products/computadora_1.webp",
        nombreProducto: 'Notebook Asus',
        descripcion: 'La notebook Asus X515EA es una solución tanto para trabajar y estudiar como para entretenerte',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_2.webp',
        nombreProducto: 'Macbook Air M2',
        descripcion: 'La notebook Macbook Air M2 es una solución tanto para trabajar y estudiar como para entretenerte',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_3.webp',
        nombreProducto: 'Macbook Pro 13 inch',
        descripcion: 'La Macbook Pro 13 inch es la mezcla de la innovacion y la eficazia',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_4.webp',
        nombreProducto: 'Dell Inpiron',
        descripcion: 'La Dell Inspiron es ideal para trabajar',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_5.webp',
        nombreProducto: 'Acer Nitro 5',
        descripcion: 'La Acer Nitro 5 es ideal para el gaming',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_6.webp',
        nombreProducto: 'Aser Predator Elios 300',
        descripcion: 'La Aser Predator Elios 300 es una laptop con refrigeracion avanzazda',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_7.webp',
        nombreProducto: 'Dell Latitude',
        descripcion: 'La Dell Latitude tiene la memoria ideal para el trabajo',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_8.webp',
        nombreProducto: 'Asus Rog Strix',
        descripcion: 'La Asus Rog Strix tiene el sistema de refrigeracion ideal para el gaming',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_9.webp',
        nombreProducto: 'Macbook Air M1',
        descripcion: 'Liviana y con un procesador veloz',
        fechaCarga: 21/03/2023,
        },
        {
        imagen: '/images/products/computadora_10.webp',
        nombreProducto: 'MacBook Pro 16 inch',
        descripcion: 'La MacBook Pro 16 inch es perfecta para trabajar porque tiene un teclado amplio y rapido prosesador',
        fechaCarga: 21/03/2023
        }]
    ,
    comentarios: [{
        nombreUsuario: 'Mateo Lopez Teran',
        textoDelComentario: 'Muy buen producto, muy confiableel proveedor.',
        imagen: '/images/users/usuario1.png'
    },
    {
        nombreUsuario: 'Augusto Augier',
        textoDelComentario: 'Muy mal producto, poco confiable, me vino el cargador fallado pero buen servicio.',
        imagen: '/images/users/usuario2.png'
    },
    {
        nombreUsuario: 'Lucio Freixas',
        textoDelComentario: 'No puedo hablar mucho ya que solo tiene una semana de uso pero incluye todo lo que dice incluir, muy confiable.',
        imagen: '/images/users/usuario3.png'
    },
    {
        nombreUsuario: 'Brian Gomez',
        textoDelComentario: 'Gran computadora, viene funcionando tal cual se esperaba',
        imagen: '/images/users/usuario4.png'
    },
    {
        nombreUsuario: 'Miguel Read',
        textoDelComentario: 'Supero mis expectativas, muy recomendable',
        imagen: '/images/users/usuario5.png'
    }]
}

module.exports = datamodule