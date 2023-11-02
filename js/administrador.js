import { productos } from "./arrayProductos.js";


productos.forEach(producto => {
  const productRow = document.createElement('tr');
  productRow.classList.add('rowTable');
  let imputCheck = ''
  productRow.innerHTML = `

  <td class="text-center ">${producto.titulo}</td>
  <td class="text-center">${producto.categoria.id} </td>
  <td class="text-center">${producto.precio} </td>
  <td><img src = "${producto.imagen}" style= "width:5rem"></td>
  <td class="text-center"><input class="inputCheck" type="checkbox" ${imputCheck} onclick="changeProduct('${producto.titulo}')" ></td>
  <td class="text-center"> 
    <button type="button" class="btn btn-info">Editar</button>
    <button type="button" class="btn btn-danger">Borrar</button>
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
  const imagen = document.getElementById("imagen").value;
  
  const nuevoProducto = {producto,categoria,precio,imagen}

  
  arrNuevosProductos.push(nuevoProducto);
  localStorage.setItem("arrNuevosProductos",JSON.stringify(arrNuevosProductos));
 
}



const button = document.getElementById("formData").addEventListener("submit", datosIngresados);






