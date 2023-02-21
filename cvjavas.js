/**var profe= "si" ;
if (profe="si ") {console.log("mostrar documento"); }
else { console.log ("no mostrar texto")}
document.addEventListener('click',function(){
   document.getElementById('botonexp1').addEventListener('click',function(){ document.getElementById('infoexp1').style.display = 'block' ;    
    }}*/

const botonexp1 = document.querySelector("#botonexp1")
const infoexp1 = document.querySelector(".infoexp1")
const botonexp2 = document.querySelector("#botonexp2")
const infoexp2 = document.querySelector(".infoexp2")
const botonexp3 = document.querySelector("#botonexp3")
const infoexp3 = document.querySelector(".infoexp3")
var contador = 0


//Funciones Globales:
function Mostrar() {
    demo.style.display = 'block'
}

//Eventos Globales:
botonexp1.addEventListener("click", Mostrar)
botonexp2.addEventListener("click", Mostrar)
botonexp3.addEventListener("click", Mostrar)
    
botonexp1.addEventListener("click", function (e) {
    if (contador == 0) {
        infoexp1.style.display = "block"
        botonexp1.innerHTML = "Ocultar detalle de la experiencia "
        contador = 1
    } else {
        infoexp1.style.display = "none"
        botonexp1.innerHTML = "Mostrar detalle de la experiencia "
        contador = 0
    }

})
botonexp2.addEventListener("click", function (e) {
    if (contador == 0) {
        infoexp2.style.display = "none"
        botonexp2.innerHTML = "Mostrar detalle de la experiencia "
        contador = 1
    } else {
        infoexp2.style.display = "block"
        botonexp2.innerHTML = "Ocultar detalle de la experiencia "
        contador = 0
    }
})


botonexp3.addEventListener("click", function (e) {
    if (contador == 0) {
        infoexp3.style.display = "none"
        botonexp3.innerHTML = "Mostrar detalle de la experiencia "
        contador = 1
    } else {
        infoexp3.style.display = "block"
        botonexp3.innerHTML = "Ocultar detalle de la experiencia "
        contador = 0
    }
})


//if(infoexp1.style.display.contains("block"){ botonexp1.innerHTML = "Ocultar"}) 



