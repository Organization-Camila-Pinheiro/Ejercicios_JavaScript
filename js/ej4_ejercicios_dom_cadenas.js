/* Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:

Su longitud

La posición de la palabra QA

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre

Crea una nueva palabra, con la misma frase quitando la palabra que tal. */


let mensajePrincipal = "Hola que tal, bienvevida a QA";
let longitud = mensajePrincipal.length;
let posicinQA = mensajePrincipal.indexOf("QA");
let primeraLetra = mensajePrincipal[0];
let ultimaLetra = mensajePrincipal[longitud-1];
let fraseMayuscla = mensajePrincipal.toUpperCase();
let fraseMinuscula = mensajePrincipal.toLocaleLowerCase();
let studentName = "Camila";
let mensaje1 = mensajePrincipal.replace("que tal, bienvenida a QA", studentName );
let mensaje2 = mensajePrincipal.replace("Hola ", "Hola "+ studentName)
let palavra = "";
let mensaja3 = mensajePrincipal.replace("que tal", palavra);

let parrafo = document.getElementById("e1longitud");
parrafo.innerText = "La longitud de la frase " + mensajePrincipal + "es " + longitud;

parrafo = document.getElementById("e1posicionQA");
parrafo.innerText = "La posicion de la palabra QA es " + posicinQA;

parrafo = document.getElementById("e1letraPrimera");
parrafo.innerText = "La primera pababra de la frase " + mensajePrincipal + "es " + primeraLetra;

parrafo = document.getElementById("e1fraseMayuscula");
parrafo.innerText = "La ultima palabra de la frase " + mensajePrincipal + "es "+ ultimaLetra;

parrafo = document.getElementById("e1fraseMayuscula");
parrafo.innerText = "La frase completa en mayúscula " + fraseMayuscla;

parrafro = document.getElementById("e1fraseMinuscula");
parrafo.innerText = "La frase completa en minúscula " + fraseMinuscula;

parrafo =  document.getElementById("e1fraseNombre");
parrafo.innerText = "La frase original es " + mensajePrincipal + " y la frase con los cambios es " + mensaje1

parrafo = document.getElementById("e1fraseSinQueTal");
parrafo.innerText = "La frase orginal es " + mensajePrincipal + " y la frase con los cambios es " + mensaje2
