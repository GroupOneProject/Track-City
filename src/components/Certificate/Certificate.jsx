import React from 'react'
import './Certificate.css'
import Designer from '../../assets/Track-city-logo.png'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



function CreateCertificate() {
    const downloadCertificate = () => {


// PDF Dimensions
const pdfWidth = 297; 
const pdfHeight = 210; 

  // Scale factor to fit content within PDF
  const scale = 5


    const certificateHtml = `<div>
    <div class="certificate">
    <img src="${Designer}" alt="Logo" class="logo">
    <h1 class="title">Well Done this week!</h1>
    <p class="description">Congratulations on your achievements this week. Keep up the good work!</p>
  </div>`

 


    
    const element = document.createElement('div');
    element.classList.add('pdf');
    element.innerHTML = certificateHtml;
    document.body.appendChild(element); // Temporarily add to the document

    html2canvas(element, { scale: scale }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape', 
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      });
      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");


      document.body.removeChild(element); // Clean up
    });
  };

  return (
    <button onClick={downloadCertificate}>Download Certificate</button>
  );
}

export default CreateCertificate