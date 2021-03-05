import { Component, Input, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/shared/services/noticias.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listado: any[];
  aviso='';
  error = false;

  constructor(private servicio : NoticiasService) { 
    this.listado =  [];

  }

  ngOnInit(): void {
    this.error=true;
   
  }

  

}
