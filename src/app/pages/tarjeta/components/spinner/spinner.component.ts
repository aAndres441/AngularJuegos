import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PixabayService } from 'src/app/shared/services/pixabay.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  mostrar: boolean;

  constructor(private _servicio: PixabayService) {
    this.mostrar = false;

    /* this.suscripcion = this._servicio.getView()
      .subscribe(data => {
        this.mostrar=data;
        this.mostrarSpinn();
      }) */

  }
  ngOnInit(): void {
  }

  //mostrarSpinn(): void{
    /* this.mostrar=true; */
  //  this._servicio.setView(true);
   // setTimeout(() => {
    //  this._servicio.setView(false);
      /* this.mostrar=false; */
  //  }, 2000);    
  //}



}
