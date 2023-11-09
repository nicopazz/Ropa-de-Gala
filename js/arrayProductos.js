const productos = [
    //SACOS
    {
        titulo: 'Saco 1',
        id: 1,
        precio: 100,
        stock: 20,

        categoria: 'sacos',
        imagen: '../img/sacos/saco 1.jpeg',
        publicado: true

    },
    {
        titulo: 'Saco 2',
        id: 2,
        precio: 100,
        stock: 20,

        categoria: 'sacos',
        imagen: '../img/sacos/saco 2.jpeg',
        publicado: true

    },
    {
        titulo: 'Saco 3',
        id: 3,
        precio: 100,
        stock: 20,

        categoria: 'sacos',
        imagen: '../img/sacos/saco 3.jpeg',
        publicado: true

    },
    {
        titulo: 'Saco 4',
        id: 4,
        precio: 100,
        stock: 20,

        categoria: 'sacos',
        imagen: '../img/sacos/saco 4.jpeg',
        publicado: true

    },
    //PANTALONES
    {
        titulo: 'Pantalon 1',
        id: 5,
        precio: 100,
        stock: 20,

        categoria: 'pantalones',
        imagen: '../img/pantalones/pantalon 1.jpeg',
        publicado: true

    },
    {
        titulo: 'Pantalon 2',
        id: 6,
        precio: 100,
        stock: 20,

        categoria: 'pantalones',
        imagen: '../img/pantalones/pantalon 2.jpeg',
        publicado: true

    },
    {
        titulo: 'Pantalon 3',
        id: 7,
        precio: 100,
        stock: 20,

        categoria: 'pantalones',
        imagen: '../img/pantalones/pantalon 3.jpeg',
        publicado: true

    },
    {
        titulo: 'Pantalon 4',
        id: 8,
        precio: 100,
        stock: 20,

        categoria: 'pantalones',
        imagen: '../img/pantalones/pantalon 4.jpeg',
        publicado: true

    },
    //CAMISAS
    {
        titulo: 'Camisa 1',
        id: 9,
        precio: 100,
        stock: 20,

        categoria: 'camisas',
        imagen: '../img/camisas/camisa 1.jpeg',
        publicado: true

    },
    {
        titulo: 'Camisa 2',
        id: 10,
        precio: 100,
        stock: 20,

        categoria: 'camisas',
        imagen: '../img/camisas/camisa 2.jpeg',
        publicado: true

    },
    {
        titulo: 'Camisa 3',
        id: 11,
        precio: 100,
        stock: 20,

        categoria: 'camisas',
        imagen: '../img/camisas/camisa 3.jpeg',
        publicado: true

    },
    {
        titulo: 'Camisa 4',
        id: 12,
        precio: 100,
        stock: 20,

        categoria: 'camisas',
        imagen: '../img/camisas/camisa 4.jpeg',
        publicado: true

    }
    
]

localStorage.setItem("Productos", JSON.stringify(productos));
