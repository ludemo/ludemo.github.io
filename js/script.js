
let servicio = document.getElementsByClassName("servicio");
let bloque2 = document.getElementById("b2");
const media = matchMedia('(max-width:700px)');
console.log("entro")
console.log(media.matches)
if(media.matches){
    bloque2.classList.toggle("section");
    bloque2.classList.toggle("bloque2");
    for(let i = 0 ;i < servicio.length ; i++){
        servicio[i].className += " section ";
    }
}
new WholePageSlider({
    containerId:'wholepage',
    sectionClass: 'section',
    pageClass: 'page'
})
//----------------
let muestra= getComputedStyle(document.querySelector('.bloque1')).getPropertyValue('transform')
console.log(muestra)
