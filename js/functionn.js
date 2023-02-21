/**
document.getElementById('boton').onclick = function(){console.log("cpturamos el evento click")
document.getElementById("demo").innerHTML = "estamos probando el primer evento" ;  }


document.addEventListener('click',function(){
    console.log("hola mundo desde EL"); document.getElementById("demo").innerHTML = "ESTAMOS     probando nuestro 1 evento EL"
});

document.getElementById('boton_color').addEventListener('click',function(){document.body.style.backgroundColor = "blue" ;
}); 
                                
document.getElementById('boton_volver').addEventListener('click',function(){ document.body.style.backgroundColor = 'antiquewhite' ;
});

document.getElementById('boton_ocultar').addEventListener('click',function(){ document.getElementById('demo').style.display = 'none' ;
}); */


//Variables: 
const boton_color = document.getElementById('boton_color')
const boton_volver = document.getElementById('boton_volver')
const boton_ocultar = document.getElementById('boton_ocultar')
const demo = document.getElementById("demo")
var contador = 0
//const span = document.querySelector(".color")

//Funcion: globales: 
function mostrarColor() {
    document.body.style.backgroundColor = "blue"
}
function Volver() {
    document.body.style.backgroundColor = 'antiquewhite'
}
function mostrarPrimerEvento() {
    demo.innerHTML = "Estamos probando nuestro 1 evento"
}
function Ocultar() {
    demo.style.display = 'none'
}


//Eventos globales
boton_color.addEventListener("click", mostrarColor)
boton_volver.addEventListener("click", Volver)
boton_ocultar.addEventListener("click", Ocultar)
document.addEventListener("click", mostrarPrimerEvento)

boton_ocultar.addEventListener("click", function(e){
    if(contador==0){
        demo.style.display = "none"
        contador=1
    }
    else{
        demo.style.display="block"
        contador=0
    }
})

//**botonexp1.addEventListener("click", function(e){
 //   if(contador==0){
   //     infoexp1.style.display = "block"
     //   contador=1 
  //  }else{
    //    infoexp1.style.display = "none"
      //  contador = 0
    //}
//})
