import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
/* import { TablaComponent } from './dashboard/tabla/tabla.component';
import { ListaComponent } from './dashboard/lista/lista.component'; */
import { SpinnerComponent } from './spinner/spinner.component';
import { DashboardModule } from './dashboard/dashboard.module';


const COMPONENTS = [
  ErrorComponent,
  HomeComponent, 
  NavbarComponent,
  FooterComponent, 
  /* TablaComponent,
  ListaComponent, */
  SpinnerComponent
]

const MODULES = [
  CommonModule,
  RouterModule,
  DashboardModule
]
@NgModule({
  declarations: [    
    ...COMPONENTS
  ],
  imports: [
    MODULES
  ],

  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
