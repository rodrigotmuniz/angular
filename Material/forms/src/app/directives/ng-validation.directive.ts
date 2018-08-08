import { Directive, Input, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngValidation]'
})
export class NgValidationDirective {
  
  // @Input() set asdf(condition: boolean) {
  //   if(condition) {
  //     this._viewContainerRef.clear();
  //   }
  //   else {
  //     this._viewContainerRef.createEmbeddedView(this._templateRef);
  //   }
  // }
  
  // condition;

  // // @HostBinding('class') classes;
  
  // @Input() set ngValidation(conditon) {
  //   console.log(conditon)
  //   this.condition = this.condition;
  //   // this.classes = conditon ? 'has-error has-feedback' :  '';
  // };
  
  // constructor(
  //   // private _templateRef: TemplateRef<any>,
  //   // private _viewContainerRef: ViewContainerRef
  // ) { }

  // sdfsssssssssssssssssssss

  @Input() set ngValidation(condition: boolean) {
    console.log(condition)
    if(condition) {
      this._viewContainerRef.clear();
    }
    else {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }

  condition;
  @HostBinding('class') classes;
  
  @Input() set addClassesValidation(conditon) {
    console.log(conditon)
    this.condition = this.condition;
    // this.classes = conditon ? 'has-error has-feedback' :  '';
  };

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }
  
}
