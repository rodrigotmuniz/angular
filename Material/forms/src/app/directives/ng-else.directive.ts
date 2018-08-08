import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if(condition) {
      this._viewContainerRef.clear();
    }
    else {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }

  condition;
  
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
