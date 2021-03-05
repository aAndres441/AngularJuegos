import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/shared/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  titulo='Ingrese URL a acortar';
  nameURL: string;
  urlShort:string;
  procesada: boolean;
  loading: boolean;
  error: boolean;
  messageError:string;

  constructor(private _servicio: ShortUrlService) { 

    this.nameURL='';
    this.urlShort='';
    this.procesada=false;
    this.loading=false;
    this.error=false;
    this.messageError='';

  }

  ngOnInit(): void {
  }

  procesarUrl() {

    //validar si URL es vacio
    if (this.nameURL === '') {
      this.error = true;
      this.messageError = 'Please add URL';

      //mostramos error por 3 seg
      setTimeout(() => {
        this.error = false;
      }, 3000);
      return;
    }

    this.procesada = false;
    this.loading = true;

    setTimeout(() => {
      this.demorarSpinner();
    }, 2000);
  }

  demorarSpinner(){
    this._servicio.getUrlShort( this.nameURL) // ver en servicio con interceptor
    .subscribe((data)=>{
      this.loading=false;
      this.procesada=true;
      this.urlShort= data.link;
    },elError=>{
      console.log('elError--', elError);
      console.log('elError con interceptor de AppModule--',elError.error.description); // aca mostraria si estuviese el interceptor andadndo con su token 
      console.log('message',elError.error.message, 'Status:', elError.status,'--',elError.message);


      this.messageError=elError.error.description
      this.loading=false;
      this.mostarError();
    });    
  }

  mostarError(){
    this.error=true;
    setTimeout(()=>{
      this.error=false;
      this.nameURL='';
    },3000);
  }


  

}
