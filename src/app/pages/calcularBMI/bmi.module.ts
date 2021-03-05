import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculoComponent, ResultadoComponent } from './components/index';
import { ContenedorComponent } from './container/index';

const COMPONENTS = [
    ResultadoComponent,
    CalculoComponent
];

const CONTAINER = [
  ContenedorComponent
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
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

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BmiModule { }
