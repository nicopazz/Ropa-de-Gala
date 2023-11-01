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
    <button type="button" class="btn btn-outline-info">Editar</button>
    <button type="button" class="btn btn-outline-danger">Borrar</button>
  </td>
  `
  
  document.querySelector('tbody').appendChild(productRow);
});








