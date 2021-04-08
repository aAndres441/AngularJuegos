import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent, ListComponent, SpinnerComponent } from './components/index';
import { TarjetaCreditoComponent } from './container/index';
import { DatePipePipe } from './date-pipe.pipe';


const CONTAINER = [
  TarjetaCreditoComponent
]

const COMPONENTS = [
  FormComponent,
  ListComponent,
  SpinnerComponent,
  TarjetaCreditoComponent,
  DatePipePipe
]

const MODULES = [
  CommonModule,
  ReactiveFormsModule
]

@NgModule({

  declarations: [
    ...CONTAINER,
    ...COMPONENTS
  ],

  imports: [
    ...MODULES
  ],

  exports : [
    ...CONTAINER,
    ...COMPONENTS
  ]

})
export class TarjetaModule { }
