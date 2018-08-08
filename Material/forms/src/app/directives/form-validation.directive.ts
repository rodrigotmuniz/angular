import { Directive, HostBinding, Input, Renderer, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[formValidation]'
})
export class FormValidationDirective {
  
  @Input() touched = false;
  @HostBinding('class') classes = 'form-group col-sm-12';
  
  @Input() set formValidation(condition) {
    if(condition && this.touched) {
      this.classes = 'form-group col-sm-12 has-error has-feedback';
      
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('Campo obrigatóriosss');
      
      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.el.nativeElement, div);
    }
    else {
      this.classes = this.touched ? 'form-group col-sm-12 has-success has-feedback' : 'form-group col-sm-12';
      
    }
  };
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { 
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    // console.log(this._elementRef.nativeElement);
    
    
    
    
  }
  
  ngOnInit() {
    
  }
  
}
