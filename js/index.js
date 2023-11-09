

const productosLocalS = JSON.parse(localStorage.getItem('Productos')) || [];
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
            </a>        
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">$${producto.precio}</p>
                <button class="productoAgregar btn btn-success" id="${producto.titulo}">Agregar</button>
                <button class="btn mt-2 btn-success"id="${producto.titulo}"><a href="./paginas/detalle.html?id=${producto.id}">Detalles</a></button>
            </div>
`;     
    contenedorCards.appendChild(div);
    });
    actualizarBotones();
    
}
insertarCategoria(productosLocalS);



botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== 'todos') {
            const productoBotonCategoria = productosLocalS.filter(producto => producto.categoria === e.currentTarget.id);
            insertarCategoria(productoBotonCategoria);
        } else {
            insertarCategoria(productosLocalS);
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
    const productoAgregado = productosLocalS.find(producto => producto.titulo === idBoton);
    console.log(productoAgregado);

    
    if(productosCarrito.some(producto => producto.titulo === idBoton)) {
        const index = productosCarrito.findIndex(producto => producto.titulo === idBoton);
        productosCarrito[index].cantidad++;

    } else{
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }
    
    localStorage.setItem('productosDelCarrito', JSON.stringify(productosCarrito));

} 



//FUNCION PARA EL BUSCADOR DE PRODUCTOS....
const btnBuscador = document.getElementById('botonBuscador');
btnBuscador.addEventListener('click', buscar)

function buscar (e){
    e.preventDefault()


    let buscador = document.getElementById('inputBuscador').value.toLowerCase();

    if (buscador) {

        let buscadorCategorias = productosLocalS.filter(producto => producto.categoria === buscador); 

        insertarCategoria(buscadorCategorias);
    } else {
        insertarCategoria(productosLocalS);
    }
    }
    // if (buscador === 'pantalones', 'pantalon') {
    //     let buscadorCategorias = productosLocalS.filter(producto => producto.categoria === buscador);
    //     insertarCategoria(buscadorCategorias);

    // } if (buscador === 'sacos', 'saco') {
    //     let buscadorCategorias = productosLocalS.filter(producto => producto.categoria === buscador);
    //     insertarCategoria(buscadorCategorias);
    // } 
    

