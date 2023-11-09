
const productosLocalS = JSON.parse(localStorage.getItem('Productos')) || [];
const header = document.querySelector('header');



const navbar = () => {
    const user = JSON.parse(localStorage.getItem('userLogged'))|| undefined;
    // console.log(user[0].username);
    
    return (header.innerHTML = `
    <nav class="navbar navbar-expand-lg py-3 fixed-top border border-secondary navbar-dark" id="nav">
        <div class="container-fluid justify-content-end">
            <button class="navbar-toggler bg-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent">
                <span><img id="botonHamburguesaHomero" src="../img/homero/que elegancia la de francia.jpeg" alt="homero"></span>
            </button>
            <section class="offcanvas offcanvas-start bg-dark" id="navbarSupportedContent"    tabindex="-1">
                <div class="offcanvas-header" data-bs-theme="dark">
                    <h5 class="offcanvas-title text-white">Menu</h5>
                    <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas">
                    </button>
                </div>

                <h1 id="h1Style" >ROLLING SHOP</h1>

                <div class="offcanvas-body d-flex flex-column px-0">
                    <ul class="navbar-nav fs-5 justify-content-end">
                        <ol class="nav-item p-3 py-md-1">
                            <hr class=" ocultos " style="color: white;">
                        </ol>
                            <p class="textoCategoriaNav text-white text-center"> Categorías </p>

                        <ol class=" ocultos text-white botonesCanvasOl">
                            <button class="fw-bold botonesCanvas text-white" id="todos"><i class="bi bi-arrow-right-circle-fill me-1"></i>Todos los productos</button>
                        </ol>

                        <ol class=" ocultos text-white botonesCanvasOl">
                            <button id="sacos" class="fw-bold botonesCanvas animate__animated animate__backInDown text-white"><i class="bi bi-arrow-right-circle-fill me-1"></i>Sacos</button>
                        </ol>

                        <ol class=" ocultos text-white botonesCanvasOl">
                            <button id="pantalones" class="fw-bold botonesCanvas animate__animated animate__backInDown text-white"><i class="bi bi-arrow-right-circle-fill me-1"></i>Pantalones</button>
                        </ol>

                        <ol class=" ocultos text-white botonesCanvasOl">
                            <a href="./index.html">
                                <button id="camisas" class="fw-bold botonesCanvas animate__animated animate__backInDown text-white"><i class="bi bi-arrow-right-circle-fill me-1"></i>Camisas</button>
                            </a>
                        </ol>
                            <hr style="color: white;">
                        <li class="nav-item p-3 py-md-1 d-flex justify-content-around">
                                
                                ${user 
                                    ? `
                                    <li id="bienvenidoUsuario">
                                    <strong style="color: white;"> Bienvenido ${user[0].username}</strong>
                                    </li>
                                    
                                    ` 
                                    : `
                                    <a href="../paginas/login.html">

                                    <button 
                                    type="button" 
                                    class="btn btn-outline-secondary fw-bold text-white animate__animated animate__backInDown"><i class="bi bi-person-fill me-3" ></i>
                                    Ingresar
                                    </button>
                                    </a>
                                    <a href="../paginas/signup.html">
                                    <button 
                                    type="button" 
                                    class="registroNav btn btn-outline-secondary fw-bold text-white animate__animated animate__backInDown">
                                    Registrate

                                    </button>
                                    </a>
                                    `
                                }
                                ${user
                                    ? `
                                    <button id="cerrarSesion" class="btn btn-outline-light fw-bold ms-2 ">
                                    <i class="bi bi-box-arrow-right"></i>
                                    </button>
                                    `
                                    : ""
                                }
                                ${user ?  
                                      `
                                    <a href="../paginas/administrador.html"><button id="admin" class="btn btn-outline-light fw-bold ms-2 ">
                                    <i class="bi bi-gear"></i>
                                    </button></a>
                                    `
                                    : ""
                                }
                            

                        </li>
                            <hr class=" ocultos " style="color: white;">
                        <li class="nav-item p-3 py-md-1">
                            <a href="./paginas/carrito.html">
                            <button id="carrito" class="btn btn-success animate__animated animate__backInDown"><i class="bi bi-cart-check"></i>
                                Carrito
                            </button>
                            </a>
                        </li>

                        <li class="nav-item p-3 py-md-1">
                        <a href="../index.html">
                        <button id="inicio" class="btn btn-warning animate__animated animate__backInDown"><i class="bi bi-house"></i>
                            Inicio
                        </button>
                        </a>
                        </li>

                        <li class="nav-item p-3 py-md-1 ml-5" id="search-login">
                                <a class="ms-4" href="/pages/login.html">
                                    <i class="fa-solid fa-user fa-xl" style="color: #ffffff"></i>
                                </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </nav>
    `)
    
}
navbar();


/*
//tratndo de hacer que funcionen los botones laterales del canvas
function botonesLaterales (){
     const botonesCanvas = document.querySelectorAll('.botonesCanvas');
    console.log(botonesCanvas);
     botonesCanvas.forEach(boton => {
       boton.addEventListener('click', (e) => {
            if (e.currentTarget.id !== 'todos') {
                const productoBotonCategoria = productosLocalS.filter(producto => producto.categoria === e.currentTarget.id);
                insertarCategoria(productoBotonCategoria);
            } else {
                 insertarCategoria(productosLocalS);
             }
         })
    })

 }
botonesLaterales();
*/

//FUNCION PARA CERRAR SESION
document.addEventListener('DOMContentLoaded', function (){
    const botonCerrarSesion = document.getElementById('cerrarSesion');
    
    botonCerrarSesion.addEventListener("click", function () {
        localStorage.removeItem("userLogged");
        alert('Sesión cerrada');
        window.location.reload();
    });
    
})


//tratndo de hacer que funcionen los botones laterales del canvas
// function botonesLaterales (){
//     const botonesCanvas = document.querySelectorAll('.botonesCanvas');

//     botonesCanvas.forEach(boton => {
//         boton.addEventListener('click', (e) => {
//             if (e.currentTarget.id !== 'todos') {
//                 const productoBotonCategoria = productosLocalS.filter(producto => producto.categoria === e.currentTarget.id);
//                 insertarCategoria(productoBotonCategoria);
//             } else {
//                 insertarCategoria(productosLocalS);
//             }
//         })
//     })

// }

navbar();

//FUNCION PARA CERRAR SESION
document.addEventListener('DOMContentLoaded', function (){
    const botonCerrarSesion = document.getElementById('cerrarSesion');

    botonCerrarSesion.addEventListener("click", function () {
        localStorage.removeItem("userLogged");
        alert('Sesión cerrada');
        window.location.reload();
    });
})















