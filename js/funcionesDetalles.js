/*FUNCIONES DEL DROPDOWN DE TALLES*/
const dropdownDetalles = document.querySelector('.dropdownDetalles'),
selectBtn = dropdownDetalles.querySelector('.selecccion-btn'),
options = dropdownDetalles.querySelector('.opcionesDetalles');

let talles = ["TALLE S","TALLE M","TALLE L","TALLE XL","TALLE XXL","TALLE 3XL"]
 
function agregarTalle() {
    talles.forEach(talle => {
        let li = `<li onclick="cambiarNombre(this)">${talle}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
agregarTalle();

function cambiarNombre(selectedLi) {
    dropdownDetalles.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener('click', () => {
    dropdownDetalles.classList.toggle('active');
});


/*FUNCIONES DEL BOTON AGREGAR AL CARRITO*/
