import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  // generada en bitly

  URL = 'https://api-ssl.bitly.com/v4/shorten';

  bitlyToken = 'f130ae1e33c45caff26797780897e8ed2dc68e4e';



  constructor(private http: HttpClient) { }

  getUrlShort(dato: string): Observable<any> {

    // header igual que en postaman
    //lo cambio por interceptor el token y este header

   /*  const tokenHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.bitlyToken
    }); */

    // body igual que postman
    const body = {
      long_url: dato
    };

   // no va mas la cabecera, sera desde interceptor
   // return this.http.post(this.URL, body, {headers: tokenHeader});
   
    return this.http.post(this.URL, body);

    /* o puedo usar errores desde aca o de interceptor solo usando pipe
    
     return this.http.post(this.URL, body)
    .pipe(catchError((error:HttpErrorResponse) => {
      console.log('INTERCEPTOR :', error);
      return throwError(error);
      
    })); 
    
    Recordar que debo poner en AppModule para usar interceptor> 
    providers: [
     {      provide: HTTP_INTERCEPTORS,
      useClass: ShortInterceptor,
      multi:true } ],
      */

  }
}
