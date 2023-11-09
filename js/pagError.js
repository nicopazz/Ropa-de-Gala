const header = document.querySelector('header');
const main = document.querySelector('main');

const paginaError = () => {
        let div = document.createElement('div');
        div.classList.add('row')
        div.innerHTML = `
        <h1 class="text-center text-black">Página no encontrada (errror 404)</h1>
        <div id="div-img" class="col-12 text-center">
        <img class="img-fluid" id="imagenError " src="../img/pagError/Quemando-ropa-1024x687.jpg" style="width: 50rem;" alt="Error 404" />
        </div>
        `
        main.appendChild(div);
}

paginaError();


