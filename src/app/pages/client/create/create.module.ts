import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    
    CreateRoutingModule
  ]
})
export class CreateModule { }
