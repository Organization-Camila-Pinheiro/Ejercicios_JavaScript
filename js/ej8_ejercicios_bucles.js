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

/**1. Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario.
1. Agrega un campo para introducir un numero mayor que 0.
2. Agrega un boton que al pulsarlo muestre la suma de todos los numeros desde el 1 hasta el numero indicado. */

function mostrarNumeros(){
    let numero = parseInt(document.getElementById("ej1numero").value);
    let suma = 0
    let mensaje = "";

    for(let i=0; i<numero; i++){
        suma = suma + i
        mensaje += "la suma es " + suma + "\n";
    }

    imprimir(mensaje, "resultado1")

}


/**2. Muestra una palabra el numero de veces que indique el usuario.
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre la palabra en mayusculas el numero de veces indicado por el usuario.  */

function mostrarPalabra(){
    let palabra = document.getElementById("ej2palabra").value;
    let cantidad = parseInt(document.getElementById("ej2numero").value);
    let mensaje = "";

    for (let i=0; i<cantidad; i++){
        palabra = palabra.toUpperCase()
        mensaje += palabra + " " + i + "\n"
    }
    imprimir(mensaje, "respuesta2")

}

/**3. Muestra AMAPOLA o MARGARITA el numero de veces que indique el usuario, segun la palabra introducida:
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre el numero de veces indicado, la palabra AMAPOLA, si la palabra introducida por el usuario empieza por VOCAL, que muestre la palabra MARGARITA en cualquier otro caso. */

function mostrarNombre(){
    let nombre = document.getElementById("ej3palabra").value;
    nombre = nombre.toLowerCase();
    let numero = parseInt(document.getElementById("ej3numero").value);
    let mensaje = "";

    for(let i =0; i<numero; i++){
        if (nombre[0]=== "a" || nombre[0]==="e" || nombre[0]=== "i" || nombre[0]==="o" || nombre[0]=== "u" ){
            mensaje += i + " Amapola \n" ;
        }
        else{
            mensaje += i + " Magarida \n";
        }

    }
    imprimir(mensaje, "respuesta3")

}

/** 4. Muestra todos los numeros pares desde el 0 hasta el indicado por el usuario.
1. Agrega un campo para introducir un numero. Este campo no puede estar vacio.
2. Agrega un boton que al pulsarlo muestre todos los numeros pares, desde el 0 hasta el indicado. Nota: Un numero es par si el resto de la division entre 2 es 0. Para saber el resto de una division, puedes usar el operador %.*/

function numerosPares(){
    let numero = parseInt(document.getElementById("ej4numero").value);
    let mensaje = "";

    for(let i=0; i<numero; i++){
        if (i % 2 === 0){
            mensaje += i + "\n";
        }
    }
    imprimir(mensaje, "respuesta4")
}

/** 5. Muestra todos los nombres de una lista en mayusculas.
1. Agrega un nuevo campo para agregar nombres a una lista. Debe ser obligatorio y tener minimo 3 caracteres.
2. Agrega un boton que al pulsarlo agrege el nombre introducido en el formulario a una lista y la muestre por pantalla.
3. Agrega un boton que al pulsarlo muestre la lista completa en mayusculas.
4. Agrega un nuevo boton que al pulsarlo muestre los nombres de la lista que empiecen por la letra A.*/

let listaNombres = [];
function agregarNombre(){
    let nombres = document.getElementById ("ej5nombres").value
    listaNombres.push(nombres);
    let mensaje = "La lista es " + listaNombres;
    imprimir(mensaje, "respuesta5nombre")
}

function mostrarLista(){
    let longitud = listaNombres.length;
    let mensaje = ""
    for(let i=0; i<longitud; i++){
        listaNombres[i] = listaNombres[i].toUpperCase();
        mensaje = "La lista es  en mayuscula " + listaNombres;

    }
    imprimir(mensaje, "respuesta5lista")

}

function nombresLetraA(){
    let longitud = listaNombres.length;
    let mensaje = "";

    for (let i=0; i<longitud; i++){
        let nombre = listaNombres[i];
        nombre = nombre.toLowerCase();
    
        if(nombre[0] === "a"){
            mensaje += nombre + " "
        }
        imprimir(mensaje, "respuesta5letra")
    }

}

/**6.Crea un programa para sumar todos los numeros de una lista.
1. Agrega un nuevo campo para agregar notas a una lista. Este campo debe ser numerico, y acepta numeros del 1 al 10 con decimales.
2. Agrega un boton agregar, que al pulsarlo agrege la nota introducida a la lista y la muestre.
3. Agrega un boton que al pulsarlo muestre la suma total de todos los numeros de la lista, o 0 si esta la lista vacia. 
4. Agrega un boton que muestre la nota media de la lista.
5. Agrega un boton para indicar si el usuario ha aprobado o no. El usuario esta aprobado si su nota media es igual o mayor a 5. */

let listaNotas = []

function agregarNotas(){
    let nota = parseFloat(document.getElementById("ej6numero").value);
    listaNotas.push(nota);
    imprimir(listaNotas, "respuesta5notas")

}

function sumaNotas(){
    let suma = 0;
    let mensaje = "";
    let longitud = listaNotas.length;
    for(let i=0; i<longitud; i++){
        suma += listaNotas[i] 
    }

    if(suma !==0){
        mensaje = "La suma de las notas es " + suma
    }

    else{
        mensaje = "No hay notas introducidas " + suma
    }
    imprimir(mensaje, "respuesta6lista")

    return suma

}

function notaMedia(){
   let suma = sumaNotas();
   let longitud = listaNotas.length;
      let media = suma / longitud

   let mensaje = "La media es " + media ;
   imprimir(mensaje, "respuesta6media")
    
}

function resultadoFinal(){
    let media = notaMedia();
    let mensaje = "";

    if(media <= 5){
        mensaje = "No has sido aprobado ";
    }
    else{
        mensaje = "Has sido aprobado ";
    }
    imprimir(mensaje, "respuesta6")
}