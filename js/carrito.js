const productosLs = JSON.parse(localStorage.getItem('productosDelCarrito'));
console.log(productosLs);
const contenedorCarritoDiv = document.getElementById('contenedorCarrito');
const contenedorProducto = document.getElementById('contenedorProducto')
const textoCarritoVacio = document.querySelector('.textoCarritoVacio');
let botonesEliminar = document.querySelectorAll('.botonEliminar')
let contenedorFuncionesCarrito = document.querySelector('.contenedorFuncionesCarrito');


function cargarProductosCarrito() {
    if (productosLs) {
        textoCarritoVacio.classList.add('visually-hidden');
        // contenedorProducto.classList.remove('disabled');
        contenedorFuncionesCarrito.classList.remove('visually-hidden');

    
        productosLs.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add("d-flex","justify-content-between");
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
    
    }

    actualizarEliminar();
    
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
    
    localStorage.setItem()
}








// `
// <div>
//     <img id="imgCarrito" style="width: 4rem" src="" alt="">
// </div>
// <div class="my-auto">
//     <small>${producto.titulo}</small>
//     <p>aa</p>
// </div>
// <div class="my-auto">
//     <small>cantidad</small>
//     <p>0</p>
// </div>
// <div class="my-auto">
//     <small>precio</small>
//     <p>aa</p>
// </div>
// <div class="my-auto">
//     <small>subtotal</small>
//     <p>0</p>
// </div>
// <button id="aa" class="small my-auto"><i id="iconoEliminar" class="bi bi-trash"></i></button>
// `