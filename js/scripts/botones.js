var cant = 0;
var pregunta = document.getElementsByClassName("form__seccion");
var prev = document.getElementById("anterior");
var next = document.getElementById("siguiente");
var enviar = document.getElementById("enviar");
var section = 0;
//empezamos con el responsive para el texto
var facturacion = document.getElementById("form__text__facturacion")
var datosPersonales = document.getElementById("form__text__datosPersonales")
var datosUbicacion = document.getElementById("form__text__datosUbicacion")
var datosFinales= document.getElementById("form__text__ultimo")
//Responsive
var viewport700 = window.matchMedia("(max-width: 700px)");
var viewport900 = window.matchMedia("(max-width: 900px)");

function cambiarTexto(){
    console.log("Entramos a cambiar texto")
    if(viewport.matches){
        if(section == 0){
            facturacion.style.display = "block";
            datosPersonales.style.display = "none";
            datosUbicacion.style.display = "none";
            datosFinales.style.display = "none";
        }
        else if(section == 1){
            facturacion.style.display = "none";
            datosPersonales.style.display = "block";
            datosUbicacion.style.display = "none";
            datosFinales.style.display = "none";
        }
        else if(section == 2){
            console.log("Estamos cambiando el texto de la sección 2")
            facturacion.style.display = "none";
            datosPersonales.style.display = "none";
            datosUbicacion.style.display = "block";
            datosFinales.style.display = "none";
        }
        else {
            facturacion.style.display = "none";
            datosPersonales.style.display = "none";
            datosUbicacion.style.display = "none";
            datosFinales.style.display = "block";
        }
    }
    
}
//Fin de cosas de la barra
function avanzar(){
    for(let i = 0 ; i<pregunta.length; i++){
        pregunta[i].style.transform="translateX(-"+cant+"%)";
        if(viewport900.matches){
            if( i != section ){
                pregunta[i].style.height  = "0px";
            }
            else {
                pregunta[i].style.height = "auto";
            }
        }
    }
    visibilidad();
}
function siguiente(){
    console.log(section);
    if(section == 0){
        //is value esta vacio entones reviso lo manda a su casa y luego peude llenar el form otar vez.
        if(image.value == ""){
            alert("Ingrese una imagen de su comprobante");
        }
        else if(numeroOperacion.value == "" && modalidadPago.value != "Yape" && modalidadPago.value != "Efectivo"){
            alert("Ingrese el numero de operación");
        }
        else if(nombreBoleta.value ==""){
            alert("Ingrese el nombre para su boleta");
        }
        else if(documentoBoleta.value == ""){
            alert("Ingrese el número de DNI para su boleta");
        }
        else if(documentoBoleta.value.length != 8 && TipoDocumentoBoleta.value == "D.N.I."){
            alert("Ingrese un número de DNI válido");
        }
        else{
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        }
    }
    else if(section == 1){
        if(apellidoEstudiante.value == ""){
            alert("Ingrese el apellido del estudiante");
        }
        else if(nombreEstudiante.value == ""){
            alert("Ingrese el nombre del estudiante");
        }
        else if (nacimientoEstudiante.value == ""){
            alert("Ingrese la fecha de nacimiento del estudiante");
        }
        else if(celularEstudiante.value == ""){
            alert("Ingrese el número de celular del estudiante");
        }
        else if(celularEstudiante.value.length != 9){
            alert("Ingrese un número de celular válido");
        }
        else if(documentoEstudiante.value == ""){
            alert("Ingrese el número de documento del estudiante");
        }
        else if(documentoEstudiante.value.length != 8 && tipoDocumentoEstudiante.value == "D.N.I."){
            alert("Ingrese un número de DNI válido");
        }
        else{
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        }
    }
    else if(section == 2){
        if(lugarNacimientoEstudiante.value == ""){
            alert("Ingrese el lugar de nacimiento del estudiante");
        }
        else if(direccionEstudiante.value ==""){
            alert("Ingrese la dirección del estudiante");
        }
        else if(correoEstudiante.value == ""){
            alert("Ingrese el correo del estudiante");
        }
        else{ 
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        }  
    }
    cambiarTexto();
}


function anterior(){
    anteriorBarra();
    cant-=100;
    avanzar();
    cambiarTexto();
    console.log("Anterior, ahora estas en section : "+section)
}
function visibilidad(){
    if(cant == 300){
        next.style.visibility="hidden";
        enviar.style.visibility="visible";
    }
    else{
        next.style.visibility="visible"
        enviar.style.visibility="hidden";
    }
    if(cant == 0){
        prev.style.visibility="hidden";
    }
    else{
        prev.style.visibility="visible";
    }
}

//Cosas de la barra
//efecto de hacer click y que deslice
    //botones
    var barra = document.getElementsByClassName("barra");
    var estado = document.getElementsByClassName("estado");
    var listo = document.getElementsByClassName("listo");
    var proceso = document.getElementsByClassName("proceso");
    var estado_img = document.getElementsByClassName("estado-img");
    proceso[0].style.display ="block";
    //Retroceder
    function anteriorBarra(){
        section-=1;
        barra[section].style.width = "0%";
        if(section > 0){
            barra[section-1].style.background="linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)";       
        }
        estado[section+1].classList.remove("actual");
        estado[section+1].classList.add("noPaso")
        estado[section].classList.remove("paso");
        estado[section].classList.add("actual");
        //color de los circulous
        listo[section].style.display="none";   
        proceso[section].style.display = "block"; 
        proceso[section+1 ].style.display = "none";
        //img color  
        console.log(estado_img[section]);
        estado_img[section].classList.add("actual-img");
        estado_img[section+1].classList.remove("actual-img");    
        estado_img[section].classList.remove("paso-img");
    }
    //Cambiar a siguiente
    function siguienteBarra(){
        if(section<4){
            barra[section].style.width = "100%";
            if(section>0){
                barra[section-1].style.background="#006D77";            
            }
            section+=1;

            estado[section-1].classList.remove("actual");
            estado[section].classList.add("actual");
            estado[section-1].classList.add("paso");
            //color de los circulous
            listo[section-1].style.display="block";   
            proceso[section].style.display = "block";
            proceso[section-1].style.display = "none"; 
            //img color  
            estado_img[section].classList.add("actual-img");
            estado_img[section-1].classList.remove("actual-img");    
            estado_img[section-1].classList.add("paso-img");
        }
    }