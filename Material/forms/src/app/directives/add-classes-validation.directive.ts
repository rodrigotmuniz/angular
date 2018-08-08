import { Directive, Input, HostBinding, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[addClassesValidation]'
})
export class AddClassesValidationDirective {

  condition;
  
  @Input() set addClassesValidation(conditon) {
    console.log(conditon)
    this.condition = this.condition;
    this.classes = conditon ? 'has-error has-feedback' :  '';
  };


  @HostBinding('class') classes;

  // @Input() set ngElse(bla) {
  //   if(this.condition) {
  //     this._viewContainerRef.clear();
  //   }
  //   else {
  //     this._viewContainerRef.createEmbeddedView(this._templateRef);
  //   }
  // }

  constructor(
    // private _templateRef: TemplateRef<any>,
    // private _viewContainerRef: ViewContainerRef
  ) { }
  
}
