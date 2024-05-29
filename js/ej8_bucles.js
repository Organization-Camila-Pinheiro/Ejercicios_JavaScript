function imprimir(mensaje, id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

//Iniciamos el contador a 0
//Definimos el numero de repeticiones
//Incrementamos con i++ para que el contador va aumentando de valor +1 cada ciclo
function mostrarFrase(){
    let mensaje = "Hola Mundo";
    let mensajeFinal = "";
    let repeticiones = 100;

    for(let i=0; i<repeticiones; i++){
        //+= significa que se agrega texto al final, no se sustituye como el =
        mensajeFinal += mensaje;
    }
    imprimir(mensajeFinal,"ejemplo1solucion")

}
