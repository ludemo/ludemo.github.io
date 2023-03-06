const { jsPDF } = window.jspdf;
function generarPDF(){
    const pdf = new jsPDF();
    console.log("Se creo el pdf");
    pdf.text(10, 10, 'Hola HDTPTM!');
    pdf.text(10, 30, 'Esta es tu pinche constancia no la pierdas');
    pdf.save('babasa.pdf');
}
