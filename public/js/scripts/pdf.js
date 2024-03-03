const { jsPDF } = window.jspdf;
function generarPDF(){
    var nombre = nombreEstudiante.value +" "+ apellidoEstudiante.value;
    const pdf = new jsPDF({
        orientation: "landscape",
    });
    console.log("Se creo el pdf");
    pdf.addImage(imgData,'JPEG', 0, 0, 300, 210);
    pdf.setFont("PoiretOne");
    pdf.setFontSize(25);
    pdf.text(105, 107, nombre);
    pdf.setFontSize(16);
    pdf.text(90, 119, fechaInicio.value);
    pdf.text(75, 127, horario.value);
    pdf.text(190, 119, modalidad.value);
    pdf.text(190, 127, nivel.value);
    console.log(pdf.value);
    pdf.save('babasa.pdf');
}
