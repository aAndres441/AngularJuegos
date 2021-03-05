import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() parametroSeleccionado = new EventEmitter<any>();

  catSeleccionada='sports';
  paisSeleccionada='br';

  categorias:any[]=[
    {value:'policy', nombre: 'Politica'},
    {value:'business',nombre: 'Negocios'},
    {value:'music',nombre: 'Musica'},
    {value:'health',nombre: 'Salud'},
    {value:'sports',nombre: 'Deportes'},
    {value:'technology',nombre: 'Tecnologia'},
  ]
  paises:any[]=[
    {value:'ar', nombre: 'Argentina'},
    {value:'uy',nombre: 'Uruguay'},
    {value:'br',nombre: 'Brasil'},
    {value:'hu',nombre: 'Hungria'},
    {value:'mx',nombre: 'Mexico'},
    {value:'gb',nombre: 'Reino Unido'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS={
      categ: this.catSeleccionada,
      pais:this.paisSeleccionada
  };

    this.parametroSeleccionado.emit(PARAMETROS);

  }

}
