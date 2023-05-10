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

function validarStock(stock){
    if(stock < 200){
        console.log('stock correcto');
        return true;
    }else{
        console.log('stock incorrecto');
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

export function sumarioValidaciones(titulo, descripcion, imagen, duracion, anio, pais, reparto, stock, categoria){
    let resumen='';
    if(!cantidadCaracteres(titulo, 3, 100)){
        resumen += 'Corregir el campo del titulo debe contener entre 3 y 100 caracteres <br>';
    }
    if(!cantidadCaracteres(descripcion, 3, 100)){
        resumen += 'Corregir la cantidad de caracteres de la descripcion <br>'
    }
    if(!validarURLImagen(imagen)){
        resumen += 'Corregir la URL de la imagen, la extension debe ser .jpg, .gif o .png <br>'
    }

    if(!cantidadCaracteres(duracion, 3, 100)){
        resumen += 'Corregir la cantidad de caracteres de la duracion <br>'
    }

    if(anio.length !== 0 && !validarAnio(parseInt(anio))){
        resumen += `Ingrese un año correcto (entre 1985 y como maximo el proximo año ${new Date().getFullYear()+1}) <br>`
    }


    if(!cantidadCaracteres(pais, 3, 100)){
        resumen += 'Corregir la cantidad de caracteres de pais <br>'
    }

    if (!validarPrecio(reparto)) {
        resumen += 'Corregir la cantidad de caracteres de precio <br>'
    }

    if (!validarStock(stock)) {
        resumen += 'Corregir la cantidad de caracteres de stock <br>'
    }

    if(!cantidadCaracteres(categoria, 3, 100)){
        resumen += 'Corregir la cantidad de caracteres de categoria <br>'
    }

    if(resumen.length !== 0 ){
        return resumen;
    }else{
        console.log('todo esta ok con el formulario')
        return '';
    }
}