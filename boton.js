
//console.log("Estoy en BotonJS")

const botonexp1 = document.querySelector("#botonexp1")
const infoexp1 = document.querySelector(".infoexp1")
var contador = 0
botonexp1.addEventListener("click", function(e) {
    if(contador == 0){
        infoexp1.style.display = "block"
        contador=1 
    }else{
        infoexp1.style.display = "none"
        contador = 0
    }
}) 


//document.querySelector("body")