// Nombre de la variable empezando con minuscula
// Usar camelCase, la primera palabra minuscula y las siguientes mayuscula sin espacios
// Puede haber guiones, pero no es una buena practica
// Las variable no se inicia por numeros

// 1 - DECLARAR UNA VARIABLE
let nombre;

// 2 -  INICIAR UNA VARIABLE
// Primero declarar la variable y luego iniciarla
document.write(" ELEMPLO 1 : INICIAR UNA VARIABLE");
document.write("</br>");
let ciudad;
ciudad = "Málaga";
document.write("La variable ciudad tiene el valor: " + ciudad);
document.write("</br>");

// Declarar la variable e iniciarla a la vez
document.write("EJEMPLO 2 : CREAR UNA VARIABLE EDAD </br>");
let edad = 33;
document.write("La variable edad tiene el valor: " + edad);
document.write("</br>");

// TIPOS DE VARIABLES
// NUMERO
document.write("EJEMPLO 3 : CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimal = 5.5
document.write("El numero sin decimales es: " + numero);
document.write("</br>");
document.write("El numero con decimales es: " + numeroDecimal);
document.write("</br>");

// CADENAS. Pueden usarse comillas simples o dobles. No las mezclas, usa solo una de ellas.
document.write("EJEMPLO 4 : CREAR UNA VARIABLE DE TIPO STRING</br>");
let saludo = "Hola Mundo!!!"
let despedida = 'Adiós';
let numeroEnTexto = "33"
document.write("</br>");
document.write("La variable texto saludo: " + saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
document.write("</br>");

// BOOLEANOS - true o false. En minuscula y sin comillas
document.write("EJEMPLO 5 : CREAR UNA VARIABLE DE TIPO BOOLEANO</br>");
let estaSoleado = true;
let esDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es dia es: " + esDia);
document.write("</br>");

// CONTANTES
// SE USA PARA GUARDAR VALORES QUE NO CAMBIAN
const numeroDeLaSemana = 7;
