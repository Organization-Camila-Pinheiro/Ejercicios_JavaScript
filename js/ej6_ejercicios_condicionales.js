
function print(mensaje, idElemento){
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
    
    print(mensaje,"respuesta1");
}

// EJERCICIO 2_ Crea un formulario que indique cual es el mayor de dos numeros

function compararValores(){
    let num1 = parseInt(document.getElementById("ejercicio2Numero1").value);
    let num2 = parseInt(document.getElementById("ejercicio2Numero2").value);
    let mensaje ="";

    if( num1 > num2){
        mensaje = num1 + " es mayor que " + num2
    }
    
    else{
        mensaje = num2 + " es mayor que " + num1
    }
    print(mensaje, "respuesta2");
}

// EJERCICIO 3_ Crea un formulario para que el usuario introduzca su nota y vea si esta aprobado o suspenso

function verificarNotas(){
    let nota = parseFloat(document.getElementById("ejercicio3Numero").value);
    let mensaje = "";
    
    if(nota < 5){
        mensaje = "Alumno Suspenso!";
    }
    else{
        mensaje = "Alumno Aprobado!";
    }
    
    print(mensaje,"respuesta3");
}

//EJERCICIO 4_ Crea un formulario para que el usuario introduzca su nombre y le diga si es un nombre largo o corto.

function textoLargoCorto(){
    let nombre = document.getElementById("ej4exto").value;
    let longitud = nombre.length;
    let mensaje = "";

    if( longitud> 10){
        mensaje = "Es un nombre largo!";
    }
    else{
        mensaje = "Es un nombre corto!";
    }
   print(mensaje,"respuesta4");
}

// EJERCICIO 5_ Crea un formulario para ver la estacion del año segun el mes introducido.

function estacion(){
let mes = document.getElementById("ej5estacion").value;
let mensaje = "";

if( mes === "diciembre" || mes === "enero" || mes ==="febrero"){
    mensaje = "El mes de " + mes + " y  estamos en invierno"
}
else if( mes === "marzo" || mes === "abril" || mes ==="mayo"){
    mensaje = "El mes de " + mes + " y estamos en primavera"
}
else if( mes === "junio" || mes === "julio" || mes ==="agosto"){
    mensaje = "El mes de " + mes + " y estamos en verano"
}
else if( mes === "septiembre" || mes === "octubre" || mes ==="noviembre"){
    mensaje = "El mes de " + mes + " y estamos en otono"
}

print(mensaje, "respuesta5")
}

//EJERCICIO 6_ Crea una calculadora.

function calculadora(){
    let num1 = parseFloat(document.getElementById("ejercicio6Numero1").value);
    let num2 = parseFloat(document.getElementById("ejercicio6Numero2").value);
    let calculo = document.getElementById("ej6calculo").value;
    let mensaje = "";

    if(calculo === "suma"){
        let suma = num1 + num2;
        mensaje = "La suma es " + suma;
    }
    else if(calculo === "resta"){
        let resta = num1 - num2;
        mensaje = "La resta es " + resta;
    }
    else if(calculo === "multiplicacion"){
        let multiplicacion = num1 * num2;
        mensaje = "La multiplicacion es " + multiplicacion;
    }
    else if(calculo === "division"){
        if(num2 !==0){ 
            let division = num1/ num2;
            mensaje = "La divison es " + division;
        }
    }
    
    print(mensaje, "respuesta6")
    
}
        

//EJERCICIO 7_ Crea un formulario que muestre el precio final segun el producto y la forma de pago elegida.

function precioProducto(){
    let producto = document.getElementById("ej7productos").value;
    let cantidad = document.getElementById("ej7Numero").value;
    let precio = 0
    let mensaje = "";

    if(producto === "camiseta"){
        precio = 10;
    }
    else if(producto === "sudadera"){
        precio = 20;
    }
    else if (producto === "bufanda"){
        precio = 5;
    }

    let precioTotal = precio * cantidad

    mensaje = "El precio de " + producto + " es " +  precio + " euros y comprando " + cantidad + " cantidades, el valor final es " + precioTotal;

    print(mensaje, "respuesta7")

}

