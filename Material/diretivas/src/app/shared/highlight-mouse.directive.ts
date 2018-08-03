import { Directive, HostListener, Renderer, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  //================================================
  //HTML EVENTS LIST
  //https://www.w3schools.com/jsref/dom_obj_event.asp
  //================================================
  
  
  //FIRST OPTION
  // @HostListener('mouseover') onMouseEnter() {
  //   this._rendered.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  // }
  
  // @HostListener('mouseout') onMouseLeave() {
  //   this._rendered.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
  // }

  //================================================
  
  //SECOND OPTION
  // @HostBinding('style.backgroundColor') color;
  
  // @HostListener('mouseover') onMouseEnter() {
  //   this.color = 'yellow';
  // }
  
  // @HostListener('mouseout') onMouseLeave() {
  //   this.color = 'white';
  // }

  //================================================
  
  //THIRD OPTION
  private _color;
  @HostBinding('style.backgroundColor') get setColor() {
    //You could add some other expression.
    return this._color;
  }
  
  @HostListener('mouseover') onMouseEnter() {
    this._color = 'yellow';
  }
  
  @HostListener('mouseout') onMouseLeave() {
    this._color = 'white';
  }
  
  
  constructor(
    // private _rendered: Renderer, 
    // private _elementRef: ElementRef
  ) { }
  
}
