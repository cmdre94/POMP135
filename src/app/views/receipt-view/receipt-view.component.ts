import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ExportPdfService } from 'src/app/services/export-pdf.service';

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.css']
})
export class ReceiptViewComponent implements OnInit, OnDestroy {
  public receiptForm: FormGroup;
  public recNo: string = this.generateRandomString();
  public isFormSubmitted: boolean = false;
  @ViewChild('formBody') myElement: ElementRef;
  constructor(private exportPdfService: ExportPdfService) { }

  ngOnInit(): void {
    this.createReceiptForm();
  }

  ngOnDestroy(): void {
    this.isFormSubmitted = false;
  };

  ngAfterViewInit() { 
    // Access DOM element properties
    // console.log(this.myElement.nativeElement.innerHTML);
  }

  /**
   * @description - Generates a form to create a receipt
   * @returns {void}
   */
  private createReceiptForm(): void {
    this.receiptForm = new FormGroup({
      'member': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ]),
      'for': new FormControl(null, [
        Validators.required,
        Validators.maxLength(255)
      ]),
      'lodgeName': new FormControl('Pride of Mt. Pisgah', [
        Validators.minLength(1),
        Validators.maxLength(60)
      ]),
      'lodgeNo': new FormControl('135', [
        Validators.minLength(1),
        Validators.maxLength(60)
      ]),
      'recNo': new FormControl(this.recNo, [
        Validators.minLength(1),
        Validators.maxLength(60)
      ]),
      'city': new FormControl('Dallas', [
        Validators.minLength(2),
        Validators.maxLength(60)
      ]),
      'state': new FormControl('Texas', [
        Validators.minLength(2),
        Validators.maxLength(60)
      ]),
      'recDate': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ]),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ]),
      'amountPaid': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ]),
      'balanceDue': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ]),
      'paymentType': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ]),
      'by': new FormControl(null, [
        Validators.required,
        Validators.maxLength(60)
      ])
    });
  }

  /**
   * @description - Generates a reandom string to use for the receipt number
   * @returns {string}
   */
  private generateRandomString(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
  
    return result;
  }

  /**
   * @description - Submits the form
   * @returns {void}
   */
  public onSubmit(): void {
    this.isFormSubmitted = true;
    console.log('Height Width', window.innerWidth, window.innerHeight);
    // console.log('FORM', this.receiptForm);
    // const htmlContent = document.getElementById('formBody').innerHTML;
    // const fileName = `${this.receiptForm?.value?.member?.replace(' ', '_')}_${this.receiptForm?.value?.recNo}.pdf`;
    // console.log('FILENAME', fileName);
    // this.exportPdfService.generatePdf(htmlContent, fileName);
  }

  /**
   * @description - Creates the receipt
   * @returns {void}
   */
  public createReceipt(): void {
    console.log(this.myElement.nativeElement.innerHTML);
    // const htmlContent = this.myElement?.nativeElement?.innerHTML
    const htmlContent = document.getElementById('formBody');
    const fileName: string = this.receiptForm?.value?.member ? `${this.receiptForm?.value?.member?.replace(' ', '_')}_${this.receiptForm?.value?.recNo}.pdf` : 'error.pdf';
    const viewportWidth: number = window.innerWidth;
    const viewportHeight: number = window.innerHeight;
    console.log('FILENAME', fileName);
    this.exportPdfService.generatePdf(htmlContent, fileName, viewportWidth, viewportHeight);
    this.isFormSubmitted = false;
    this.createReceiptForm();
    this.recNo = this.generateRandomString();
  }

  /**
   * @description - Resets the form
   * @returns {void}
   */
  public goBack(): void {
    this.isFormSubmitted = false;
  }
}
