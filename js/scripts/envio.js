//Envio a google sheet
let urlScriptSheet = "https://script.google.com/macros/s/AKfycbxItl5PVwJruFbAy-boxtEt5C0ZqIbELkYBJDnGBX0DdjKpPHqvwfboxiTjng90yWbe/exec";
//Envio para hacer pruebas y no gastar solicitudes :" 
//let urlScriptSheet : "https://script.google.com/macros/s/AKfycbxItl5PVwJruFbAy-boxtEt5C0ZqIbELkYBJDnGBX0DdjKpPHqvwfboxiTjng90yWbe/exec"
//Envio hacia whatsapp
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}
const formulario = document.getElementById('form');
//selectores para el loader
var buttonSubmit = document.getElementById('enviar');
var loader = document.getElementById("carga");
var cargaEfecto = document.getElementById("carga__efecto")
var logo = document.getElementById("img__carga");
var texto__carga = document.getElementById("texto__carga");
var opciones_form = document.getElementById("opciones__form");
//hasta aquí noma

formulario.addEventListener('submit', async (event) => {
    if(fechaInicio.value == ""){
        alert("Ingrese la fecha cuando iniciara sus clases");
        event.preventDefault();
    }
    else if(institucion.value == ""){
        alert("Ingrese la institución de procedencia");
        event.preventDefault();
    }
    else if(apellidoRepresentante.value == ""){
        alert("Ingrese el apellido del apoderado");
        event.preventDefault();
    }
    else if(telefonoRepresentante.value == ""){
        alert("Ingrese el Número de celular del representante");
        event.preventDefault();
    }
    else if(nombreRepresentante.value == ""){
        alert("Ingrese el nombre del apoderado");
        event.preventDefault();
    }
    else{//se envian los datos y carga
        buttonSubmit.disabled = false; 
        loader.style.display = "flex";
        //pa ponerle al centro
        var html = document.getElementById("html");
        window.scrollTo(0, 0);
        html.style.overflow = "hidden";
        confirm == true;
        //Desactivación del boton enviar porque ya envio y que actualice la página
        event.preventDefault()
        buttonSubmit.disabled = true
        //Envio de imagen 
        //Si paso las validaciones de los datos puede ejecutar todo esto
        let fr = new FileReader();
        fr.addEventListener('loadend',()=>{
            let res = fr.result;
            let spt = res.split("base64,")[1];
            let obj = {
                base64:spt,
                type:image.files[0].type,
                name:image.files[0].name
            }
            fetch(urlScriptSheet,{
                method:"POST",
                mode : "no-cors",
                body:JSON.stringify(obj)
            })
            .then(r=>r.text())
            //actualización de datos
            .then(data =>{
                console.log("Se logro enviar" + data);
                setTimeout(() => {
                    opciones_form.style.display = "flex";
                    /* texto__carga.innerHTML = "Gracias por registrarte, puedes descargar tu comprobante de matricula pero recuerda que es solo referencial,cuando tu matricula sea verificada, se te enviara el comprobante a tu correo electronico y número de celular gracias😉"; */
                    texto__carga.innerHTML = "Gracias por registrarte, se te estara enviando una notificación a un correo con la confirmación de tu matricula cualquier duda no dudes en escribirnos😉";
                    cargaEfecto.style.display = "none"
                    buttonSubmit.disabled = false
                }, 1000);
            })  
        })
        fr.readAsDataURL(image.files[0])
        //Envio de datos sin imagen a google sheet
        try{
            //Link para pruebas :https://sheet.best/api/sheets/ccbce7ee-c532-4a77-8a92-233ea4dc8671
            await fetch('https://sheet.best/api/sheets/ccbce7ee-c532-4a77-8a92-233ea4dc8671',{
                method : 'POST',
                headers : {
                'Content-Type' : 'application/json'
            },
            //al poner un objeto js, y esta cosa lo transforma a JSON   
            body : JSON.stringify({
                //Datos de boleta
                "NombreBoleta" : nombreBoleta.value,
                "Banco" : modalidadPago.value,
                "NumeroOperacion" :  numeroOperacion.value,
                "TipoDocumentoBoleta" : TipoDocumentoBoleta.value,
                "DocumentoBoleta" : documentoBoleta.value,
                //Datos personales
                "ApellidoEstudiante" : apellidoEstudiante.value,
                "NombreEstudiante" : nombreEstudiante.value,
                "NacimientoEstudiante" : nacimientoEstudiante.value,
                "CelularEstudiante" : celularEstudiante.value,
                "TipoDocumentoEstudiante" : tipoDocumentoEstudiante.value,
                "DocumentoEstudiante" : documentoEstudiante.value,
                //Datos de ubicación
                "LugarNacimientoEstudiante" : lugarNacimientoEstudiante.value,
                "DireccionEstudiante" : direccionEstudiante.value,
                "CorreoEstudiante" : correoEstudiante.value,
                //Plan
                "Modalidad" : modalidad.value,
                "Nivel" : nivel.value,
                "Horario" : horario.value,
                "FechaInicio" : fechaInicio.value,
                //Datos academicos
                "Institucion" : institucion.value,
                //Datos del apoderado
                "NombreRepresentante" : nombreRepresentante.value,
                "ApellidoRepresentante" : apellidoRepresentante.value,
                "telefonoRepresentante" : telefonoRepresentante.value,
            })  
        });
        console.log("Terminoo de enviar todooo")
        }
        catch(error){
            console.log(error);
        }        
    }
}); 