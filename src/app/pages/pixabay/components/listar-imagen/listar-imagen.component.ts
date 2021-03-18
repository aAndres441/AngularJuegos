import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PixabayService } from 'src/app/shared/services/pixabay.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit, OnDestroy {

  nombreABuscar = '';
  suscripcionTermino: Subscription;
  listaImages: any[] = [];
  isLoad: boolean;

  imgPerPage: number = 30;
  pageActual: number =1;
  totalHits: number =0;

  constructor(private _servicio: PixabayService) {

    this.isLoad = false;  

    this.suscripcionTermino = this._servicio.getDatoBusqueda()
      .subscribe(dato => {
        console.log('RES-', dato);

        this.nombreABuscar = dato
        this._servicio.setError('Exellent');

       this.pageActual=1;
        
        this.mostrarSpinner();
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcionTermino.unsubscribe;
  }

  mostrarSpinner(): void{    

    this.isLoad = true;
    this.listaImages=[];

    setTimeout(() => {
      this.isLoad=false;
      this.getImages();     
    }, 2000);    
  }


  getImages() {
    this._servicio.getImages(this.nombreABuscar, this.pageActual, this.imgPerPage)
      .subscribe((res) => {

        if (res.hits.length === 0) {
          this._servicio.setError('No images found');
          return; //importante el return para terminar ejecucion
        };

        console.log('Redondea ABAJO', Math.ceil(res.totalHits / this.imgPerPage));
        console.log('redondea ARRIBA', Math.floor(res.totalHits / this.imgPerPage));

        this.totalHits = Math.ceil(res.totalHits / this.imgPerPage);

        this.listaImages = res.hits;

        console.log('getImages--', res);

      }, error => {
        this._servicio.setError('View service');
      });
  }
  
 
  pagAnterior(){
    this.pageActual--;
    this.mostrarSpinner();
    console.log(this.pageActual);
  }

  pagSiguiente(){
    this.pageActual++;

    this.mostrarSpinner();    
    
    console.log(this.pageActual);
  }

  mostarBotonPrev(): boolean{
    let res = true;
    if(this.pageActual===1){
      res = false;
    }
    return res;
  }
  mostarBotonNext(): boolean{
    let res = true;
    if(this.pageActual===this.totalHits){
      res = false;
    }
    return res;
  }

  
}
