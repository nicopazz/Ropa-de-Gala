import { productos } from "./arrayProductos.js";


productos.forEach(producto => {
  const productRow = document.createElement('tr');
  productRow.classList.add('rowTable');

  productRow.innerHTML = `

  <th>${producto.titulo}</th>
  <td>${producto.categoria.id} </td>
  <td>${producto.precio} </td>
  <td><img src = "${producto.imagen}" style= "width:5rem"></td>
  <td></td>
  <td></td>

  `
  
  document.querySelector('tbody').appendChild(productRow);
});








