import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent,
          ListaComponent,
          TablaComponent } from './index';

const COMPONENTS = [
  DashboardTableComponent,
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
