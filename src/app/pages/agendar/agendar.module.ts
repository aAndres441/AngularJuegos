import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrearCitasComponent, ListCitasComponent } from './components/index';
import { CitasComponent } from './container/index';


const COMPONENTS = [
  ListCitasComponent,
  CrearCitasComponent
];

const CONTAINER = [
  CitasComponent
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
export class AgendarModule { }
