import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myDir]'
})
export class MyDirectiveDirective {
  private el;
  // tslint:disable-next-line:no-input-rename
  @Input('stringToAdd') stringToAdd: string;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('blur') onBlur() {
      const value: string = this.el.value;
      this.el.value = this.stringToAdd + value + this.stringToAdd;
  }
}
