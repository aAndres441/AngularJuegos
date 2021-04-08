import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cita } from 'src/app/pages/models/Cita';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formIncorrecto = false;

  @Output() nuevaCitaOut = new  EventEmitter<Cita>();

  constructor() { }

  ngOnInit(): void {
  }
  
  add() {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formIncorrecto = true;
      return;
    }
    this.formIncorrecto = false;

    const cita: Cita = {
      nombre:this.nombre,
      fecha: this.fecha,
      hora : this.hora,
      sintoma : this.sintomas,
    };

    this.nuevaCitaOut.emit(cita);
    this.resetCampos();
    
  }

  cambiarHora(event:any): void {
    this.hora = event.target.value;
    console.log('CAMBIO HORA ' + this.nombre);
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }


}
