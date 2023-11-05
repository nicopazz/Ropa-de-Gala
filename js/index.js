import productos from './arrayProductos.js';
import navbar from '../componentes/navbar.js';

document.addEventListener('DOMContentLoaded', navbar);


const contenedorCards = document.querySelector('.contenedorCards');
const botonesCategoria = document.querySelectorAll('.asideBotones');
let botonesAgregar = document.querySelectorAll('.productoAgregar');



const insertarCategoria = (productosElegidos) => {
    contenedorCards.innerHTML = '';
    productosElegidos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('card','filtro', 'animate__animated', 'animate__fadeIn');
        div.style = "width: 12rem";
        div.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">$${producto.precio}</p>
                <button class="productoAgregar btn btn-success" id="${producto.id}">Agregar</button>
            </div>
`;
        contenedorCards.appendChild(div);
    });
    actualizarBotones();
    
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

const productosCarritoLs = JSON.parse(localStorage.getItem('productosDelCarrito'));
let productosCarrito;

if (productosCarritoLs) {
    productosCarrito = productosCarritoLs;
}else{
    productosCarrito = [];
}

function agregarAlCarrito (e) {
    let idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosCarrito.some(producto => producto.id === idBoton)) {
        const index = productosCarrito.findIndex(producto => producto.id === idBoton);
        productosCarrito[index].cantidad++;

    } else{
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }
    
    localStorage.setItem('productosDelCarrito', JSON.stringify(productosCarrito));

} 




