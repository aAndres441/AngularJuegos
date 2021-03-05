import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, CountComponent } from './components/index';
import { EmpleadosComponent } from './container/index';
import { FormsModule } from '@angular/forms';


const COMPONENTS = [
  ListComponent, 
  CountComponent
];

const CONTAINER = [
  EmpleadosComponent
];

const MODULES = [
  CommonModule,
  FormsModule 
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],

  imports: [
    ...MODULES
  ],

  exports: [
    ...COMPONENTS,
    ...CONTAINER
  ],


})
export class EmpleadosModule { }
