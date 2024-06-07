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
    imprimir(mensajeFinal,"e1solucion")

}

//EJEMPLO 2: FOR 
function mostrarElDoble(){
    let repeticiones = 10;
    let mensaje = "";
    for(i=0; i<repeticiones; i++){
        let doble = i * 2;
        mensaje += "Numero incial: " + i +  " doble: " + doble + "\n";
    }
    imprimir(mensaje, "e2solucion")
}

// EJEMPLO 3:  mostrar una tabla de multiplicar
function tablaMultiplicacion(){
    let numero = parseInt(document.getElementById("e2multiplicar").value);
    let repeticiones = 11;
    let mensaje = "";
    for( i=0; i<repeticiones; i++){
        let resultado = i * numero;
        mensaje += "Tablade multiplicar" + numero +  "x"+ i + "=" + resultado + "\n"
    }
    imprimir(mensaje, "e3solucion")
}

//EJEMPLO 4: FOR PARA LISTAS
function listaMinuscula(){
    let lista = ["Camila", "bruno", "MARINA", "Paula", "FERNANDO"]
    let longitud = lista.length;
    let mensaje = "";
    for(i=0; i<longitud; i++){
        if(lista[i] ==="bruno"){
            lista[i] = lista[i].toUpperCase()
        }
        else{ 
            lista[i] = lista[i].toLowerCase();
        }
       
    }
    mensaje = "La lista en minusculas es: " + lista;
    imprimir(mensaje, "e4solucion")
}
