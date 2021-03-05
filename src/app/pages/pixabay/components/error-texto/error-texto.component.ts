import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PixabayService } from 'src/app/shared/services/pixabay.service';

@Component({
  selector: 'app-error-texto',
  templateUrl: './error-texto.component.html',
  styleUrls: ['./error-texto.component.css']
})
export class ErrorTextoComponent implements OnInit, OnDestroy {

  texto='';
  mostrar=false;
 suscripcion : Subscription;

  constructor(private servicio:PixabayService) { 
    this.suscripcion = this.servicio.getError()
    .subscribe(data=>{
      this.mostrarMsj();
      this.texto = data;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  mostrarMsj(): void{
    this.mostrar=true;
    setTimeout(() => {
      this.mostrar=false;
    }, 2000);    
  }


}
