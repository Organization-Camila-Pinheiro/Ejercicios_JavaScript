
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

// EJERCICIO_6
function mostrarEdad(){
    let edad = parseInt(document.getElementById("ej46Edad").value);
    const diasAno = 365;
    const horasDia = 24;
    const minutosHora = 60;
    const segundosMinuto = 60;

    let dias = edad * diasAno;
    let minutos = edad * horasDia* minutosHora;
    let segundos = minutos* segundosMinuto;
    let mensaje =  " Si tienes " + edad + " años" + " habrás vivido " + dias + " días o " + minutos + " minutos " + " o " + segundos + " segundos. "

    imprimir(mensaje, "respuesta6");

}

//  EJERCICIO_7
function mostrarTexto(){
    let texto = document.getElementById("ej7Texto").value;
    let mayuscula = texto.toUpperCase();
    let primeraLetra = texto[0];
    let longitud = texto.length;  
    let ultimaLetra = texto[longitud -1];
    
    let mensaje = "El texto en mayuscula " + mayuscula + " la primera letra es " + primeraLetra + " su ultima letra es " + ultimaLetra + " su longitud es " + longitud;

    imprimir(mensaje, "respuesta7");
}

// EJERCICIO_8
function mostrarMedia(){
    let nota1 = parseFloat(document.getElementById("ej8Numero1").value);
    let nota2 = parseFloat(document.getElementById("ej8Numero2").value);
    let nota3 = parseFloat(document.getElementById("ej8Numero3").value);

    let notaTotal = nota1 + nota2 + nota3;
    let media = notaTotal / 3;

    let mensaje = "La media de las tres notas es " + media;
    imprimir(mensaje, "respuesta8");
}

// EJERCICIO_9
function mostrarProducto(){
    let numCamiseta =  document.getElementById("ej9camiseta").value;
    let numZapatos = document.getElementById("ej5zapatos").value;
    let numSombreros = document.getElementById("ej5sombreros").value;

    let camiseta = "Camiseta";
    let zapatos = "Zapatos";
    let sombreros = "Sombreros";

    let mensaje = "El producto " +  camiseta + " hay " + numCamiseta + " unidades, el producto " +  zapatos + " hay " + numZapatos + " unidades y el producto " 
    +  sombreros + " hay " + numSombreros + " unidades. "


imprimir(mensaje, "respuesta9")
}

// EJERCICIO 10

function datosMascota(){
    let nombreMascota = document.getElementById("ej10texto").value;
    let tipoMascota = document.getElementById("ej10mascota").value;

    let mensaje = "Datos mascota: el nombre de la mascota es: " + nombreMascota +
     " y el tipo de la mascota es: " + tipoMascota 

    imprimir(mensaje, "respuesta10")

    
}
// Otro ejemplo ejercicio 10

function tuMascota(idNombreMascota, idTipoMascota) {
    let nombreMascota = document.getElementById(idNombreMascota).value;
    let tipoMascota = document.getElementById(idTipoMascota).value;
    let mensaje = "RESULTADO\nTu mascota se llama " + nombreMascota;
    if (tipoMascota !== "") {
        mensaje += " y es un " + tipoMascota;
    }
    imprimir(mensaje, "eje10FormulariosResultado");
}