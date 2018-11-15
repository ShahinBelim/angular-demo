import { Directive, Renderer2, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {

  @HostBinding('style.border') border: string;

  @HostListener('mouseover')
  onmouseover() {
    this.border = '2px solid green';
    this.changeBgColor('red');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.changeBgColor('black');
    this.border = '2px solid black';
  }

  @HostListener('click') onclick() {
    window.alert("Element clicked");
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  changeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color)
  }
}
