const header = document.querySelector('header');


const navbar = () => {
    const user = JSON.parse(localStorage.getItem('userLogged'))|| undefined;
    // console.log(user[0].username);
    return (header.innerHTML = `
    <nav class="navbar navbar-expand-lg py-3 fixed-top border border-secondary navbar-dark" id="nav">
        <div class="container-fluid justify-content-end">
            <button class="navbar-toggler bg-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent">
                <span><img id="botonHamburguesaHomero" src="./img/homero/que elegancia la de francia.jpeg" alt=""></span>
            </button>
            <section class="offcanvas offcanvas-start bg-dark" id="navbarSupportedContent"    tabindex="-1">
                <div class="offcanvas-header" data-bs-theme="dark">
                    <h5 class="offcanvas-title text-white">Menu</h5>
                    <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas">
                    </button>
                </div>
                <div class="offcanvas-body d-flex flex-column px-0">
                    <ul class="navbar-nav fs-5 justify-content-end">
                        <li class="nav-item p-3 py-md-1">
                            <hr class=" ocultos " style="color: white;">
                        </li>
                            <p class="textoCategoriaNav text-white text-center"> Categorías </p>
                        <li id="todos"  class=" ocultos text-white asideBoton"><i class="bi bi-arrow-right-circle-fill"></i>
                            Todos los productos
                        </li>
                        <li id="sacos" class=" ocultos text-white asideBoton"><i class="bi bi-arrow-right-circle-fill"></i>
                            Sacos
                        </li>
                        <li id="pantalones" class=" ocultos text-white asideBoton"><i class="bi bi-arrow-right-circle-fill"></i>
                            Pantalones
                        </li>
                        <li id="camisas" class=" ocultos text-white asideBoton"><i class="bi bi-arrow-right-circle-fill"></i>
                            Camisas
                        </li>
                            <hr style="color: white;">
                        <li class="nav-item p-3 py-md-1 d-flex justify-content-around">
                                
                                ${user 
                                    ? `
                                    <li id="bienvenidoUsuario">
                                    <strong style="color: white;"> Bienvenido ${user[0].username}</strong>
                                    </li>
                                    
                                    ` 
                                    : `
                                    <a href="./paginas/login.html">
                                    <button 
                                    type="button" 
                                    class="btn btn-outline-secondary fw-bold text-white animate__animated animate__backInDown"><i class="bi bi-person-fill me-3" ></i>
                                    Ingresar
                                    </button>
                                    </a>
                                    <a href="./paginas/signup.html">
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
                        </li>
                            <hr class=" ocultos " style="color: white;">
                        <li class="nav-item p-3 py-md-1">
                            <a href="./paginas/carrito.html">
                            <button id="carrito" class="btn btn-success animate__animated animate__backInDown"><i class="bi bi-cart-check"></i>
                                Carrito
                            </button>
                            </a>
                        </li>
                        <li id="search-login">
                            <form id="buscador" class="d-flex animate__animated animate__backInDown">
                                    <input
                                    class="form-control me-2"
                                    type="search"
                                    placeholder="¿Que busca?"
                                    aria-label="Buscar"
                                    required
                                    maxlength="15"
                                    minlength="3"
                                    
                                    />
                                    <button class="btn btn-outline-light fw-bold" type="submit">
                                        <i class="bi bi-search"></i>
                                    </button>
                            </form>
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




// const botonesCategoria = document.querySelectorAll('.asideBoton');
// console.log(botonesCategoria);

// botonesCategoria.forEach(boton => {
//     boton.addEventListener('click', (e) => {

//         botonesCategoria.forEach(boton => boton.classList.remove('active'));

//         e.currentTarget.classList.add('active');

//         if (e.currentTarget.id !== 'todos') {
//             const productoBotonCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
//             insertarCategoria(productoBotonCategoria);
//         } else {
//             insertarCategoria(productos);
//         }

//     })
// })

export default navbar;

