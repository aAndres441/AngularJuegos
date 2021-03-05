import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/shared/services/pixabay.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  nombreImagen: string;

  constructor(private _servicio: PixabayService) {
    this.nombreImagen = '';
  }

  ngOnInit(): void {
  }

  buscarImagenes(): void {
    if (this.nombreImagen === '') {
      this._servicio.setError('You not have a name');
      return; //importante el return para terminar ejecucion
    }
    this._servicio.enviarDatoBusqueda(this.nombreImagen);
  }


}
