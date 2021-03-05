import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbr',
  templateUrl: './navbr.component.html',
  styleUrls: ['./navbr.component.css']
})
export class NavbrComponent implements OnInit {

  @Input() title: string;

  constructor() {
    this.title = ''; }

  ngOnInit(): void {
  }

}
