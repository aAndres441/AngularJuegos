import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() colorDefault = 'orange';

  @ViewChild('logo', { static: true })

  /* @ViewChild('logo'); */
  /* contenedor!: ElementRef; */

  @HostBinding('style.backgroundColor') propBackground = 'violet';

  constructor(private renders: Renderer2, private contenedor: ElementRef, private logo: ElementRef, private menu: ElementRef) { }

  ngAfterViewInit() { //Recién en este punto tendrás acceso al valor

    let ancho = document.documentElement?.offsetTop;
    let alto2 = this.menu.nativeElement.offsetTop;
    console.log('Ancho ' + ancho);
    console.log('alto2 ' + alto2);

    console.log("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('MouseEnter', this.logo.nativeElement);
    this.renders.setStyle(this.contenedor.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('focus') onfocus() {
    this.propBackground = this.colorDefault;
  }

  doSomethingOnWindowScroll($event: Event) {
    /* MUEVE SCROLL */
    //document.documentElement.scrollTop = 100;

    //distancia entre parte sup y el menu
    var altura = document.getElementById('menu')?.offsetTop
    console.log('altura ', altura);
    //window.onscroll:(((this: GlobalEventHandlers, ev: Event) => any) & ((this: Window, ev: Event) => any)) | null
    if (document.documentElement.scrollTop > altura!) {
      document.getElementById('menu')!.className = 'menu-fixed';
    } else {
      document.getElementById('menu')?.classList.remove('menu-fixed');
    }
  }

  // SELECCIONAR ELEMENTO DEL DOM          
  //  caso1
  /* var elemento = document.querySelectorAll(".menu");
for (var i = 0; i < elemento.length; i++) {
 elemento[i].classList.add("menu-fixed");
 console.log('Elemento add', elemento);
} */

  //caso2
  /*  const el = document.querySelector('.menu');
   el?.classList.add('menu-fixed');
   console.log('add', el); */

  //caso3
  /* var elemento2 = document.getElementById("menu");    
   elemento2?.className =  'menu-fixed'; */

  //caso remove
  /*  elemento2?.classList.remove('menu-fixed');
  elemento2?.classList.add('menu');
  console.log('Elemento add', elemento2); */

  //Por medio de Jquery
  /* $('.images').addClass('lala'); */


}
