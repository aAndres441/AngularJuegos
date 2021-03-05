import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/shared/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = 'assets/imagenes/climaPng.png';
  ciudad='';
  clima = '';
  temp = 0;
  humidity = 0;
  loading = false;
  query = false;  
  error = false;

  resTemp = '';
  resHumedad = '';

  /* Juegos\src\assets\imagenes\climaPng.png */
  /* D:\ORT\AYUDANTIAS\Lenguaje_Angular\AngularUdemy\Juegos\Juegos\src\assets\imagenes\climaPng.png */
  constructor(private _servicio: ClimaService) { }

  ngOnInit(): void {
  }

  getClima(){
    this.loading = true;
    this.query = false;

    // suscribo el retorno por ser observable
    this._servicio.getClima(this.ciudad)
    .subscribe((dato)=>{
      this.loading = false;
      this.query = true;

    
      this.temp = (dato.main.temp -273);
      this.humidity = dato.main.humidity;
      this.clima = dato.weather[0].main;

      this.resTemp = this.temp.toFixed(1);
      this.resHumedad = this.humidity.toFixed(1);
      
      console.log('DATO= ' , dato);
      console.log(this.temp,'temp',
                 this.humidity,'humidity',
                this.clima,'weather');

                console.log('Temp ', this.resTemp, 'Humedad' , this.resHumedad);
      
    },error => {
      console.log(error);
      this.loading=false;
      this.mostarError();
      
    });   
  }

  mostarError(){
    this.error=true;
    setTimeout(()=>{
      this.error=false;
      this.ciudad='';
    },3000);
  }

}
