function imprimir(mensaje, id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

function sumaNumeros(){
    let numero = parseInt(document.getElementById().value);
    let mensaje = "";
    let suma = 0;
    for(let i=0; i<10; i++){

        suma = suma + i
        mensaje +=i + "la suma es " + suma;  
    }
    mensaje = "La suma de los numeros es " +  suma 
    imprimir(mensaje, "")
}

// EJERCICIO 1  Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario.
function mostrarNumero(){
    let numero = parseInt(document.getElementById("ej1numero").value);
    let suma = 0

    for(let i=0; i<numero; i++){
        suma = suma + i
        mensaje = mensaje + i + "la suma es " + suma;
    }

    imprimir(mensaje, "resultado1")

}
