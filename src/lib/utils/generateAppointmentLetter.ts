import { PDFDocument, rgb } from 'pdf-lib';
import download from 'downloadjs';

export async function generateAppointmentLetterPDF(fullName: string, appointmentType: string, appointmentTime: string) {
    console.log("in pdf")
    const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([500, 700]);

   page.drawText(`Dear ${fullName}`, { x: 20, y: 500, size: 12 })
   page.drawText(`We are pleased to inform you that your appointment request for 
`, { x: 20, y: 450, size: 12 })

page.drawText(`${appointmentType} has been approved.`, { x: 20, y: 430, size: 12 })
page.drawText(`Our team is looking forward to assisting you with any questions or concerns.`, { x: 20, y: 410, size: 12 })
page.drawText(`you may have regarding ${appointmentType}.`, { x: 20, y: 390, size: 12 })


page.drawText(`Here are some important details for your appointment:`, { x: 20, y: 350, size: 12 })
page.drawText(`Date: ${appointmentTime}`, { x: 20, y: 330, size: 12 })
page.drawText(`Type: ${appointmentType}`, { x: 20, y: 310, size: 12 })

page.drawText(`If you have any questions or need to reschedule, please don't hesitate to contact us`, { x: 20, y: 270, size: 12 })
page.drawText(`at info@ifms.gov.rw.`, { x: 20, y: 250, size: 12 })

page.drawText(`Thank you for choosing our services. We're committed to providing you with`, { x: 20, y: 210, size: 12 })
page.drawText(`the best possible assistance.`, { x: 20, y: 190, size: 12 })

page.drawText(`Best regards,`, { x: 20, y: 150, size: 12 })
page.drawText(`MINECOFIN`, { x: 20, y: 110, size: 12 })


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
