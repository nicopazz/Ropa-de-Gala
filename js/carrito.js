/*
import navbar from '../componentes/navbar.js';
import footer from '../componentes/footer.js';

document.addEventListener('DOMContentLoaded', navbar);
document.addEventListener('DOMContentLoaded', footer);
*/
// importar script html

const productosLs = JSON.parse(localStorage.getItem('productosDelCarrito'));
// console.log(productosLs);
const contenedorCarritoDiv = document.getElementById('contenedorCarrito');
const contenedorProducto = document.getElementById('contenedorProducto')
const textoCarritoVacio = document.querySelector('.textoCarritoVacio');
let botonesEliminar = document.querySelectorAll('.botonEliminar')
let contenedorFuncionesCarrito = document.querySelector('.contenedorFuncionesCarrito');
const botonVaciarCarrito = document.getElementById('vaciarCarrito');
let botonComprar = document.querySelector('.botonComprar');
const contenedorTotal = document.querySelector('#total');
const accionComprar = document.querySelector('#compra');
const comprafinalizada = document.getElementById('compraFinalizada');

function cargarProductosCarrito() {
    if (productosLs && productosLs.length > 0) {
        textoCarritoVacio.classList.add('visually-hidden');

        productosLs.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add("d-flex","justify-content-between", 'animate__animated', 'animate__fadeIn');
            div.id = 'productoSeleccionado'
            div.innerHTML = `
            <img id="imgCarrito" style="width: 5rem" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="my-auto">
                <small class="fw-bold">Título</small>
                <p>${producto.titulo}</p>
            </div>
            <div class="my-auto">
                <small class="fw-bold">cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="my-auto">
                <small class="fw-bold">precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="my-auto">
                <small class="fw-bold">Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button id="${producto.id}" class="botonEliminar small my-auto"><i id="iconoEliminar" class="bi bi-trash"></i></button>
            `;
    
            contenedorProducto.append(div);
    
        });
    
    } else{
        contenedorFuncionesCarrito.classList.add('visually-hidden');
    }

    actualizarEliminar();
    actualizarTotal()
}



function actualizarEliminar (){
    botonesEliminar = document.querySelectorAll('.botonEliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
    
}
cargarProductosCarrito();

function eliminarDelCarrito (e){
    const idBoton = e.currentTarget.id;
    // const productoEliminado = productosLs.find(producto => producto.id === idBoton);
    const index = productosLs.findIndex(producto => producto.id === idBoton);
    
    productosLs.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem('productosDelCarrito', JSON.stringify(productosLs));
    window.location.reload();
}

botonVaciarCarrito.addEventListener('click', vaciarCarrito)
function vaciarCarrito (){
    productosLs.length = 0;
    localStorage.setItem('productosDelCarrito', JSON.stringify(productosLs));
    cargarProductosCarrito();
    window.location.reload();
}

function actualizarTotal () {
    const totalCalculado = productosLs.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}



