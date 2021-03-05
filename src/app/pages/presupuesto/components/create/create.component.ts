import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/shared/services/presupuesto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  cantidad: number;
  cantIncorrecta: boolean;

  constructor(private _service: PresupuestoService, 
              private router: Router) {

    this.cantidad=0;
    this.cantIncorrecta=false;
   }

  ngOnInit(): void {
  }

  addBudget() {
    if(this.cantidad<1 || this.cantidad>5000){
      this.cantIncorrecta=true;      
    }else{
      this.cantIncorrecta=false;
      this._service.budget = this.cantidad;
      this._service.restante = this.cantidad;
      this.router.navigate(['/gastos']);
      }
    
  }

}
