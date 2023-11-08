

const arrNuevosProductos = JSON.parse(localStorage.getItem("Productos")) || [];

const datosIngresados = (e) => {
    e.preventDefault();
    
    const titulo = document.getElementById("nuevoProducto").value;
    const categoria = document.getElementById("categoria").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;
    const imagen = document.getElementById("imagen").value;
    
    let lastCode = 0;
    
    if(localStorage.getItem('Productos')){
      lastCode = ((JSON.parse(localStorage.getItem('Productos'))).pop()).id
    }
    const nuevoProducto = {titulo,categoria,precio,stock,imagen,id:parseInt(lastCode) + 1}

  if (titulo && categoria && precio && stock && imagen) {
    arrNuevosProductos.push(nuevoProducto);
    localStorage.setItem("Productos",JSON.stringify(arrNuevosProductos));
    alert("Producto cargado correctamente");
    clear();
    location.reload();
  }else{
    alert('Debe completar todos los campos');
    clear();
  }
}
const button = document.getElementById("formData").addEventListener("submit",datosIngresados);

const check = (e) => {
  e.preventDefault();
  console.log(e);
}

function borrar(e){
  let indexArray;
  arrNuevosProductos.forEach((producto,index) => {
    if (producto.id === e) {
      indexArray=index;
    }
  });
  arrNuevosProductos.splice(indexArray,1);
  localStorage.setItem('Productos',JSON.stringify(arrNuevosProductos));
  location.reload();
}

function editar (id) {
 
  console.log(id);
}



arrNuevosProductos.forEach(producto => {

      const productRow = document.createElement('tr');
      productRow.classList.add('rowTable');
      let inputCheck = '';
    if(producto.publicado){
     inputCheck = 'checked'
      }
      productRow.innerHTML = `
      <td class="text-center ">${producto.titulo}</td>
      <td class="text-center">${producto.categoria} </td>
      <td class="text-center">${producto.precio} </td>
      <td class="text-center">${producto.stock} </td>
      <td><img src = "${producto.imagen}" style= "width:5rem"></td>
      <td class="text-center"><input ${inputCheck} class="inputCheck" type="checkbox" id="check" ></td>
      <td class="text-center" > 
        <button type="button" class="btn btn-info" onclick="editar(${producto.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" >Editar</button>
        
        <!-- Modal -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Producto</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id="formData">
      <div class="mb-3">
        <label for="nuevoProducto" class="form-label">Producto</label>
        <input type="text" class="form-control" id="nuevoProducto">
      </div>
      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria</label>
        <select class="form-select" aria-label="Default select example" id="categoria" >
          <option value="" disabled selected >Seleccione una opcion</option>
          <option value="Sacos">Sacos</option>
          <option value="Pantalones">Pantalones</option>
          <option value="Camisas">Camisas</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="precio" class="form-label">Precio</label>
        <input type="text" class="form-control" id="precio">
      </div>
      <div class="mb-3">
        <label for="stock" class="form-label">Stock</label>
        <input type="text" class="form-control" id="stock">
      </div>
      <div class="mb-3">
        <label for="imagen" class="form-label">Imagen</label>
        <input type="url" class="form-control" id="imagen">
      </div>
  </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>

        <button type="button" class="btn btn-danger" onclick="borrar(${producto.id})" >Borrar</button>
      </td>
      `
      
      document.querySelector('tbody').appendChild(productRow);
  
});


function clear() {
  document.getElementById("nuevoProducto").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("imagen").value = "";
}


