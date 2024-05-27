
function imprimir(mensaje, idElemento){
    let elemento = document.getElementById(idElemento);
     elemento.innerText =  mensaje;
}

// EJERCICIO 1 _ Crea un formulario para que el usuario introduzca su edad y vea un mensaje indicando si es mayor de edad o no.
function mayorEdad(){
    let edad = document.getElementById("ejercicio1Numero").value;
    let mensaje = ""
    if(edad >= 18){
        mensaje = "Eres mayor de edad"
    }
    else{
        mensaje = "Eres menor de edad"
    }
    
    imprimir(mensaje,"respuesta1")
}
