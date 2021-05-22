new WholePageSlider();
let servicio = document.getElementsByClassName("servicio");
const media = matchMedia('(max-width:700px)');
console.log("entro")
console.log(media.matches)
if(media.matches){
    for(let i = 0 ;i < servicio.length ; i++){
        servicio[i].className += " page";
    }
}
//----------------
let muestra= getComputedStyle(document.querySelector('.bloque1')).getPropertyValue('transform')
console.log(muestra)