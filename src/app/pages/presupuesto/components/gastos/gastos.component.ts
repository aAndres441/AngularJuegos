import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/shared/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(public _servicio: PresupuestoService,
              private router: Router) { }

  ngOnInit(): void {
    if(this._servicio.budget === 0){ /* al iniciar si el presup budget es = 0 , que vaya a ingresar */
      this.router.navigate(['/presupuesto']);
    }
  }

}
