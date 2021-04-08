import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/pages/models/Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  title='Select radio & filter';

  /* @Input() listEmp: Empleado[]=[];  */
  
  @Input() oneEmp: Empleado | undefined; 
  unEmp:Empleado|undefined;

  @Output() empOut2 = new EventEmitter<Empleado>();
  
  constructor() {
    this.unEmp=this.oneEmp;
   }

  ngOnInit(): void {
  }

  /* getEmp(num:Empleado){    
          this.empOut2.emit(this.oneEmp);
    console.log('Un empleado',this.oneEmp.nombre);

  } */
  elEmpleado(emp:Empleado){
this.unEmp=emp;
console.log(this.unEmp.nombre);

  }
}
