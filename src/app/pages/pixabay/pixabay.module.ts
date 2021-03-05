import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BuscarImagenComponent, SpinnerComponent, ErrorTextoComponent, ListarImagenComponent, NavbrComponent } from './components/index';
import { PixabayComponent } from './container/pixabay/pixabay.component';

const COMPONENTS = [  
  BuscarImagenComponent, 
  ListarImagenComponent, 
  NavbrComponent, 
  ErrorTextoComponent,
  SpinnerComponent
]

const CONTAINER = [
  PixabayComponent
];

const MODULES = [
CommonModule,
FormsModule  
]

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

schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class PixabayModule { }
