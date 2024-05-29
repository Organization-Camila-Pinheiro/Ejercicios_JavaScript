// VARIABLES GLOBALES: ESTAN FUERA DE LA FUNCION, 
// PUEDE USARSE DENTRO DE CUALQUIER FUNCION QUE ESTE EN EL MISMO FICHERO
let listaCompra = ["tomates", "huevos", "queso", "fresas", "zanahorias"];


function imprimir(mensaje, id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

// EJEMPLO 1: CREAR UN ARRAY
// el array puede tener cualquier tipo, cada elemento vá entre coma.
function mostrarLista(){  
    let mensaje = "La lista de la compra es " + listaCompra;
    imprimir(mensaje, "listaResultado1")
}

//EJEMPLO 2: MOSTRAR EL ELEMENTO EN LA POSICION QUE ELIJAS DE LA LISTA
function mostrarInfoLista(){
    let primerProducto = listaCompra[0]; //mostrar el primer elemento
    let longitudLista = listaCompra.length; //mostrar longitud
    let ultimoProducto = listaCompra[longitudLista - 1]; // mostrar el ultimo elemento
    let mensaje = "El primer producto es " + primerProducto + 
    ", el ultimo producto es " + ultimoProducto + ", su longitud es " + longitudLista;
    imprimir (mensaje, "listaResultado2");
}

//EJEMPLO 3: CAMBIAR VALOR DE UN ELEMENTO DE LA LISTA
//se modifica el elmento de la posicion que le indique. 
//la lsiata empieza con el numero cero.

function modificarLista(){
    let posicionModificada = parseInt(document.getElementById("ej3posicion").value);
    let nuevoElemento = document.getElementById("ej3elemento").value;
    listaCompra[posicionModificada-1] = nuevoElemento;

   mostrarLista();
}

//EJEMPLO 4: AGREGAR UN ELEMENTO AL FINAL DE LA LISTA
// se agrega con push() al final de la lista
// si queires agrerlar al principio de la lista se usa el unshift()
function agregarLista(){
    let nuevoProducto = document.getElementById("ej4elemento").value;
    listaCompra.push(nuevoProducto);
    mostrarLista()
}

//EJEMPLO 5: ELIMINAR EL ULTIMO ELEMENTO DE UNA LISTA
// se elimina con pop()
// si quieres eliminar el primer elemento de lista se usa el shift()
function eliminarElemento(){
   let elementoEliminado = listaCompra.pop();
   let mensaje = "El elemnto eliminado es " + elementoEliminado;
   imprimir(mensaje,"listaResultado5");
   mostrarLista();
}

//EJEMPLO 6: ELIMINAR UN ELEMENTO CONCRETO DE LA LISTA, UNA POSICION CONCRETA
// Usamos da funcion splice(posicion, nuemro de elementos a eliminar), la posicion empieza en 0
function eliminarElementoElegido(){
    let posicion = parseInt(document.getElementById("ej6posicion").value);
    listaCompra.splice(posicion,1);
    mostrarLista();
}

//EJEMPLO 7: ORDENAR LOS ELEMENTOS DE UNA LISTA  DE FORMA ALFABETICA a-z
//Usamos la funcion sort()
//usar minisculas porque usa el orden assci

function ordenarLista(){
    listaCompra.sort();
    mostrarLista();
}

// EJEMPLO 8: 
//EJEMPLO 7: ORDENAR LOS ELEMENTOS DE UNA LISTA  DE FORMA ALFABETICA z-a
//Usamos la funcion sort().reverse()
//usar minisculas porque usa el orden assci

function ordenarListaZA(){
    listaCompra.sort().reverse();
    mostrarLista();
}



