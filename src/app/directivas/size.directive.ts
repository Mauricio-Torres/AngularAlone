import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective {

  constructor() { }
  @HostListener('window:resize', ['$event']) onResize(event: any) {

     console.log('size pag Alto ', event.currentTarget.innerHeight);
     console.log('size pag Ancho ', event.currentTarget.innerWidth);

  }
}
