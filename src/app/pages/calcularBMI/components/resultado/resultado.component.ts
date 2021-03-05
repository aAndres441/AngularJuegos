import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  title = 'RESULTADO';
  bmiValor: number;
  bmiValor2: number;
  result: string;
  interpretacion: string;

  constructor(private router: Router, private activRout: ActivatedRoute) {
 //inicializo
    this.result = '';
    this.interpretacion = '';

 // SON LO MISMO
    this.bmiValor = Number(activRout.snapshot.paramMap.get('valor'))
    console.log(this.bmiValor +  'VALOR 1');

    this.bmiValor2 = +activRout.snapshot.paramMap.get('valor')!;
    console.log(this.bmiValor2 +  'VALOR 2');
    
   }

  ngOnInit(): void {
    this.getResultado();
  }


  getResultado(){
    if(this.bmiValor2 >=25) {
      this.result = 'EXCESO DE PESO';
      this.interpretacion = 'Peso corporal superior al normal. Intente hacer ejercicio !';
    }else if(this.bmiValor2 >=18.5) {
      this.result = 'NORMAL';
      this.interpretacion = 'Buen trabajo !';
    }else{
      this.result = 'BAJO PESO';
      this.interpretacion = 'Peso corporal inferior al normal. podrias comer mas !';
    
    }
  }

  aHome() {
    this.router.navigate(["/BMI"]);
    // confirm('probando ' );
  }

}
