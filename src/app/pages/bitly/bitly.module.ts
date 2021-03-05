import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShortUrlComponent, SpinnerComponent,  } from './components/index';
import { BitlyComponent } from './container/bitly/bitly.component';

const COMPONENTS = [
  SpinnerComponent,
  ShortUrlComponent
];

const CONTAINER = [
  BitlyComponent
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
export class BitlyModule { }
