// Declarar la funcion
// Funcion sin argumentos. Cuando no hay nada entre los parentesis
function decirHola() {
    let saludo = "Hola Mundo!"
    let parrafo = document.getElementById("funcionesEjemplo1");
    parrafo.innerText = saludo;
}

// Llamar la funcion

decirHola();

// Funcion con argumentos. Es decir que recibe paramentros(x, y)

function suma(num1, num2) {
    let resultado = num1 + num2;

    let divFunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = "El resultado de la suma de " + num1 + " más " + num2 + " es igual a " + resultado;
    divFunciones.appendChild(parrafoNuevo);
}

//Llamar a la funcion suma
suma(34, 1)

//Hacer nuestro proprio document.write
//Declaramos la funcion agregar nuevo parrafo
function agregarParrafo(mensaje) {
    let divFunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = mensaje
    divFunciones.appendChild(parrafoNuevo);
}

//Llamar la funcion con variables
let mensaje = "Oi, tudo bem? ";
agregarParrafo(mensaje);
agregarParrafo("Hoje está chovendo");
agregarParrafo(mensaje + "Hoje está um dia bonito");

//ejemplo que podemos usar de referencia para hacer con el evento onclick
//Llamar la funcion desde un boton de html con el evento onclick
//Creamos la funcion saludar
function saludar() {
    let parrafo = document.getElementById("funcionesEjemplo2");
    parrafo.innerText = "Hola que tal? Como estas?";
}

//funcion imprimir
//ejemplo de referencia para hacer la HU mensaje de bienvenida
function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Obtener informacion de un formulario y ejecutar una funcion con el evento onclick
function restar() {
    //1.Obtenemos los valores del formulario. Para ello, ponemos el id del elemento del formulario y ponemos
    // .value para obtener su valor y guardalo en una variable
    let num1 = document.getElementById("e3Numero1").value;
    let num2 = document.getElementById("e3Numero2").value;
    //2. Hacemos el calculo de la resta
    let resta = num1 - num2;
    let mensaje = "La resta de los numeros " + num1 + " y " + num2 + " es igual a " + resta;
    imprimir(mensaje, "funcionesEjemplo3");
}

// Obteber elemento de un select
function mostrarUbicacion() {
    //1.Obtenemos la opcion seleccionada
    let ciudadSeleccionada = document.getElementById("e4Ciudades").value;
    let mensaje = "Encuentras la ciudad seleccionada " + ciudadSeleccionada;
    imprimir(mensaje, "e4Solucion");

}

