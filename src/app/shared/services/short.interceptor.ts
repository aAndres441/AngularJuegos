import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKENBITLY = 'f130ae1e33c45caff26797780897e8ed2dc68e4e';

    //clonamos request y seteamos la autorizacion
    request = request.clone({
      setHeaders:{Authorization: 'Bearer ' + TOKENBITLY}
    });

    return next.handle(request)
    .pipe(catchError((error:HttpErrorResponse) => {
      console.log('INTERCEPTORr :', error);
      return throwError(error);
      
    }));
  }
}
