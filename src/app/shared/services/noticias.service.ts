import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  /*desde https://newsapi.org/docs/endpoints/top-headlines
  obtengo key y en su documentacion busco api que me sirva para usar*/

  newsApiKey = '13891368b9df40dba8a2de4705b658a4';
  
  url =' https://newsapi.org/v2/top-headlines?country=&category=business&apiKey=';

  constructor(private http: HttpClient) { }  //inyecto esta hhttpclient y en appmodulo HttpClientModule

  getNoticiass(parametros:any): Observable<any>{
     const URL = 'https://newsapi.org/v2/top-headlines?country='
                  +parametros.pais+'&category='
                  +parametros.categ+'&apiKey='
                  + this.newsApiKey;

    return this.http.get(URL);

  }
}
