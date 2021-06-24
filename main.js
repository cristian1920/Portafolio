let boton=document.getElementById("icono");
let enlaces=document.getElementById("enlaces");
let inicio=document.getElementById("inicio");
let about=document.getElementById("about");
let contacto=document.getElementById("contacto");
let acerca=document.getElementById("acercade");
let contador = 0;
function Click(){
    if(contador==0){
        enlaces.className=('enlaces dos');
        contador=1;      
    }else{
        enlaces.classList.remove('dos');        
        enlaces.className=('enlaces uno');
        contador=0;
    }
}
boton.addEventListener("click",Click);
inicio.addEventListener("click",Click);
about.addEventListener("click",Click);
contacto.addEventListener("click",Click);

window.addEventListener('resize',function(){
    if(screen.width>750){
        enlaces.classList.remove('dos');
        enlaces.className=('enlaces uno');
        contador=0;
    }
})

