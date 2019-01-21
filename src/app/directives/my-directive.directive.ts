import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myDir]'
})
export class MyDirectiveDirective {
  private el;
  @Input('stringToAdd') stringToAdd: string;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('blur') onBlur() {
      const value: string = this.el.value;
      this.el.value = this.stringToAdd + value + this.stringToAdd;
  }
}
