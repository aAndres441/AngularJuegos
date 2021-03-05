import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, NavBarComponent } from './components/index';
import { ClimaComponent } from './container/index';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  DashboardComponent,
  NavBarComponent
];

const CONTAINER = [
  ClimaComponent
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

  
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
 
})
export class ClimaModule { }
