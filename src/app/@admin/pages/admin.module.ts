import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModule } from './client/client.module';

const MODULES = [ClientModule]

@NgModule({

  declarations: [],
  
  imports: [
    CommonModule,
    ...MODULES
  ],

  exports:[
    ...MODULES
  ]
})
export class AdminModule { }
