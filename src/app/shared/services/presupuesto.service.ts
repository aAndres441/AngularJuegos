import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gasto } from 'src/app/pages/models/Gasto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {  

  budget: number;
  restante: number;
  listGastos:Gasto[]=[];

  private gastos$ = new Subject<Gasto>();
  private lstGastos$ = new Subject<Gasto[]>();

  constructor() {
    this.budget = 0; 
    this.restante = 0; 
   }

   crearGasto(gastoRecibido: Gasto) {
     this.listGastos.push(gastoRecibido);
     this.restante= this.restante- gastoRecibido.quantity;
 
      console.log('RESTANTE..', this.restante,
      'BUDGE ' , this.budget);
      
     //Observable SUBJECT que emite
     this.gastos$.next(gastoRecibido);
     
  }

  //aca se suscriben los escuchas
  getGastos():Observable<Gasto>{
    return this.gastos$.asObservable();
  }
}
