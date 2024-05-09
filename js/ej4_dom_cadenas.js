//JAVASCRIPT DOM. OBTENR ELEMENTOS DE LA PAGINA POR SU ID
//Obtener el elemento html com id ejemplo

let parrafoEjemplo = document.getElementById("ejemplo")
//Modificar el texto del elemento html com id ejemplo
parrafoEjemplo.innerText = "Hola Bootcamp QA"


//Obtener el elemento html con id ejemploTitulo
let tituloEjemplo = document.getElementById("ejemplotitulo");
let miNombre = "Camila"
let miEdad = 38
tituloEjemplo.innerText = "Hola mi nombre es " + miNombre + " y mi edad es " + miEdad;

//Obtener el elemento HTML con id ejemplo2 y agragarun texto con etiquetas en html
let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.innerHTML = "<b> Ejemplo 2 en negrita</b>";

// Obterner el atributo del elmento con id ejemplo3 y agregar un url
let ejemplo3 = document.getElementById("ejemplo3");
let paginaWeb = "https://bootcampqa.com";
ejemplo3.href = paginaWeb;

//Obtener el elemento html con id ejemplo 4 y cambiar su color a rojo.
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

