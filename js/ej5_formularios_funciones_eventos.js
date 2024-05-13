// Declara la funcion
// Funcion sin argumentos. Cuando no hay nada entre los parentesis
function decirHola (){
    let saludo = "Hola Mundo!"
    let parrafo =  document.getElementById("funcionesEjemplo1");
    parrafo.innerText = saludo;
}

// Llamar la funcion

decirHola();

// Funcion con argumentos. Es decir que recibe paramentros(x, y)

function suma(num1, num2){
    let resultadoSuma = num1 + num2;
    
}