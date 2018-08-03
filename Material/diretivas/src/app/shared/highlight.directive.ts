import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //================================================
  //HTML EVENTS LIST
  //https://www.w3schools.com/jsref/dom_obj_event.asp
  //================================================

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'yellow';
  
  @HostBinding('style.backgroundColor') color;
  
  @HostListener('mouseover') onMouseEnter() {
    this.color = this.highlightColor;
  }
  
  @HostListener('mouseout') onMouseLeave() {
    this.color = this.defaultColor;
  }

  
  
  constructor(
    // private _rendered: Renderer, 
    // private _elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.color = this.defaultColor;
  }

}
