let precioManzana = 2.5;
let precioPera = 1.5;
let precioPlatano = 1.8;
let totalManzanaPera =  precioManzana + precioPera
let totalPlatanoPera = precioPlatano + precioPera
let kilosPera = 2
let kilosManzana = 2
let total2kilosPeras = precioPera * kilosPera
let kilosPlatano = 3
let total3kgPlatanos = precioPlatano * kilosPlatano
kilosPera = 3 
let precio2kgManzana3kgPeras = (precioManzana * kilosManzana) + (precioPera * kilosPera)
kilosPlatano = 1.5
kilosPera = 2
kilosManzana = 3
let precioPlatanosPerasManzanas = (precioPlatano * kilosManzana) + (precioPera * kilosPera) + (precioManzana * kilosManzana)
kilosPera = 2.5
kilosPlatano = 3.5
let precioPerasPlatano = (precioPera * kilosPera) + (precioPlatano * kilosPlatano)



document.write ("EJERCICIO 1 <br/>")
document.write ("El precio de la manzana es " + precioManzana)
document.write("</br>");
document.write("El precio de la pera es " + precioPera)
document.write("</br>");
document.write("El precio del platano es "+ precioPlatano)
document.write("</br>");


document.write("Precio total de 1 kilo de manzana y 1 kilo de pera: " + totalManzanaPera);
document.write("</br>");
document.write("Precio total de 1 kilo de platano y 1 kilo de pera:" + totalPlatanoPera);
document.write("</br>");
document.write("Precio total de 2 kilos de peras: " + total2kilosPeras);
document.write("</br>");
document.write("Precio total de 3 kilos de platanos: " + total3kgPlatanos);
document.write("</br>");
document.write("Precio total de 2 kilos de manzana y 3 kilos de peras: " + precio2kgManzana3kgPeras)
document.write("</br>");
document.write("Precio total de 1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana: " + precioPlatanosPerasManzanas)
document.write("</br>");
document.write("Precio total de 2,5 kilos de peras, 3,5 kilos de platano: " + precioPerasPlatano);
document.write("</br>");

document.write ("EJERCICIO 2 <br/>")

let notaDeexamen1 = 7.5;
let notaDeexamen2 = 10.5;
let notaDeexamen3 = 8;
let notaDeexamen4 = 9.5;
let notaDeexamen5 = 7;
let totalDeexamenes = 5;
let notaMediaexamen;

notaMediaexamen = (notaDeexamen1 + notaDeexamen2 + 
notaDeexamen3+ notaDeexamen4 + notaDeexamen5)/ totalDeexamenes;


document.write("Nota del examen 1: " + notaDeexamen1 +", " + "Nota del examen 2: " + notaDeexamen2 + ", "
 + "Nota del examen 3: " + notaDeexamen3 + ", " + "Nota del examen 4: " + notaDeexamen4 + ", " 
 + "Nota del examen 5: " +  notaDeexamen5 + ", " + "Da una media de : " + notaMediaexamen + " </br>")


document.write ("EJERCICIO 3 <br/>")
let ladoCuadrado = 5;
let are = ladoCuadrado * ladoCuadrado;
document.write("La área del cuadrado es: " + (ladoCuadrado * ladoCuadrado));


document.write ("EJERCICIO 4 <br/>")
let baseRectangulo = 8;
let alturaRectangulo =6;
let areaRectangulo = baseRectangulo * alturaRectangulo; 

document.write("Área del rectángulo es base por altura. La base es " + baseRectangulo +
 " cm y la altura es " + alturaRectangulo + " cm. Por lo que el área es " + areaRectangulo +
  " cm" + "</br>");

document.write ("EJERCICIO 5 <br/>")
// 4. Determina el área de un triángulo con base de 10 metros y altura de 8 metros.
let base2 = 10;
let altura2 = 8;
let areaTriangulo = (base2 * altura2)/2;
document.write("El área del triángulo es " + areaTriangulo + "<br>");

document.write ("EJERCICIO 6 <br/>")
let radiocirculo = 4;
const PI2 = 3.14; 

areacirculo = PI2  (radiocirculo) * 2
document.write("Área del círculo es pi por radio al cuadrado. El radio es " 
+ radiocirculo +  " cm. Por lo que el área es " + areacirculo + " cm " + "</br>");


