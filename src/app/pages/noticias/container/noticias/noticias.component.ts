import { Component, OnInit } from '@angular/core';

import { NoticiasService } from 'src/app/shared/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  title = 'News';
  listNoticias:any[]=[];
  errorText='';
  isLoad=false;

  constructor(private servicio:NoticiasService) { }

  ngOnInit(): void {
  }

  buscarNoticias(param:any){

    console.log('PARAM', param);

    this.isLoad=true;
    this.listNoticias=[]; //limpio el array

    setTimeout(() => {
      this.demorarSpinner(param);
    }, 2000);

  }

  demorarSpinner(param:any){
    this.servicio.getNoticiass(param)
    .subscribe((data)=>{
      this.isLoad=false;
      this.listNoticias = data.articles;
    },error=>{
      this.errorText='Algo esta saliendo mal';
      this.isLoad=true;
    });
  }
}
