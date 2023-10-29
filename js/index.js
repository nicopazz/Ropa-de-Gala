import productos from './arrayProductos.js';


const contenedorCards = document.querySelector('.contenedorCards');
const botonesCategoria = document.querySelectorAll('.asideBotones');
let botonesAgregar = document.querySelectorAll('.productoAgregar');


const insertarCategoria = (productosElegidos) => {
    contenedorCards.innerHTML = '';
    productosElegidos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.style = "width: 12rem";
        div.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.precio}</p>
                <button class="productoAgregar btn btn-success" id="${producto.id}">Agregar</button>
            </div>
`;
        contenedorCards.appendChild(div);
    });
    actualizarBotones();
    console.log(botonesAgregar);
}
insertarCategoria(productos);


botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== 'todos') {
            const productoBotonCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            insertarCategoria(productoBotonCategoria);
        } else {
            insertarCategoria(productos);
        }
        

    })
})


//FUNCIONES PARA AGREGAR LOS PRODUCTOS AL CARRITO
function actualizarBotones (){
    botonesAgregar = document.querySelectorAll('.productoAgregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    });
    
}

const productosCarrito = [];

function agregarAlCarrito (e) {
    let idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    console.log(productosCarrito.some(producto => producto.id === idBoton ))
    productosCarrito.push(productoAgregado);
    
    localStorage.setItem('productosDelCarrito', JSON.stringify(productosCarrito));
    
} 