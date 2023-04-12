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
        id: 1,
        imagen: "/images/products/computadora_1.webp",
        nombreProducto: 'Notebook Asus',
        descripcion: 'La notebook Asus X515EA es una solución tanto para trabajar y estudiar como para entretenerte',
        descripcionLarga: "Esta computadora es un dispositivo que ha transformado nuestra forma de vida y trabajo y se destaca por su velocidad.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 2,
        imagen: '/images/products/computadora_2.webp',
        nombreProducto: 'Macbook Air M2',
        descripcion: 'La notebook Macbook Air M2 es una solución tanto para trabajar y estudiar como para entretenerte',
        descripcionLarga: "Esta notebook de Apple es increíblemente poderosas y versátiles, permitiéndonos hacer cosas que antes eran imposibles.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 3,
        imagen: '/images/products/computadora_3.webp',
        nombreProducto: 'Macbook Pro 13 inch',
        descripcion: 'La Macbook Pro 13 inch es la mezcla de la innovacion y la eficazia',
        descripcionLarga: "Esta computadora es una herramienta que se ha vuelto indispensable en el mundo moderno, tanto para el trabajo como para la diversión.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 4,
        imagen: '/images/products/computadora_4.webp',
        nombreProducto: 'Dell Inpiron',
        descripcion: 'La Dell Inspiron es ideal para trabajar',
        descripcionLarga: "La capacidad de procesamiento y almacenamiento de las computadoras modernas es sorprendente, el de la Dell es superior, permitiéndonos realizar tareas más complejas en menos tiempo.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 5,
        imagen: '/images/products/computadora_5.webp',
        nombreProducto: 'Acer Nitro 5',
        descripcion: 'La Acer Nitro 5 es ideal para el gaming',
        descripcionLarga: "Las computadoras modernas son una fuente de creatividad y expresión artística, permitiéndonos crear y diseñar cosas nuevas e innovadoras y esta no es ninguna excepcion, se destaca en velocidad y graficos.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 6,
        imagen: '/images/products/computadora_6.webp',
        nombreProducto: 'Aser Predator Elios 300',
        descripcion: 'La Aser Predator Elios 300 es una laptop con refrigeracion avanzazda',
        descripcionLarga: "Esta computadora es un medio de comunicación poderoso y efectivo, conectándonos con personas de todo el mundo instantaneamente.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 7,
        imagen: '/images/products/computadora_7.webp',
        nombreProducto: 'Dell Latitude',
        descripcion: 'La Dell Latitude tiene la memoria ideal para el trabajo',
        descripcionLarga: "La facilidad de uso y la interfaz intuitiva de esta computadora hace que sean accesibles para usuarios de todas las edades y habilidades.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 8,
        imagen: '/images/products/computadora_8.webp',
        nombreProducto: 'Asus Rog Strix',
        descripcion: 'La Asus Rog Strix tiene el sistema de refrigeracion ideal para el gaming',
        descripcionLarga: "La computadora es una herramienta de aprendizaje valiosa, permitiéndonos acceder a una cantidad inimaginable de información y recursos, y en este caso el gameing se destaca.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 9,
        imagen: '/images/products/computadora_9.webp',
        nombreProducto: 'Macbook Air M1',
        descripcion: 'Liviana y con un procesador veloz',
        descripcionLarga: "Este equipo es muy fiables y duradera, lo que significa que puedes confiar en ellas para realizar tareas críticas y mantener tu información segura con altos rendimientos y velocidad.",
        fechaCarga: 21/03/2023,
        },
        {
        id: 10,
        imagen: '/images/products/computadora_10.webp',
        nombreProducto: 'MacBook Pro 16 inch',
        descripcion: 'La MacBook Pro 16 inch es perfecta para trabajar porque tiene un teclado amplio y rapido prosesador',
        descripcionLarga: "Este producto de Apple ha revolucionado la forma en que hacemos negocios, interactuamos con el mundo y vivimos nuestras vidas en general, debido a sus asombrosas prestaciones.",
        fechaCarga: 21/03/2023
        }]
    ,
    comentarios: [{
        id: 1,
        nombreUsuario: 'Mateo Lopez Teran',
        textoDelComentario: 'Muy buen producto, muy confiable proveedor.',
        imagen: '/images/users/usuario1.png'
    },
    {
        id: 2,
        nombreUsuario: 'Augusto Augier',
        textoDelComentario: 'Muy mal producto, poco confiable, me vino el cargador fallado pero buen servicio.',
        imagen: '/images/users/usuario2.png'
    },
    {
        id: 3,
        nombreUsuario: 'Lucio Freixas',
        textoDelComentario: 'No puedo hablar mucho ya que solo tiene una semana de uso pero incluye todo lo que dice incluir, muy confiable.',
        imagen: '/images/users/usuario3.png'
    },
    {
        id: 4,
        nombreUsuario: 'Brian Gomez',
        textoDelComentario: 'Gran computadora, viene funcionando tal cual se esperaba',
        imagen: '/images/users/usuario4.png'
    },
    {
        id: 5,
        nombreUsuario: 'Miguel Raad',
        textoDelComentario: 'Supero mis expectativas, muy recomendable',
        imagen: '/images/users/usuario5.png'
    }]
}

module.exports = datamodule