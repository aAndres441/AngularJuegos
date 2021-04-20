import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './container/client/client.component';

const routes: Routes = [
  {path:'',component:ClientComponent}
  /*  {path:'',component:DetailsComponent} */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
