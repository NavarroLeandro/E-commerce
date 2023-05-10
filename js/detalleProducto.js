//extraer el parametro
console.log(window.location.search)
const parametroCodigo = new URLSearchParams(window.location.search);
console.log(parametroCodigo.get('codigo'))
//buscar el producto
let listaProducto = JSON.parse(localStorage.getItem('listaProductos')) || [];
const productoBuscado = listaProducto.find((producto) => producto.codigo === parametroCodigo.get('codigo'));

console.log(productoBuscado);

//mostrar los datos del producto
let detalle = document.getElementById('contenedor-detalles');
detalle.innerHTML = `<article class="col-12 col-md-6">
<figure>
    <img id="imagenesDetalles" src="${productoBuscado.imagen}"
        alt=" Imagen de la campera 1987 mujer" class="w-100" />
</figure>
</article>
<article id="contenedor-detalles-derecha" class="container col-12 col-md-6">
<h4 class="mt-3" style="font-size: x-large">
    <b>${productoBuscado.nombrePrenda}</b>
</h4>
<p style="color: grey">(${productoBuscado.stock} en stock)</p>
<p class="mt-3" style="color: black; font-size: medium">
    ${productoBuscado.descripcion}
</p>
<h5 class="mt-3 mb-3" style="font-size: large">$${productoBuscado.precio}</h5>
<div class="dropdownDetalles">
    <div class="selecccion-btn">
        <span style="color: #c7c7c7">SELECCIONAR TALLE</span>
        <i class="bi bi-caret-down-fill" style="color: #c7c7c7"></i>
    </div>
    <div class="content">
        <ul class="opcionesDetalles"></ul>
    </div>
</div>
<div class="modal fade" id="comoMedirseModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="../img/comoMeMido.png" alt="Imagen de como medirse la ropa" class="w-100" />
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="guiaDeTallesModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="../img/camperasDetalles/guiaDeTallesCampera1987.jpg"
                    alt="Imagen de guia de talles de la campera 1987" class="w-100" />
            </div>
        </div>
    </div>
</div>
<div id="talles">
    <button type="button" class="btn btn-sm mb-1" data-bs-target="#guiaDeTallesModal"
        data-bs-toggle="modal">
        <i class="bi bi-zoom-in" id="lupaDetalles"></i>VER GUIA DE TALLES
    </button>
    <button type="button" class="btn btn-sm mb-1" data-bs-target="#comoMedirseModal"
        data-bs-toggle="modal">
        <i class="bi bi-arrows-angle-expand" id="flechasDetalles"></i>COMO
        ME MIDO
    </button>
</div>

<button type="button" id="botonDetalles" class="mt-3">
    AGREGAR AL CARRITO
</button>
<div id="envioDetalles">
    <i class="bi bi-truck" style="font-size: x-large"></i>
    <strong>
        <p class="ms-2 mt-2">
            Envio gratis superando los $25.000
        </p>
    </strong>
</div>
</article>`