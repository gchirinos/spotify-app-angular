import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input()
  @HostListener('error') handleError(): void {
    const elementNativo = this.elHost.nativeElement;
    console.log('👀 ésta imagen revento:', this.elHost);
    elementNativo.src = '../../../assets/images/broken-1.png';
  }

  constructor(private elHost: ElementRef) { 
    console.log(elHost);

  }

}
