import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/pages/models/TarjetaCredito';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listCards:TarjetaCredito[];
  /* listEmplead: Empleado[] = [
    {legajo: 11, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 21000},
    {legajo: 12, nombre: 'Ana', apellido: 'Ramos', sexo: 'Femenino', salario: 32000},
    {legajo: 13, nombre: 'Lucas', apellido: 'Torreira', sexo: 'Masculino', salario: 19500},
    {legajo: 14, nombre: 'Eugenia', apellido: 'Malta', sexo: 'Femenino', salario: 28000},
    {legajo: 15, nombre: 'Lipatia', apellido: 'Rodrigues', sexo: 'Femenino', salario: 14000}
  ]; */

  constructor() { 
    this.listCards=[
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
    ];
  }
  /*  name: this.myForm.value.name,
        lastName: this.myForm.value.lastName,
        numTarjeta: this.myForm.value.numTarjeta,
        fechaExpiracion: this.myForm.value.fechaExpiracion,
        cvv: this.myForm.value.cvv,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        state: true,       */

  ngOnInit(): void {
    
  }

  edit(tr: TarjetaCredito){
    confirm('EDIT');
  }
  delete(tr: TarjetaCredito){
    confirm('DELETE');
  }

}
