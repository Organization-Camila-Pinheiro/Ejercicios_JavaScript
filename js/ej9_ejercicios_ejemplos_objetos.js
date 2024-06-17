// creamos el objeto mascota
let mascota = {
    nombre: "Nevado",
    tipo: "Perro",
    edad: 12,
    ciudad: ["Malaga", "Sevilla", "Madrid"]
} 
// lista de mascotas
let mascotas = [];


function imprimir(mensaje,id){
    let parrafo = document.getElementById(id);
    parrafo.innerText =  mensaje;
}

// creamos un objeto mascota y imprimimos
function mostrarObjeto(){
    let mensaje = "El nombre " + mascota.nombre + " Es un " + mascota.tipo + 
    " edad " + mascota.edad + " ha nascido en " + mascota.ciudad + " y su proprietario es " + mascota.proprietario

    imprimir( mensaje, "ejemplo1")
}

// mostrar la informacion elegida del objeto mascota
function mostrarPropriedad(){
    let propriedad = document.getElementById("ej2mascotas").value;
    let mensaje = propriedad + ": " + mascota[propriedad];
    imprimir(mensaje, "ejemplo2")
}

// cambiar elementos de un objeto. cambiar nombre
function cambiarNombreMascota(){
    let nuevoNombre = document.getElementById("ej3nombre").value;
    mascota.nombre = nuevoNombre;
    mostrarObjeto();
}

// agregar nuevas propriedades a un objeto
function agregarProprietario(){
    let nombreProprietario = document.getElementById("ej4propriedad").value;
    mascota["proprietario"] = nombreProprietario;
    mostrarObjeto();
}

// agreagar una nueva mascota a la lista
function agregarNuevaMascota(){
    let miMascota = {};
    miMascota.nombre =  document.getElementById("ej5mascota").value;
    miMascota.edad = document.getElementById("ej5edad").value;
    miMascota.tipo = document.getElementById("ej5tipo").value;

    mascotas.push(miMascota);

    let mensaje = "Mascota agregada, la lista de mascotas es " + mascotas;
    imprimirArray();

}

// imprimir un arry de objetos
function imprimirArray(){
    let mensaje = "";
    for(i=0; i<mascotas.length; i++){
        mensaje+= " Mascota numero " + i;
        mensaje+= "Nombre: " + mascotas[i].nombre;
        mensaje+= " Edad: " + mascotas[i].edad;
        mensaje+=  " Tipo: " + mascotas[i].tipo;
    }
    imprimir(mensaje, "ejemplo5")
}


