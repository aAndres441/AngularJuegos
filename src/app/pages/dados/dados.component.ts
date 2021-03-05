import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  title = 'To DADOS';

  dadoIzquierda = 'assets/imagenes/2.png';
  dadoDerecha = "assets/imagenes/4.png";
  numeroUno = 1;
  numeroDos = 2;
  texto = '';
  miTexto = '';
  constructor() { }

  ngOnInit(): void {
  }

  tirarDados(): void{
    let res = '';
    this.numeroUno = Math.round(Math.random()*5) +1;
    this.numeroDos = Math.round(Math.random()*5) +1;
    
    
    this.dadoIzquierda =  'assets/imagenes/'+this.numeroUno+'.png';
    this.dadoDerecha =  'assets/imagenes/'+this.numeroDos+'.png';

     if(this.numeroUno === this.numeroDos){
       res = 'GANADOR'
     }else {
       res = 'Vuelve a Jugar'; 
     }    
     // alert( 'Resultado : ' + this.numeroUno + '' + res + '' + this.numeroDos);
     this.texto = res;
  }
  getColor() {
    return this.texto === 'Vuelve a Jugar' ? 'yellow' : 'white';
  }
}
