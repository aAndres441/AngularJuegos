import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoticiasComponent } from './container/noticias/noticias.component';
import { FormComponent, ListComponent, NavComponent, SpinnerComponent } from './components/index';

const CONTAINER=[
  NoticiasComponent
];
const COMPONENTS=[
  ListComponent,
  FormComponent, 
  NavComponent, 
  SpinnerComponent
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

  exports:[
    ...COMPONENTS,
    ...CONTAINER
  ],

})

export class NoticiasModule { }
