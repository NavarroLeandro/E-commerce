import producto from "./classProductos.js";
import { sumarioValidaciones } from "./helpers.js";

const btnEditar = document.querySelector("#btnEditar");
const btnAgregar = document.querySelector("#btnAgregar");
const nombrePrenda = document.getElementById("nombrePrenda");
const codigo = document.getElementById("codigo");
const descripcion = document.getElementById("descripcion");
const anioLanzamiento = document.getElementById("anio");
const marca = document.getElementById("marca");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const talles = document.getElementById("talles");
const msjFormulario = document.getElementById("msjFormulario");
const modalProducto = new bootstrap.Modal(
  document.querySelector("#modalAgregar")
);
const formularioProducto = document.getElementById("formAdministrarPrenda");
let estadoProducto = true;
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

cargaInicial();

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.forEach((producto, indice) => crearFila(producto, indice));
  }
}

function crearFila(producto, indice) {
  let datosTablaProducto = document.querySelector("tbody");
  datosTablaProducto.innerHTML += `<tr>
    <th>${indice + 1}</th>
    <td>${producto.nombrePrenda}</td>
    <td class="text-truncate">${producto.descripcion}</td>
    <td class="text-truncate">${producto.imagen}</td>
    <td>${producto.talles}</td>
    <td>
        <button class="bi bi-pencil-square btn btn-warning" id="btnEditar" onclick="editarProducto('${
            producto.codigo
        }')"></button>
        <button class="bi bi-x-square btn btn-danger" onclick="borrarProducto('${
            producto.codigo
        }')"></button>
    </td>
  </tr>`;
}

function mostrarModalProducto() {
  estadoProducto = true;
  modalProducto.show();
  console.log("aqui vamos a crear un producto");
}

function cargarProducto(e) {
  e.preventDefault();
  if (estadoProducto) {
    crearProducto();
  } else {
    actualizarProducto();
  }
}

function crearProducto() {
  let sumario = sumarioValidaciones(
    nombrePrenda.value,
    descripcion.value,
    imagen.value,
    talles.value,
    anioLanzamiento.value,
    marca.value,
    precio.value,
  );
  if (sumario.length === 0) {
    console.log("creando el producto...");
    //crear la pelicula
    let nuevoProducto = new producto(
      undefined,
      nombrePrenda.value,
      descripcion.value,
      imagen.value,
      talles.value,
      anioLanzamiento.value,
      marca.value,
      precio.value,
    );
    listaProductos.push(nuevoProducto);
    console.log(nuevoProducto);
    guardarEnLocalStorage();
    limpiarFormularioProductos();
    modalProducto.hide();
    let indiceProducto = listaProductos.length - 1;
    crearFila(nuevoProducto, indiceProducto);
    Swal.fire(
      "Producto creado",
      "El producto ingresado fue creado correctamente",
      "success"
    );
  } else {
    msjFormulario.className = "alert alert-danger mt-3";
    msjFormulario.innerHTML = sumario;
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
}

function limpiarFormularioProductos() {
  formularioProducto.reset();
}

window.borrarProducto = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro de borrar el producto?",
    text: "No se puede revertir este proceso posteriomente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {

      console.log(codigo);
      console.log("aqui borro el producto");

      let posicionProducto = listaProductos.findIndex(
        (producto) => producto.codigo === codigo
      );
      console.log(posicionProducto);

      listaProductos.splice(posicionProducto, 1);

      guardarEnLocalStorage();

      let datosTablaProducto = document.querySelector("tbody");

      datosTablaProducto.removeChild(datosTablaProducto.children[posicionProducto]);

      Swal.fire(
        "Borramos el producto",
        "El producto seleccionado fue eliminado correctamente",
        "success"
      );
    }
  });
};

window.editarProducto= (codigoUnico) => {

  const producto = listaProductos.find((produc) => produc.codigo === codigoUnico);
  console.log(producto);
  modalProducto.show();

  codigo.value = producto.codigo;
  nombrePrenda.value = producto.nombrePrenda;
  descripcion.value = producto.descripcion;
  imagen.value = producto.imagen;
  talles.value = producto.talles;
  anioLanzamiento.value = producto.anioLanzamiento;
  marca.value = producto.marca;
  precio.value = producto.precio;


  estadoProducto= false;      
};


function actualizarProducto(){

  let posicionProducto = listaProductos.findIndex(produc => produc.codigo === codigo.value );

listaProductos[posicionProducto].nombrePrenda = nombrePrenda.value;
listaProductos[posicionProducto].descripcion = descripcion.value;
listaProductos[posicionProducto].imagen = imagen.value;
listaProductos[posicionProducto].talles = talles.value;
listaProductos[posicionProducto].anioLanzamiento = anioLanzamiento.value;
listaProductos[posicionProducto].marca = marca.value;
listaProductos[posicionProducto].precio = precio.value;


guardarEnLocalStorage();
//mostrar un msj
Swal.fire(
  "Producto editado",
  "El producto seleccionado fue editado correctamente",
  "success"
  );
  //se vea en la tabla
  let datosTablaProducto = document.querySelector("tbody");
  datosTablaProducto.children[posicionProducto].children[1].innerText = nombrePrenda.value;
  datosTablaProducto.children[posicionProducto].children[2].innerText = descripcion.value;
  datosTablaProducto.children[posicionProducto].children[3].innerText = imagen.value;
  datosTablaProducto.children[posicionProducto].children[4].innerText = talles.value;
  //limpiar el form
  limpiarFormularioProductos()
  //cerrar el modal
  modalProducto.hide()
}


btnAgregar.addEventListener("click", mostrarModalProducto);
formularioProducto.addEventListener("submit", cargarProducto);

/* if (!listaProductos) {
  listaProductos = [];
} else {
  listaProductos = JSON.parse(listaProductos).map(
    (productito) =>
      new producto(
        producto.codigo,
        producto.nombrePrenda,
        producto.descripcion,
        producto.imagen,
        producto.talles,
        producto.anioLanzamiento,
        producto.marca,
        producto.precio,
      )
  );
}

console.log(listaProductos);

cargaInicial(); */













