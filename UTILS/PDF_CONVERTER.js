/** @format */

// pdfConverter.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// PAGES  ==> useRef()
// type   ==> "file"/"blob"

const convertToPDF = async (pages, type) => {
  const pdf = new jsPDF();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i].current;

    const canvas = await html2canvas(page, { scale: 2 });
    const imgData = canvas.toDataURL("image/webp", 1);

    // SETUP SIZING AND POSITION
    const imgOptions = {
      width: pdf.internal.pageSize.getWidth(), // ADJUST WIDTH
      height: pdf.internal.pageSize.getHeight(), // ADJUST HEIGHT
    };

    pdf.addImage(imgData, "PNG", 0, 0, imgOptions.width, imgOptions.height);

    if (i < pages.length - 1) {
      pdf.addPage();
    }
  }

  if (type === "file") {
    pdf.save("offering_letter.pdf"); // RETURN AS DOWNLOADED FILE
  } else {
    return pdf.output("blob"); // RETURN AS BLOB FILE
  }
};

export { convertToPDF };

// CASE MOBILE AND DESKTOP DIFFERENT SIZE

// const convertToPDF = (datas, type = null) => {
//   const pdf = new jsPDF();

//   datas.forEach(async (data, index) => {
//     const canvas = await html2canvas(data, { scale: 4 });
//     const imgData = canvas.toDataURL("image/jpeg", 4);

//     let ratio = parseInt(canvas.style.width) / parseInt(canvas.style.height);
//     let y = 0;
//     let x = 0;

//     let imgOptions = {
//       width: pdf.internal.pageSize.getWidth(), // Sesuaikan lebar dengan lebar halaman PDF
//       height: pdf.internal.pageSize.getWidth() / ratio, // Sesuaikan tinggi dengan tinggi halaman PDF
//     };

//     if (parseInt(canvas.style.width) < parseInt(canvas.style.height)) {
//       ratio = parseInt(canvas.style.height) / parseInt(canvas.style.width);

//       imgOptions = {
//         width: pdf.internal.pageSize.getHeight() / ratio, // Sesuaikan lebar dengan lebar halaman PDF
//         height: pdf.internal.pageSize.getHeight(), // Sesuaikan tinggi dengan tinggi halaman PDF
//       };

//       x = (pdf.internal.pageSize.getWidth() - imgOptions.width) / 2;
//       y = (pdf.internal.pageSize.getHeight() - imgOptions.height) / 2;
//     }

//     pdf.addImage(imgData, "JPEG", x, y, imgOptions.width, imgOptions.height);
//     pdf.save(`${type} E-Ticket (${index + 1})`);
//   });
// };
