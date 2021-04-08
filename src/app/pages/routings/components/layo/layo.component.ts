import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layo',
  templateUrl: './layo.component.html',
  styleUrls: ['./layo.component.css']
})
export class LayoComponent implements OnInit {

  title='LAYOUT';
  valor=5;

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiarValor(dato:number){
    /* this.valor = this.valor.map (dato => 10*dato) 
    this.valor = this.valor.filter (dato => dato%2===0) */ 
  }

}
