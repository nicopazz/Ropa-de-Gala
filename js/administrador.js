import { productos } from "./arrayProductos.js";


productos.forEach(producto => {
  
  const productRow = document.createElement('tr');
  productRow.classList.add('rowTable');
  let imputCheck = ''
  
  productRow.innerHTML = `

  <td class="text-center ">${producto.titulo}</td>
  <td class="text-center">${producto.categoria.id} </td>
  <td class="text-center">${producto.precio} </td>
  <td class="text-center">${producto.stock} </td>
  <td><img src = "${producto.imagen}" style= "width:5rem"></td>
  <td class="text-center"><input class="inputCheck" type="checkbox" ${imputCheck} onclick="changeProduct('${producto.titulo}')" ></td>
  <td class="text-center"> 
    <button type="button" class="btn btn-info" id="editButton" >Editar</button>
    <button type="button" class="btn btn-danger" id="deleteButton" >Borrar</button>
  </td>
  `
  
  document.querySelector('tbody').appendChild(productRow);
  
});


const arrNuevosProductos = JSON.parse(localStorage.getItem("arrNuevosProductos")) || [];

const datosIngresados = (e) => {
 e.preventDefault();

  const producto = document.getElementById("nuevoProducto").value;
  const categoria = document.getElementById("categoria").value;
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").value;
  const imagen = document.getElementById("imagen").value;
  
  const nuevoProducto = {producto,categoria,precio,stock,imagen}

  
  arrNuevosProductos.push(nuevoProducto);
  localStorage.setItem("arrNuevosProductos",JSON.stringify(arrNuevosProductos));
  alert("Producto cargado correctamente");
  clear();
  location.reload();
 
}

function clear() {
  document.getElementById("nuevoProducto").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("imagen").value = "";
}

function mostrarNuevosProductos() {
  const nuevosProductos = JSON.parse(localStorage.getItem('arrNuevosProductos'));
  
  nuevosProductos.forEach(product => {
  const productRow = document.createElement('tr');
  productRow.classList.add('rowTable');
  let imputCheck = ''
  
  productRow.innerHTML = `

  <td class="text-center ">${product.producto}</td>
  <td class="text-center">${product.categoria} </td>
  <td class="text-center">${product.precio} </td>
  <td class="text-center">${product.stock} </td>
  <td><img src = "${product.imagen}" style= "width:5rem"></td>
  <td class="text-center"><input class="inputCheck" type="checkbox" ${imputCheck} onclick="changeProduct('${product.titulo}')" ></td>
  <td class="text-center"> 
    <button type="button" class="btn btn-info">Editar</button>
    <button type="button" class="btn btn-danger">Borrar</button>
  </td>
  `
  
  document.querySelector('tbody').appendChild(productRow);
  
  });
}


const button = document.getElementById("formData").addEventListener("submit", datosIngresados);
mostrarNuevosProductos();