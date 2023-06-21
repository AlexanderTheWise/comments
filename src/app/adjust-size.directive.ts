import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[adjustSize]',
})
export class AdjustSizeDirective {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('input') onScrollableInput() {
    this.el.nativeElement.style.minHeight = 'auto';

    const scHeight = this.el.nativeElement.scrollHeight;

    this.el.nativeElement.style.minHeight = scHeight + 'px';
  }
}
