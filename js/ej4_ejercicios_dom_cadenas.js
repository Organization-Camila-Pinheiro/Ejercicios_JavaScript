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

/*Crea una variable con una frase en la que te presentes y muestrala junto con:

Su longitud

La posición de tu nombre

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Muestra la frase cambiando tu nombre por otro que elijas.

Crea una nueva palabra, con la misma frase quitando tu nombre.

 */

let presentation = "Hola, me llamo Camila, soy una Analista QA proactiva y organizadoa con conocimientos en pruebas manuales y pruebas API.";
let longitud2 = presentation.length;
let posicionName = presentation.includes("Camila");
let primeraLetra2 = presentation[0];
let ultimaLetra2 = presentation[longitud -1];
let mensajeMayuscula = presentation.toUpperCase();
let mensajeMinuscula = presentation.toLowerCase();
let otherName = "Marina"
let mensaje4 = presentation.replace("Camila", otherName);
let mensaje5 = presentation.replace(" me llamo Camila,", "")

let cadenas = document.getElementById("e2longitud");
cadenas.innerText = "La longitude de la frase " + presentation + " es " + longitud2;

cadenas = document.getElementById("e2posicion");
cadenas.innerText = "La posición de la palabra \"Camila\" es " + posicionName;

cadenas = document.getElementById("e2letraPrimera");
cadenas.innerText = "La primera letra de la frase es " + primeraLetra2;

cadenas = document.getElementById("e2letraUltima");
cadenas.innerText = "La ultima de la frase es " +  ultimaLetra2;

cadenas = document.getElementById("e2fraseMayuscula");
cadenas.innerText = "La frase completa con letras mayusculas: " + mensajeMayuscula;

cadenas = document.getElementById("e2fraseMinuscula");
cadenas.innerText = "La frase completa con letras minusculas: " + mensajeMinuscula;

cadenas = document.getElementById("e2fraseNombre");
cadenas.innerText = "La frase original es " + presentation + " y la frase actual es " + mensaje4;

cadenas = document.getElementById("e2fraseSinNombre");
cadenas.innerText = "La frase original es " + presentation + " y la frase actual es " +mensaje5;


//Crea una variable con tu nombre completo y muestralo por pantalla. A continuación, quita los espacios de la variable y muestralo por pantalla.

let nombreCompleto = "Camila Pinheiro do Carmo";
let nombreSinEspacios = nombreCompleto.replaceAll(" ", "")

let fullName = document.getElementById("e3nombreSinEspacio");
fullName.innerText = "El nombre es " + nombreCompleto + " y quitando la variable es " + nombreSinEspacios;

//Crea una variable con una palabra en minuscula y muestralo por pantalla. Cambia la primera letra a mayuscula y muestrala por pantalla.

let palabraTest = "barcelona";
let primeraLetraMayuscula = palabraTest.replace(palabraTest[0], palabraTest[0].toUpperCase());
      
let palabraFinal = document.getElementById("e4palabra");
palabraFinal.innerText = "El nombre original es " + palabraTest + " y el nombre alterado es " + primeraLetraMayuscula;

// Crea una cadena con el texto Hola Mundo y muestralo por pantalla. Reemplaza la palabra Hola por Adios y muestralo por pantalla.

let cadenaTextoHola = "Hola Mundo";
let cadenaTextoAdios = cadenaTextoHola.replace("Hola", "Adiós");

let saludo = document.getElementById("e5palabra")
saludo.innerText = "El texto origial es " + cadenaTextoHola + " y el texto actual es " + cadenaTextoAdios;






