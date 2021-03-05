import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  title = 'Oprima el TECLADO!';

  constructor() {
    setInterval(()=> this.title === "LULA",6000);
   }

  ngOnInit(): void {
    setInterval(()=> this.title === 'NONO',3000);
  }

  
  aplicaSonido( numero: number): void{
    const audio = new Audio();
    audio.src='assets/sonidos/nota'+ numero +'.mp3';
    audio.load();
    audio.play();
}
}
