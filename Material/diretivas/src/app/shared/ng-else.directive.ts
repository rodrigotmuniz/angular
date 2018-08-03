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

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
