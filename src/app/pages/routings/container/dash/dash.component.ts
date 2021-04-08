import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  title='Routings and services ';
  valor= 'Version 0.05';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enter(){
    confirm('Hello word');
    this.router.navigate(['/tarjeta']);
  }

}
