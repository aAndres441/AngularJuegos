import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  
  @Input() cAll: number;
  @Input() cFem: number;
  @Input() cMasc: number;

  @Output() radioChangeOut = new EventEmitter<string>();
  radioSelect = 'Todos';
  
  constructor() { 
    this.cAll = 0;
    this.cFem = 0;
    this.cMasc = 0;
  }

  ngOnInit(): void {
  }

  radioEmiteChange():void {
    this.radioChangeOut.emit(this.radioSelect);
  }

}
