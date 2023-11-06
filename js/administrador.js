
const arrNuevosProductos = JSON.parse(localStorage.getItem("Productos"));


arrNuevosProductos.forEach(producto => {
  const productRow = document.createElement('tr');
  productRow.classList.add('rowTable');
  let imputCheck = '';
  
  productRow.innerHTML = `
  <td class="text-center ">${producto.titulo}</td>
  <td class="text-center">${producto.categoria} </td>
  <td class="text-center">${producto.precio} </td>
  <td class="text-center">${producto.stock} </td>
  <td><img src = "${producto.imagen}" style= "width:5rem"></td>
  <td class="text-center"><input class="inputCheck" type="checkbox" ></td>
  <td class="text-center"> 
    <button type="button" class="btn btn-info" id="editButton" >Editar</button>
    <button type="button" class="btn btn-danger" id="deleteProducto" >Borrar</button>
  </td>
  `
  
  document.querySelector('tbody').appendChild(productRow);
  
});


const datosIngresados = (e) => {
    e.preventDefault();
    
    const titulo = document.getElementById("nuevoProducto").value;
    const categoria = document.getElementById("categoria").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;
    const imagen = document.getElementById("imagen").value;
  
    const nuevoProducto = {titulo,categoria,precio,stock,imagen}

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

function clear() {
  document.getElementById("nuevoProducto").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("imagen").value = "";
}
/*
function mostrarNuevosProductos() {

  const nuevosProductos = JSON.parse(localStorage.getItem('Productos'));
  
  if (nuevosProductos === nuevosProductos[12]) {
    
    nuevosProductos.forEach(product => {
    const productRow = document.createElement('tr');
    productRow.classList.add('rowTable');
    let imputCheck = ''
    
    productRow.innerHTML = `

    <td class="text-center">${product.titulo}</td>
    <td class="text-center">${product.categoria.id}</td>
    <td class="text-center">${product.precio}</td>
    <td class="text-center">${product.stock}</td>
    <td><img src = "${product.imagen}" style= "width:5rem"></td>  
    <td class="text-center"> 
    <button type="submit" class="btn btn-info" id="editButton" >Editar</button>
    <button type="submit" class="btn btn-danger" id="deleteProducto" >Borrar</button>
  </td>
    `
    
    document.querySelector('tbody').appendChild(productRow);
    
    });

  }
}
*/

const borrarProducto = () => {
  
  alert('click');
  
 
}

const editarProducto = () => {
  
  alert('click');
  
 
}


const botonEditar = document.getElementById("editButton").addEventListener("click",editarProducto);
const botonBorrar = document.getElementById("deleteProducto").addEventListener("click",borrarProducto);
const button = document.getElementById("formData").addEventListener("submit",datosIngresados);
//mostrarNuevosProductos();

