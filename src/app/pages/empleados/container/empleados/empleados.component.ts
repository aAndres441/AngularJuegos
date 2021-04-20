import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/pages/models/Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  title='Select radio & filter';

  unEmp:Empleado|undefined;

  @Output() empOut2 = new EventEmitter<Empleado>();
  
  constructor() {
   }

  ngOnInit(): void {
  }

  
  elEmpleado(emp:Empleado){
this.unEmp=emp;
console.log(this.unEmp.nombre);

  }
}
