import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Empleado } from 'src/app/pages/models/Empleado';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listEmplead: Empleado[] = [
    {legajo: 11, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 21000},
    {legajo: 12, nombre: 'Ana', apellido: 'Ramos', sexo: 'Femenino', salario: 32000},
    {legajo: 13, nombre: 'Lucas', apellido: 'Torreira', sexo: 'Masculino', salario: 19500},
    {legajo: 14, nombre: 'Eugenia', apellido: 'Malta', sexo: 'Femenino', salario: 28000},
    {legajo: 15, nombre: 'Lipatia', apellido: 'Rodrigues', sexo: 'Femenino', salario: 14000}
  ];

  radioSeleccionado = 'Todos';

  constructor() { 
  }

  ngOnInit(): void {
    ///this.radioSeleccionado = 
  }

  allEmployeed(): Empleado[] {
      return this.listEmplead;
  }
  countEmployeed(): number{
    return this.listEmplead.length;
  }
  countMasc(): number{
    return this.listEmplead.filter( lt=> lt.sexo === 'Masculino'). length;
  }

  countFem(): number{
    return this.listEmplead.filter( lt=> lt.sexo === 'Femenino'). length;
  }

  employeedChange(dato:string): void{ //viene del output del hijo
    this.radioSeleccionado = dato;
  }

  addEmployed(emp: Empleado): boolean{    
    if(emp){
      this.listEmplead.push(emp);
      console.log('TRUE');      
      return true
    }
    console.log('FALSE');    
    return false;
  }

}
