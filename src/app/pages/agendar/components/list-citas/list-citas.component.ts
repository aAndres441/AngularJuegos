import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Cita } from 'src/app/pages/models/Cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  @Input() listaCitasInput: Cita[] =[];
  @Output() deleteCitaOut = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  delete(indice: number) {
    this.deleteCitaOut.emit(indice);
    /* this.listaCitasInput.[i];
    alert(cita.nombre) */
  }

}
