import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {

  constructor() { }

  public generatePdf(htmlContent: any, fileName: string, width: number, height: number): void {
    const pdf = new jsPDF();
    // pdf.html(htmlContent, {
    //   callback: (pdf) => {
    //     pdf.save(fileName);
    //   }
    // });
    html2canvas(htmlContent, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF();
      if (width < 450) {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 5, 100, 250);
      } else {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 5, 200, 250);
      }
     
      pdf.setProperties({
        title: 'Receipt',
        subject: 'Receipt from Pride of Mt. Pisgah No. 135',
        author: 'Clifton Mauldin'
      });

      pdf.setFontSize(12);
      pdf.save(fileName);
    });
  }
}
