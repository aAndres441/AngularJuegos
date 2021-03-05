import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresupuestoComponent } from '../container/presupuesto/presupuesto.component';
import { CreateComponent, GastosComponent, IngresarGastosComponent, ListarGastoComponent } from '../components/index';

const COMPONENTS = [
  CreateComponent,
  GastosComponent,
  IngresarGastosComponent,
  ListarGastoComponent
];

const CONTAINER = [
  PresupuestoComponent
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
export class PresupuestoModule { }
