import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  title = 'CONVERTIDOR';
  quantity = 0;
  want = 'Pesos';
  have = 'USD';
  total = 0;
  tipoMonedas: string[] = ['USD', 'Pesos', 'Euro'];
  invento = '--';
  fechaDeHoy : Date = new Date(Date.now());
  constructor() { }

  ngOnInit(): void {
  }

  convertir(): number {
    let res =0;
    switch(this.have){      
      case 'USD':
        if(this.want === 'USD'){
        this.total = this.quantity;
        }
        if(this.want === 'Pesos'){
        this.total = this.quantity * 44 ;
        }
        if(this.want === 'Euro'){
        this.total = this.quantity * 0.85;
        }
        console.log('es: ', this.total);
        break;
      case 'Pesos':
        if(this.want === 'Pesos'){
          this.total = this.quantity;
          }
          if(this.want === 'USD'){
          this.total = this.quantity / 44 ;
          }
          if(this.want === 'Euro'){
          this.total = this.quantity / 46;
          }
          console.log('es: ', this.total);
          break;
      case 'Euro':
        if(this.want === 'Euro'){
          this.total = this.quantity;
          }
          if(this.want === 'Pesos'){
          this.total = this.quantity * 46 ;
          }
          if(this.want === 'USD'){
          this.total = this.quantity * 0.8;
          }
          console.log('es: ', this.total);
          break;
    }

    return 12;

  }
  ver():void{
    alert(this.quantity);
    this.ver2();
    this.ver3();
  }
  ver2():void{
    alert(' I have ' + this.have);
  }
  ver3():void{
    alert(' I want ' + this.want);
  }
 
 /* queEs(lolo: string) {
  switch (lolo) {
    case 'a':
      this. = 'SI';
      console.log('es: ', this.esOno);
      break;
    case 'b':
      this.esOno = 'NO';
      console.log('es: ', this.esOno);
      break;
    default:
      this.esOno = ' Va de nuevo';
      console.log('es: ', this.esOno);
      break;
  }    */
  /* switch (this.status) {
      case 'Ocupado':
        this.status = 'Libre ';
        break;
      case 'Libre':
        this.status = 'Ocupado';
        break;
      default: ;
        break;
    }
    console.log('es: ' + this.status); */
}
