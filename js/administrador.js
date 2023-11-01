import { productos } from "./arrayProductos";

const productos = JSON.parse(localStorage.getItem('Productos'));

const form = document.getElementById('formData')
const nuevoProducto = document.getElementById('nuevoProducto');
const categoria = document.getElementById('categoria');
const imagen = document.getElementById('imagen');

let newProduct = JSON.parse(localStorage.getItem('form')) || [];

form.addEventListener('submit', function(event){
  event.preventDefault();

  const productoNuevo = nuevoProducto.value;
  const category = categoria.value;
  const img = imagen.value;

  if (productoNuevo && category && img) {
    const newObjetProduct = {productoNuevo,category,img};
    newProduct.push(newObjetProduct);
    saveProductLocalStorage();
    renderTable();
    form.reset();
  }

})

function saveProductLocalStorage(){
  localStorage.setItem("formData", JSON.stringify(newProduct));
}

function renderTable(){
  tableBody.innerHTML = '';

  newProduct.forEach(function (item, index){
    const row = document.createElement('tr');
    const productCelda = document.createElement('td');
    const categoriaCelda = document.createElement('td');
    const imagenCelda = document.createElement('td');
    const publishCelda = document.createElement('td');
    const accionCelda = document.createElement('imput');
    const editButton = document.createElement('button');
    const deleteButon = document.createElement('button');

    productCelda.textContent = item.productoNuevo;
    categoriaCelda.textContent = item.categoria;
    imagenCelda.textContent = item.img;
    editButton.textContent = 'Edit';
    deleteButon.textContent = 'Delete';

    accionCelda.appendChild(editButton);
    accionCelda.appendChild(deleteButon);

    row.appendChild(productCelda);
    row.appendChild(categoriaCelda);
    row.appendChild(imagenCelda);

    tableBody.appendChild(row);

  });
}

renderTable();