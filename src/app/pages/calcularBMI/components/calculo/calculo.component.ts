import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  title = 'CALCULAR BMI';
  edad=44;
  peso=70;
  altura=170;
  sexo = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ver(edad: number) {
console.log(edad);
  }

  cambiarAltura(event:any): void {
    this.altura = event.target.value;
    console.log('Altura ' + this.altura);
  }
 
  sexoSelect(valor:string){
    switch(valor){
      case 'M':
        console.log('Masculino');  
        this.sexo = 'Masculino';  
        break;
      case 'F':
        console.log('Femenino');  
        this.sexo = 'Femenino';  
        break;
    }
  }
  calcularBMI() {
    //this.router.navigate(["/BMI/resultado"]);
    const resultBMI = this.peso/Math.pow(this.altura/100,2);

    this.router.navigate(["/resultado", resultBMI.toFixed(1)]);
    
    console.log('BMI ', resultBMI.toFixed(1));
    
    // confirm('probando ' + BMI);
  }

}
