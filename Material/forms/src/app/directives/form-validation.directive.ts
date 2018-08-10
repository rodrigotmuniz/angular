import { Directive, HostBinding, Input, Renderer, ElementRef, Renderer2, ViewChild, Output, HostListener } from '@angular/core';
import { tokenKey } from '../../../node_modules/@angular/core/src/view';
import { NgModel } from '../../../node_modules/@angular/forms';

@Directive({
  selector: '[formValidation]'
})
export class FormValidationDirective {
  
  errorIcon;
  successIcon;
  errorMessage;
  errorMessageValue;
  
  @Input() class;
  @Input() validationMessage;
  @Input() emptyMessage;
  @Input() formValidation;
  @Input() useIcon;
  
  @HostBinding('class') classes;
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }
  
  ngOnInit() {
    this.initializeErrorMessage();
    this.initializeErrorMessageValue();
    this.initializeIcons();
  }
  
  initializeErrorMessage() {
    this.errorMessage = this.renderer.createElement('div');
    this.renderer.addClass(this.errorMessage, 'help-block');
    if (!this.emptyMessage) {
      this.emptyMessage = this.validationMessage;
    }
  }

  initializeErrorMessageValue() {
    this.errorMessageValue = this.renderer.createText('Error Message');
  }
  
  initializeIcons() {
    this.successIcon = this.initializeIcon('glyphicon-ok');
    this.errorIcon = this.initializeIcon('glyphicon-remove');
  }

  initializeIcon(glyphicon) {
    if(this.useIcon) {
      let icon = this.renderer.createElement('span');
      this.renderer.addClass(icon, 'glyphicon');
      this.renderer.addClass(icon, glyphicon);
      this.renderer.addClass(icon, 'form-control-feedback');
      this.renderer.setStyle(icon, 'text-align', 'inherit');
      return icon;
    }
  }
  
  ngDoCheck() {
    this.classes = this.class ? this.class : '';
    if(this.formValidation.invalid && this.formValidation.touched) {
      this.classes += ' has-error has-feedback';
      this.renderErrorView();
      
      if (this.formValidation.value == '') {
        this.renderer.setValue(this.errorMessageValue, this.emptyMessage);
      }
      else {
        this.renderer.setValue(this.errorMessageValue, this.validationMessage);
      }
    }
    else if (this.formValidation.touched) {
      this.classes += ' has-success has-feedback';
      this.renderSuccessView();
    } 
  }

  renderErrorView() {
    this.renderer.appendChild(this.errorMessage, this.errorMessageValue);
    this.renderer.appendChild(this.el.nativeElement, this.errorMessage);

    if(this.useIcon) {
      this.renderer.appendChild(this.el.nativeElement, this.errorIcon);
    }

    if (this.useIcon && this.renderer.parentNode(this.successIcon)) {
      this.renderer.removeChild(this.el.nativeElement, this.successIcon);
    }
  }

  renderSuccessView() {
    if (this.renderer.parentNode(this.errorMessage)) {
      this.renderer.removeChild(this.el.nativeElement, this.errorMessage);
    }

    if (this.useIcon && this.renderer.parentNode(this.errorIcon)) {
      this.renderer.removeChild(this.el.nativeElement, this.errorIcon);
    }

    if(this.useIcon) {
      this.renderer.appendChild(this.el.nativeElement, this.successIcon);
    }
  }

}
