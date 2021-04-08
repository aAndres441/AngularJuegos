import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
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

  @Output() empOut = new EventEmitter<Empleado>();

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

  ver(num:number){
    console.log(num);
    
  }

  getEmp(num:number){
  console.log(num);
   /* 
   Abajo, filter  retorna lista
    let res = this.listEmplead.filter(function(dev){
      return dev.legajo===num;
    }); */
    this.listEmplead.forEach(element => {
      if(element.legajo===num){
        this.empOut.emit(element);
        console.log('Emite desde Lista', element.nombre );  
      }
    });
  }
  
  getEm2p(num:number){
    console.log(num);

  }
  

}
