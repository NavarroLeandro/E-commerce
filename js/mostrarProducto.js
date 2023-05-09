import Productoo from "./classProductos.js";

let listaProductos = localStorage.getItem("listaProductos");
if (!listaProductos) {
  //si lista peliculas no existe en Localstorage
  listaProductos = [];
} else {
  //si lista peliculas tiene datos, quiero transformarlo en un array de objetos producto
  listaProductos = JSON.parse(listaProductos).map(
    (producto) =>
      new Productoo(
        producto.codigo,
        producto.nombrePrenda,
        producto.descripcion,
        producto.imagen,
        producto.talles,
        producto.anioLanzamiento,
        producto.marca,
        producto.precio
      )
  );
}

console.log(listaProductos);
cargaInicial();

function cargaInicial() {
  //verificar si listaProductos tiene datos
  if (listaProductos.length > 0) {
    //dibujes los datos en la tabla
    listaProductos.map((producto, indice) => crearCard(producto, indice));
  }
  //else seria mostrar un mensaje que no hay datos para cargar o dejo la tabla vacia
}

function crearCard(producto) {
  let datos = document.getElementById("sectionProductos");
  datos.innerHTML += `<article class="col-md-4 col-lg-3 mb-3">
    <div class="card h-100">
        <img src= ${producto.imagen} class="card-img-top" alt="imagen ${producto.nombrePrenda}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombrePrenda}</h5>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary" onclick="detallePelicula('${producto.codigo}')">Detalle</button>
        </div>
      </div>
    </article>`;
}

window.detallePelicula = (codigo) => {
  // console.log(codigo);
  console.log(window.location);
  // console.log(window.location.origin + '/pages/detalle.html?codigo='+codigo)
  window.location.href =
    window.location.origin + "/pages/detalle.html?codigo=" + codigo;
};
