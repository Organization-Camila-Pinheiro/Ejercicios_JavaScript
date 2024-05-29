

let listaAlumnos = ["Camila", "Raquel", "Jan", "Marina", "Ona", "Gala", "Pedro", "Lucas", "Gabi", "Bruno"]

function imprimir(mensaje,id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}
//Ejercicio 1: Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos.
function mostrarLista(){
    let mensaje = "La lista de alumnos es " + listaAlumnos;
    imprimir(mensaje, "respuesta1")
}

//Ejercicio 2: Muestra el nombre del alumno de la posicion que elijas
function nombreAlumno(){
    let posicion = parseInt(document.getElementById("ej2posicion").value);
    let nombre = listaAlumnos[posicion];
    let mensaje = "El nombre del alumno es " + nombre;
    imprimir(mensaje,"respuesta2");

}

//Ejercicio 3: Agrega un boton mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre.

function ordenarNombre(){
    let listaOrdenada = listaAlumnos.sort();
    let mensaje = "La lista ordenada es " + listaOrdenada;
    imprimir(mensaje, "respuesta3");

}

// Ejercicio 4: Agrega una nueva opcion para agregar un nuevo alumno.

function agregarAlumno(){
    let nuevoAlumno = document.getElementById("ej4nombre").value;
    listaAlumnos.push(nuevoAlumno);
    let mensaje = "La nueva lista es " + listaAlumnos;
    imprimir(mensaje, "respuesta4");
}

// Ejercicio 5: Agrega una opcion para eliminar un alumno de una posicion elegida.

function eliminarAlumnoElegido(){
    let posicion = parseInt(document.getElementById("ej5posicion").value);
    let alumnoEliminado = listaAlumnos.splice(posicion,1);
    let longitud = listaAlumnos.length;
    let mensaje = ""; 

    if( posicion > longitud){
        mensaje = "ERROR!!! La longitud elegida es mayor que la longitud de la lista."
    }
    else{
        mensaje = "La lista actual es " + listaAlumnos + "el alumno eliminado es " + alumnoEliminado;
    }

    imprimir(mensaje, "respuesta5")
    
}