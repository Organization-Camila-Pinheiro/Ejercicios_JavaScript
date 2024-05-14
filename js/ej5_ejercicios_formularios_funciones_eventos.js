
function imprimir(mensaje, id){
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje
}
//EJERCICIO_1
function welcome(){
    let nombre = document.getElementById("ej1Nombre").value;
    let ciudad = document.getElementById("ej1Ciudad").value;
    let fechaNacimiento = document.getElementById("ej1Fecha").value;
    let mensaje = "Hola " + nombre + " bienvenida!" + " Vive en " + ciudad + " y ha nacido en " + fechaNacimiento;
    imprimir(mensaje, "respuesta1")
}

//EJERCICIO_2
function operaciones(){
    let num1 = parseFloat(document.getElementById("ej2PrimerNumero").value);
    let num2 = parseFloat(document.getElementById("ej2SegundoNumero").value);

    let suma = num1 + num2;
    let resta = num1 - num2;
    let Multiplicacion = num1 * num2;
    let division = num1/ num2;
    let mensaje = " La suma de " + num1 + " más  " + num2 + " es " + suma +
    ", la resta de " + num1 + " menos " + num2 + " es " + resta + ", la multiplicacion de " + num1 + " por " + num2 + " es " + Multiplicacion +
    ", la division de " + num1 + " por " + num2 + " es " + division;
    imprimir(mensaje, "respuesta2");
}
//EJERCICIO_3
function conversion(){
    let valor = parseFloat(document.getElementById("ej3valor").value);
    let dolar = 0.92;
    let libras = 1.16;
    let valorDolar = valor * dolar;
    let valorLibras = valor * libras; 

    let mensaje = "La cantidad en dolares es " + valorDolar + " y la cantidad en libras es " + valorLibras;
    imprimir(mensaje, "respuesta3");
}

//EJERCICIO_4
function calcularPrecio(){
    let producto = document.getElementById("ej4producto").value;
    let precio = document.getElementById("ej4precio").value;
    let cantidad = document.getElementById("ej4cantidad").value;
    let valorTotal = precio * cantidad;

    let mensaje = "El producto " + producto + " su precio es de " + precio + " y hay la cantidade de " 
    + cantidad + ". El precio total del producto " + producto + " es " + valorTotal;
    imprimir(mensaje, "respuesta4");
}

//EJERCICIO_5
function elegirCamiseta(){

    let talla = document.getElementById("ej5Talla").value;
    let color = document.getElementById("ej5Color").value;
    let mensaje = "La talla elegida es " + talla + " y el color de la camiseta es " + color;
    
    imprimir(mensaje, "respuesta5");

}
