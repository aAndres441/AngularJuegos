import { Directive, ElementRef, HostListener } from '@angular/core';

import {} from '../../../environments/environment';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementImg: ElementRef) {

   }

/*escucha eveto del DOM cada ves que lo llamamos del dom con el selector,
si la imagen esta rota o no existe se ejecuta esta directivas
Pudiendola llamar a la imagen desde en el  mismo environment o aca */ 

  @HostListener('error')

  onError():void{
    this.elementImg.nativeElement.src='environment.myUrlImage';
    
    // this.elementImg.nativeElement.src='assets/imagenes/error-robot.png';
  }

}
