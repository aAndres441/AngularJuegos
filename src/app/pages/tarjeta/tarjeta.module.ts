import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent, CearComponent, ListComponent } from './components/index';
import { TarjetaCreditoComponent } from './container/index';
import { DatePipePipe } from './date-pipe.pipe';


const CONTAINER = [
  TarjetaCreditoComponent
]

const COMPONENTS = [
  FormComponent,
  CearComponent,
  ListComponent
]

const MODULES = [
  CommonModule,
  ReactiveFormsModule
]

@NgModule({

  declarations: [
    CONTAINER,
    COMPONENTS,
    TarjetaCreditoComponent,
    DatePipePipe
  ],

  imports: [
    MODULES
  ],

  exports : [
    CONTAINER,
    COMPONENTS
  ]

})
export class TarjetaModule { }
