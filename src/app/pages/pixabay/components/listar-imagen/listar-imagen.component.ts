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

  isLoad: boolean;

  listaImages: any[] = [];

  constructor(private _servicio: PixabayService) {
    this.isLoad = false;  

    this.suscripcionTermino = this._servicio.getDatoBusqueda()
      .subscribe(dato => {
        console.log('RES-', dato);

        this.nombreABuscar = dato
        this._servicio.setError('Exellent');

        this.mostrarSpinner();
        
        /* this.isLoad = true; */
       /*  this._servicio.setView(true); */

       /*  setTimeout(() => {
          this.getImages();
        }, 2000); */
      })

    

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.suscripcionTermino.unsubscribe;
  }

  getImages() {
    this._servicio.getImages(this.nombreABuscar)
      .subscribe((res) => {
        /* this.isLoad = false; */
        console.log(res);
        
        if (res.hits.length === 0) {
          this._servicio.setError('No images found');
          return; //importante el return para terminar ejecucion
        };

        this.listaImages = res.hits;

        console.log('res--', res);


      }, error => {
        this._servicio.setError('View service');        
      });
  }
  
  mostrarSpinner(): void{
    this.isLoad=true;     
    setTimeout(() => {
      this.isLoad=false;
      this.getImages();     
    }, 2000);    
  }

  
}
