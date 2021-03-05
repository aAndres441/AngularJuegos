import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoHaveImage]'
})
export class NoHaveImageDirective {

  constructor(private element: ElementRef) { }

  // @Input() colorSecond: string = 'yellow';

  /* HostListener , escucho el evento click y ejecuto aca mismo un metodo que llamo toggle*/
  
  @HostListener('error')
  onError():void{
    this.element.nativeElement.src = 'assets/imagenes/error-robot.png';
  }

  

  /*  HostBinding nos permite vincular 
  las prop del elem donde se coloca la Directva, 
  en este caso accedo al elem y vinculo la clase del componente para que cambie segun la prop bool*/

  // @HostBinding('class.open') isOpen = false; 
  

}
