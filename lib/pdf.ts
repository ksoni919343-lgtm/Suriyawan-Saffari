import { PDFDocument } from 'pdf-lib';

export async function generateInvoice(data) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  page.drawText(`Invoice for ${data.id}`);
  return await pdfDoc.save();
}
