import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListComponent, CountComponent, DetailComponent, MenuComponent } from './components/index';
import { EmpleadosComponent } from './container/index';


const COMPONENTS = [
  ListComponent, 
  CountComponent,
  DetailComponent,
    MenuComponent
];

const CONTAINER = [
  EmpleadosComponent
];

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
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
