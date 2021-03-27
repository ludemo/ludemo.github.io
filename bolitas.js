window.addEventListener('scroll', function(){
    let bola1 = document.getElementById('bol1');
    let bola2 = document.getElementById('bol2');
    let bloque2 = document.getElementById('b2');
    let posicion = bloque2.getBoundingClientRect().top;
    console.log(posicion);
    let tamPantalla = window.innerHeight/3;
    console.log("Hola funcionas?");

    if(posicion < tamPantalla){
        bola2.style.animation = 'crecer 1s ease-out';
        bola1.style.animation = 'achicar 1s ease-out';
        console.log('entro al if');
    }
})