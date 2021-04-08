import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoComponent } from './components';
import { DashComponent } from './container';

const myRoutes: Routes = [
  /* {path: 'myRoutServ', component: DashComponent},
  {path: 'myRoutingLayout', component: LayoComponent}, */
  {path: 'myRoutSev', component: DashComponent}
  
]

@NgModule({
    imports: [RouterModule.forRoot(myRoutes)],
    exports: [RouterModule]
  })
  export class RoutesLazy { }
  