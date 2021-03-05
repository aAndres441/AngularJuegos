import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gasto } from 'src/app/pages/models/Gasto';
import { PresupuestoService } from 'src/app/shared/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  /* gastino: Gasto */
  gastoSubs: Subscription;
  listGasto: Gasto[]=[];
  presupuesto: number;
  restante: number;
  loading: boolean;

  constructor(private _service: PresupuestoService) {
    
    this.presupuesto=0;
    this.restante=0;
    this.loading=false;

    this.gastoSubs = this._service.getGastos()
    .subscribe(data=>{
      console.log(data.name,  data.quantity);

      
    this.load();
      this.restante = this.restante - data.quantity;

      console.log( data.quantity, 'RES', this.restante);
      
      this.listGasto.push(data);
      
    });
   }
  

  ngOnInit(): void {
    this.presupuesto=this._service.budget;
    this.restante=this._service.restante;
    
  }

  ngOnDestroy(): void {
    this.gastoSubs.unsubscribe();
  }

  aplicarColor(){
    if(this.presupuesto/4 > this.restante){
      return "alert alert-danger";
    }else if(this.presupuesto/2 > this.restante){
      return "alert alert-warning";
    }else{
      return "alert alert-secondary";
    }
  }

  load(){
    setTimeout(() => {
      this.loading=true
    }, 3000);
  }

}
