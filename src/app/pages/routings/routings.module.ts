import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashComponent } from './container/index';
import { NavComponent, FootComponent, LayoComponent, ListadoComponent } from './components/index';


import { RoutesLazy } from './routesLazy';

const COMPONENTS = [
  FootComponent,
  LayoComponent,
  ListadoComponent,
  NavComponent
]

const CONTAINER = [
  DashComponent
]

const MODULES = [
  CommonModule,
  RouterModule
]

@NgModule({

  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],

  imports: [
    ...MODULES,
    RoutesLazy
  ],

  exports: [
    ...CONTAINER,
    ...COMPONENTS
  ]

})
export class RoutingsModule { }
