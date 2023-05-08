export function cantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrecto');
        return false;
    }
}


function validarURLImagen(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if(patron.test(value)){
        console.log('url valida');
        return true;
    }else{
        console.log('url invalida');
        return false;
    }
}

function validarPrecio(precio){
    if(precio > 50 && precio < 1000000){
        console.log('Precio correcto');
        return true;
    }else{
        console.log('precio incorrecto');
        return false;
    }
}


// //agregar la validacion año 1985 - (año actual +1)
function validarAnio(value){
     console.log(value)
     const anioActual = new Date().getFullYear();
     if(value >= 1985 && value <= (anioActual+1)){
         return true
     }
     else{
         return false
     }
 }

export function sumarioValidaciones(nombrePrenda, descripcion, imagen, talles, anioLanzamiento, marca, precio){
    let resumen='';
    if(!cantidadCaracteres(nombrePrenda, 3, 100)){
        resumen += 'Corregir el campo del nombre de la Prenda debe contener entre 3 y 100 caracteres <br>';
    }
    if(!cantidadCaracteres(descripcion, 3, 100)){
        resumen += 'Corregir la cantidad de caracteres de la descripcion <br>'
    }
    if(!validarURLImagen(imagen)){
        resumen += 'Corregir la URL de la imagen, la extension debe ser .jpg, .gif o .png <br>'
    }

    if(!cantidadCaracteres(talles, 3, 50)){
        resumen += 'Corregir la cantidad de caracteres del talle <br>'
    }

    if(anio.length !== 0 && !validarAnio(parseInt(anioLanzamiento))){
        resumen += `Ingrese un año correcto (entre 1985 y como maximo el proximo año ${new Date().getFullYear()+1}) <br>`
    }

    if(!cantidadCaracteres(marca, 3, 100)){
        resumen += 'Corregir la cantidad de caracteres de la marca <br>'
    }

    if (!validarPrecio(precio)) {
        resumen += 'Corregir la cantidad de caracteres de precio <br>'
    }

    if(resumen.length !== 0 ){
        return resumen;
    }else{
        console.log('todo esta ok con el formulario')
        return '';
    }
}