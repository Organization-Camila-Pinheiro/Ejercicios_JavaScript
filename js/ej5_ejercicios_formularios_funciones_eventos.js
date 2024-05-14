
function imprimir(mensaje, id){
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje
}

function wellcome(){
    let nombre = document.getElementById("ej1Nombre").value;
    let ciudad = document.getElementById("ej1Ciudad").value;
    let fechaNacimiento = document.getElementById("ej1Fecha").value;
    let mensaje = "Hola " + nombre + " bienvenida!" + " Vive en " + ciudad + " y ha nacido en " + fechaNacimiento;
    imprimir(mensaje, "ejercio1Formalario")
}


function operaciones(){
    let num1 = document.getElementById("ej2PrimerNumero").value;
    let num2 = document.getElementById("ej2SegundoNumero").value;

    let suma = num1 + num2;
    let resta = num1 - num2;
    let Multiplicacion = num1 * num2;
    let division = num1/ num2;
    let mensaje = " La suma de " + num1 + " más  " + num2 + " es " + suma +
    ", la resta de " + num1 + " menos " + num2 + " es " + resta + ", la multiplicacion de " + num1 + " por " + num2 + " es " + Multiplicacion +
    ", la division de " + num1 + " por " + num2 + " es " + division
    imprimir(mensaje, "ejercio2Formalario")
}

function conversion(){
    let valor = document.getElementById("ej3valor").value;
    let dolar = 1.08
    let libras = 0.86
    let valorDolar = valor * dolar;
    let valorLibras = valor * libras; 

    let mensaje = "La cantidad en dolares es " + valorDolar + " y la cantidad en libras es " + valorLibras 
    imprimir(mensaje, "ejercio3Formalario")


}