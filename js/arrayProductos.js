const productos = [
    //SACOS
    {
        titulo: 'Saco 1',
        id: 'saco-01',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'sacos'
        },
        imagen: '../img/sacos/saco 1.jpeg'

    },
    {
        titulo: 'Saco 2',
        id: 'saco-02',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'sacos'
        },
        imagen: '../img/sacos/saco 2.jpeg'

    },
    {
        titulo: 'Saco 3',
        id: 'saco-03',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'sacos'
        },
        imagen: '../img/sacos/saco 3.jpeg'

    },
    {
        titulo: 'Saco 4',
        id: 'saco-04',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'sacos'
        },
        imagen: '../img/sacos/saco 4.jpeg'

    },
    //PANTALONES
    {
        titulo: 'Pantalon 1',
        id: 'pantalon-01',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'pantalones'
        },
        imagen: '../img/pantalones/pantalon 1.jpeg'

    },
    {
        titulo: 'Pantalon 2',
        id: 'pantalon-02',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'pantalones'
        },
        imagen: '../img/pantalones/pantalon 2.jpeg'

    },
    {
        titulo: 'Pantalon 3',
        id: 'pantalon-03',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'pantalones'
        },
        imagen: '../img/pantalones/pantalon 3.jpeg'

    },
    {
        titulo: 'Pantalon 4',
        id: 'pantalon-04',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'pantalones'
        },
        imagen: '../img/pantalones/pantalon 4.jpeg'

    },
    //CAMISAS
    {
        titulo: 'Camisa 1',
        id: 'camisa-01',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'camisas'
        },
        imagen: '../img/camisas/camisa 1.jpeg'
    },
    {
        titulo: 'Camisa 2',
        id: 'camisa-02',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'camisas'
        },
        imagen: '../img/camisas/camisa 2.jpeg'
    },
    {
        titulo: 'Camisa 3',
        id: 'camisa-03',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'camisas'
        },
        imagen: '../img/camisas/camisa 3.jpeg'
    },
    {
        titulo: 'Camisa 4',
        id: 'camisa-04',
        precio: 100,
        categoria: {
            nombre:'trajes',
            id:'camisas'
        },
        imagen: '../img/camisas/camisa 4.jpeg'
    }
    
]
export default productos;
export {productos};
localStorage.setItem('Productos', JSON.stringify(productos));



