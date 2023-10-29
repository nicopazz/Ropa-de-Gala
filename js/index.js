import productos from './arrayProductos.js';


const contenedorCards = document.querySelector('.contenedorCards');
const botonesCategoria = document.querySelectorAll('.asideBotones');


const insertar = (productosElegidos) => {
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
                <button class="btn btn-success">Agregar</button>
            </div>
`;
contenedorCards.appendChild(div);
    });
}
insertar(productos);


botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== 'todos') {
            const productoBotonCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            insertar(productoBotonCategoria);
        } else {
            insertar(productos);
        }
        

    })
})