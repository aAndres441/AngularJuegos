import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  /*de la documentacion de openweather , api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
  pruebo postman o navegador: http://api.openweathermap.org/data/2.5/weather?q=montevideo&appid=63277048c3c1c1ac95aa780b5825ac82
  o al reves los parametros es lo mismo
  // http://api.openweathermap.org/data/2.5/weather?appid=63277048c3c1c1ac95aa780b5825ac82&q=Montevideo*/
  
  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';
/* IMPORTANTE Agregar s a httpS para no tener problemas
   url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
*/
  //da la API key de openweather
  
  keyOpenweather = '63277048c3c1c1ac95aa780b5825ac82';

    //para hacer peticiones http debo importar tambien en el Module HttpClientModule
    // y aca inyecto tambien 

  constructor(private http: HttpClient) { }

getClima(city: string) : Observable<any> {

  // http://api.openweathermap.org/data/2.5/weather?appid=63277048c3c1c1ac95aa780b5825ac82&q=Montevideo
  const url = this.url + this.keyOpenweather + '&q='+ city;
  return this.http.get(url);
}


}


