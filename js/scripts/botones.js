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
        let image = document.getElementById("file").value;
        var nombreBoleta = document.getElementById("nombreBoleta").value;
        //is value esta vacio entones reviso lo manda a su casa y luego peude llenar el form otar vez.
        var documentoBoleta = document.getElementById("documentoBoleta").value;
        var TipoDocumentoBoleta = document.getElementById("TipoDocumentoBoleta").value;

        var NumeroOperacion = document.getElementById("numeroOperacion").value;
        var modalidadPago = document.getElementById("pago").value;
        if(image == ""){
            alert("Ingrese una imagen de su comprobante");
        }
        else if(NumeroOperacion == "" && modalidadPago != "Yape"){
            alert("Ingrese el numero de operación");
        }
        else if(nombreBoleta ==""){
            alert("Ingrese el nombre para su boleta");
        }
        else if(documentoBoleta == ""){
            alert("Ingrese el número de documento de su boleta");
        }
        else if(documentoBoleta.length != 8 && TipoDocumentoBoleta == "D.N.I."){
            alert("Ingrese un número de DNI válido");
        }
        else{
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        }
    }
    else if(section == 1){
        var apellidoEstudiante = document.getElementById("apellidoEstudiante").value;
        var nombreEstudiante = document.getElementById("nombreEstudiante").value;
        var nacimientoEstudiante = document.getElementById("nacimientoEstudiante").value;
        var celularEstudiante = document.getElementById("celularEstudiante").value;
        var documentoEstudiante = document.getElementById("documentoEstudiante").value;
        var tipoDocumentoEstudiante = document.getElementById("tipoDocumentoEstudiante").value;
        if(apellidoEstudiante == ""){
            alert("Ingrese el apellido del estudiante");
        }
        else if(nombreEstudiante == ""){
            alert("Ingrese el nombre del estudiante");
        }
        else if (nacimientoEstudiante == ""){
            alert("Ingrese la fecha de nacimiento del estudiante");
        }
        else if(celularEstudiante == ""){
            alert("Ingrese el número de celular del estudiante");
        }
        else if(celularEstudiante.length != 9){
            alert("Ingrese un número de celular válido");
        }
        else if(documentoEstudiante == ""){
            alert("Ingrese el número de documento del estudiante");
        }
        else if(documentoEstudiante.length != 8 && tipoDocumentoEstudiante == "D.N.I."){
            alert("Ingrese un número de DNI válido");
        }
        else{
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        }
    }
    else if(section == 2){
        var lugarNacimientoEstudiante = document.getElementById("lugarNacimientoEstudiante").value;
        var direccionEstudiante = document.getElementById("direccionEstudiante").value;
        var correoEstudiante = document.getElementById("correoEstudiante").value;

        if(lugarNacimientoEstudiante == ""){
            alert("Ingrese el lugar de nacimiento del estudiante");
        }
        else if(direccionEstudiante ==""){
            alert("Ingrese la dirección del estudiante");
        }
        else if(correoEstudiante == ""){
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