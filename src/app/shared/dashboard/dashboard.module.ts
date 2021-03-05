import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent,
          ListaComponent,
          TablaComponent } from './index';

const COMPONENTS = [
  DashboardComponent,
  ListaComponent,
  TablaComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],

  imports: [
    CommonModule
  ],

  exports:[
    ...COMPONENTS
  ],

})
export class DashboardModule { }
