import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/pages/models/Empleado';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   @Input() empInput: Empleado | undefined;  // recibira 
   
  constructor(private route: ActivatedRoute,
    /* private _servicio: EmpleadoService, */
    /* private location: Location */) { 
      
    }

  ngOnInit(): void {

   /*  this.getEmp(); */
  }

  goBack(): void {
   /*  const dato =this.location.href;
    console.log('dato', dato); */   
  }

  /* getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  } */
}
