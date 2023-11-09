document.addEventListener('DOMContentLoaded', function() {

  const getProductos = localStorage.getItem("Productos");
  const productos = JSON.parse(getProductos);
  const urlParam = new URLSearchParams(window.location.search);
  const productoId = urlParam.get('id');
  
  const producto = productos.find(x => x.id === parseInt(productoId));

  if(producto) {

    const image = document.getElementById('producto-img');
    const titulo = document.getElementById('producto-title');
    const precio = document.getElementById('producto-price');
    const descripcion = document.getElementById('producto-info');
    const talleList = document.getElementById('talleUl');
    const id = document.getElementById('producto-id');

/*     const stock = document.getElementById('producto-stock'); */

    const talles = producto.talles;

    talles.forEach((talle) => {
        const talleLi = document.createElement('li');
        talleLi.textContent = `${talle} `;
        talleList.appendChild(talleLi);
    });
    id.textContent = "#"+producto.id;
    image.src = producto.imagen;
    image.alt = producto.titulo;
    titulo.textContent = producto.titulo;
    precio.textContent = `$${producto.precio}`;
    descripcion.textContent = producto.descripcion;
/*     stock.textContent = producto.titulo;  */

  } else {
    console.log('Producto no encontrado');
  }
})