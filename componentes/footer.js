const contenedorFooter = document.querySelector('footer');

const footer = () =>{

    return ( contenedorFooter.innerHTML= 
        `
        <div class="container-footer py-3 row">
            <div class="textoTitulo col-sm-4">
                <h4>Rolling Shop</h4>
            </div>
            <div class="infoFooter d-flex flex-column col-sm-4 my-auto">
                <a class="mx-0 text-center" href="../paginas/acercaDeNosotros.html"
                ><i class="bi bi-person-vcard"></i>
                Sobre nosotros
                </a>
                <a class="mx-0 text-center" href="../paginas/pagError.html"><i class="bi bi-people-fill"></i></i>Contáctanos
                </a>
                <a class="mx-0 text-center" href="../paginas/pagError.html"><i class="bi bi-geo-alt-fill"></i>Locales
                </a>
                <a class="mx-0 text-center" href="../paginas/pagError.html"><i class="bi bi-credit-card"></i>Promociones bancarias
                </a>
            </div>
            <div class="iconosFooter col-sm-4 my-sm-auto d-flex justify-content-evenly justify-content-sm-around mt-3">
                <a href="../paginas/pagError.html">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="../paginas/pagError.html">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="../paginas/pagError.html">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="../paginas/pagError.html">
                    <i class="bi bi-youtube"></i>
                </a>
            </div>
        </div>
        `

    )
}

footer();


