import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  private error$ = new Subject<string>();
  private datoBusqueda$ = new Subject<string>();

  privateclaveAPI = '20509595-8e03f6a2a739fd2e04f2a70c0';
  
  urlImagenes = 'https://pixabay.com/api/';
  urlVideos = 'https://pixabay.com/api/videos/';

  constructor(private http: HttpClient) { }

  setError(msj: string): void {
    this.error$.next(msj);
  }
  getError(): Observable<string> {
    return this.error$.asObservable();
    // asObservable Creates a new Observable with this Subject as the source.
  }

  enviarDatoBusqueda(termino:string):void{
    this.datoBusqueda$.next(termino);
  }
  getDatoBusqueda():Observable<string>{
    return this.datoBusqueda$.asObservable();
  }

  getImages(termino:string): Observable<any>{
    const URL = this.urlImagenes
                +'?key='
                +this.privateclaveAPI
                +'&q='
                +termino 
                +'&image_type=photo'
                +'$per_page='+30
                +'&page='+3; 

    const URLvideo = this.urlVideos
                +'?key='
                +this.privateclaveAPI
                +'&q='
                +termino;
                
   return this.http.get(URL);   
  }



  

}
