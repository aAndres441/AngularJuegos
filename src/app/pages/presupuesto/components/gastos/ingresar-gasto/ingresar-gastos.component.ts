import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/pages/models/Gasto';
import { PresupuestoService } from 'src/app/shared/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {

  cantidad: number;
  gastoName: string;
  textoIncorrecto: string;
  formIncorrecto: boolean;

  constructor(private _service: PresupuestoService) {

    this.cantidad = 0;
    this.gastoName='';
    this.textoIncorrecto='';
    this.formIncorrecto=false;
   }

  ngOnInit(): void {
    
  }


  addGasto(){

    if (this.cantidad > this._service.restante){
      this.formIncorrecto=true;
      this.textoIncorrecto = 'Amount greater than the remaining';
      /* this.reset(); */
      return;
    }

    if(this.cantidad<=0 || this.gastoName==='')
    {
      this.formIncorrecto=true;
      this.textoIncorrecto='Name of expense or incorrect amount';
    }else{
      //crear Gasto
      let name = this.gastoName;
      let gasto: Gasto = new Gasto(name,this.cantidad,1);
      this._service.crearGasto(gasto);

      //enviamos con subject a suscriptores

      //reset
      this.reset();
    }    
  }
reset(){
  this.formIncorrecto=false,
  this.cantidad=0;
  this.gastoName='';
}
  

  mayusculas(e: Event){
      console.log(e);
      
  }

}
