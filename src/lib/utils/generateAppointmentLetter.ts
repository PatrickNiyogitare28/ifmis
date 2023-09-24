import { PDFDocument, rgb } from 'pdf-lib';
import download from 'downloadjs';

export async function generateAppointmentLetterPDF(fullName: string, appointmentType: string, appointmentTime: string) {
    console.log("in pdf")
    const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([500, 600]);


   page.drawText(`Dear ${fullName}`, { x: 20, y: 500, size: 10 })
   page.drawText(`We are pleased to inform you that your appointment for "${appointmentType}" has been approved. 
   Your appointment is scheduled for ${appointmentTime}. Our team is looking forward to assisting you with any questions or concerns you may have regarding ${appointmentType}. 
`, { x: 20, y: 450, size: 10 })

page.drawText(`Here are some important details for your appointment:`, { x: 20, y: 300, size: 10 })
page.drawText(`Date: ${appointmentTime}`, { x: 20, y: 270, size: 10 })
page.drawText(`Type: ${appointmentType}`, { x: 20, y: 250, size: 10 })

page.drawText(`If you have any questions or need to reschedule, please don't hesitate to contact us at info@ifms.gov.rw : ${appointmentType}`, { x: 20, y: 200, size: 10 })
page.drawText(`Thank you for choosing our services. We are committed to providing you with the best possible assistance. : ${appointmentType}`, { x: 20, y: 150, size: 10 })


pdfDoc.setTitle('🥚 Appointment letter 🍳')
pdfDoc.setAuthor('MINECOFIN')
pdfDoc.setCreationDate(new Date())
pdfDoc.setModificationDate(new Date())

// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save()

  console.log(pdfBytes);
  download(pdfBytes, "appointment.pdf", "application/pdf");

  return pdfBytes;
}
