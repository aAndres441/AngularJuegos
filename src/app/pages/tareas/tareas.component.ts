import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  title = 'TAREAS';
  listaTareas: Tarea[] = [];
  nombreTarea = '';
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea() {
    let arrayTarea: Tarea[] = [];
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      state: false
    };
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
    // alert(this.nombreTarea);
  }

  delete(i: number): void{
    this.listaTareas.splice(i,1);
  }
  update(tarea:Tarea, indice:number): void{
    // alert (this.listaTareas[indice].state);
    this.listaTareas[indice].state = !tarea.state;
    // alert (this.listaTareas[indice].state);
  }

}
