import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule,
    EditRoutingModule
  ]
})
export class EditModule { }
