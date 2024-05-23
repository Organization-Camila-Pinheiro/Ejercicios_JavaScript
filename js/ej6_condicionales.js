function imprimir(mensaje, idElemento){
    let elemento = document.getElementById(idElemento);
     elemento.innerText =  mensaje;
}

// EJEMPLO 1 _  COMPARAR SI DOS NUMEROS IGUALES O NO 
function numeroCinco(){
    let numero = parseFloat(document.getElementById("ej1numero").value);
    let mensaje = "";

    if(numero === 5){
        mensaje = "El numero introducido es igual a 5";
    }
    else{
        mensaje = "El numero introducido no es igual a 5";

    } 
    imprimir(mensaje, "ejemplo1")

}

// EJEMPLO 2_ COMPARAR DOS NUMEROS
// MAUOR IGUAL >=     MENOR IGUAL <=

function numeroMayorCinco(){
    let numero = parseFloat(document.getElementById("ej2numero").value);
    let mensaje= "";

    if(numero > 5){
        mensaje = "El numero es mayor que 5";
    }
    else{
        mensaje= "El numero es menor que 5";
    }
    imprimir(mensaje, "ejemplo2")
}

// COMPRAR TEXTOS
//Usar touppercase si queremos que sean iguales independientemente de mayusculas y minusculas. No ponerlo en caso contrario.

function ciudad(){
    let ciudad = document.getElementById("ej3ciudad").value;
    let ciudadMalaga = "Malaga";
    let mensaje = "";
     if(ciudad.toUpperCase() !== ciudadMalaga.toUpperCase()){
        mensaje = "La ciudad no es Málaga";
     }
     else{
        mensaje = "La ciudad es Málaga";

     }
     imprimir(mensaje, "ejemplo3")
}

//EJEMPLO 4: MOSTRAR UN MENSAJE DE ERROR SI EL FORMULARIO ES INVALIDO
// 1. OBTENER EL FORMULARIO POR SU ID
// 2. LLAMAR A LA FUNCION CHECKVALIDITY

function mostrarAnimal(){
    let formulario = document.getElementById("ejemplo4Condicionales").value;
    let mensaje = "";
    if(formulario.checkValidity()){
        let nombreAnimal =  document.getElementById("ej4animal").value;
        mensaje = "el animal introducido es " + nombreAnimal;
    }
    else{
        mensaje = "Error, corrija los errores del formulario"
    }
    imprimir(mensaje, "ejemplo4")
}