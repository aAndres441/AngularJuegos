import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private myFirstObs: Subscription = new Subscription;
  private myInterval: Subscription = new Subscription;

  title = ' Welcome Games -  4.0 (by LIPATIA)';

  constructor() { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.myFirstObs.unsubscribe();
    this.myInterval.unsubscribe();
    //throw new Error('Method not implemented.');
  }

}

/*  Shift+Ctrl + L */