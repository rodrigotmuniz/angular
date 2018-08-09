import { Directive, HostBinding, Input, Renderer, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[formValidation]'
})
export class FormValidationDirective {

  messageElement;
  iconElement;
  
  @Input() touched = false;
  @HostBinding('class') classes = 'form-group col-sm-12';
  
  @Input() set formValidation(condition) {
    if(condition && this.touched) {
      this.classes = 'form-group col-sm-12 has-error has-feedback';
      this.renderer.setStyle(this.messageElement, 'display', 'block');
      this.renderer.setStyle(this.iconElement, 'display', 'block')
    }
    else {
      this.classes = this.touched ? 'form-group col-sm-12 has-success has-feedback' : 'form-group col-sm-12';
      this.messageElement ? this.renderer.setStyle(this.messageElement, 'display', 'none') : null;
      this.iconElement ? this.renderer.setStyle(this.iconElement, 'display', 'none') : null;
    }
  };
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { 
  }
  
  ngOnInit() {
    
  }
  ngAfterContentInit() {
    this.initializeIconElement();
    this.initializeMessageElement();
  }

  initializeMessageElement() {
    this.messageElement = this.renderer.createElement('messageElement');
    this.renderer.addClass(this.messageElement, 'help-block');
    const text = this.renderer.createText('Campo obrigatóriosss');
    this.renderer.appendChild(this.messageElement, text);
    this.renderer.appendChild(this.el.nativeElement, this.messageElement);
    this.renderer.setStyle(this.messageElement, 'display', 'none')
  }

  initializeIconElement() {
    this.iconElement = this.renderer.createElement('messageElement');
    this.renderer.addClass(this.iconElement, 'glyphicon');
    this.renderer.addClass(this.iconElement, 'glyphicon-remove');
    this.renderer.addClass(this.iconElement, 'form-control-feedback');
    this.renderer.appendChild(this.el.nativeElement, this.iconElement);
    this.renderer.setStyle(this.iconElement, 'display', 'none')
  }
  
}
