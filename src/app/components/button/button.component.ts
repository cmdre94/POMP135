import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() public text: string;
  @Input() public type: string;
  @Input() public value: string;
  @Input() public id: string;
  @Input() public buttonSmall: boolean;
  @Input() public buttonLarge: boolean;
  @Input() public buttonLargeWhite: boolean;
  @Input() public parentFunction: Function;
  @Input() public submit: boolean;
  @Input() public isDisabled: boolean;
  @Input() public buttonLoader: boolean;
  @Input() public status: boolean;
  @Input() public buttonOutline: boolean;
  @Input() public buttonName: string = 'Button';
  @Input() public completeSuccess: boolean;
  @Input() public buttonWhite: boolean;
  @Input() public isExternalLink: boolean;
  @Input() public smFont: boolean;
  @Input() public addPlugin: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description - Call the parent function
   * @param {any} event -
   * @returns {void}
   */
  public callParentFunction(event: any): void {
    // You can use aria-pressed to check if buttons are pressed
    if (this.parentFunction) {
      this.parentFunction.apply(this.parentFunction, [event]);
    } else {
      // Do nothing
    }
  }

}
