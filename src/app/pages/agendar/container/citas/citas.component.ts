import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/pages/models/Cita';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  listCitas: Cita[] = [];
  isDelete = false;

  constructor() { }

  ngOnInit(): void {
  }

  addCita(cita: Cita) {
    this.listCitas.push(cita);
  }

  delete(index:number) {
    const res = confirm('Do you want \n delete it?')
    if(res){
       this.confirmDelete(index);
    }   
  }

  confirmDelete(index:number){    
    this.listCitas.splice(index,1);
    this.isDelete=true;
  }



}
