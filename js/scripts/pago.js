var tipoPago = document.getElementById("pago");
var img = document.getElementById("pago-imagen");

var filename = document.getElementById("file");
filename.addEventListener("change", function(){
    let html="";
    var tamaño = filename.value.toString().length;
    var nombre = filename.value.toString().substring(12, tamaño);
    console.log(filename.value);
    html +=`Gracias por subir: ${nombre}`;
    document.getElementById("file-content").innerHTML = html;
});

tipoPago.addEventListener("change", function() {
    if(tipoPago.value == "Yape"){
        console.log("Yape");
        img.src = "img/yape-skala.png";
    }
    else{
        console.log("Deposito");
        img.src = "img/cuentas.png";
    }
});
