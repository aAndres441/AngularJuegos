import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      {
        path: 'vista', loadChildren: () =>
          import('./vista/vista.module')
            .then(m => m.VistaModule)
      },
      {
        path: 'contact', loadChildren: () =>
          import('./contact/contact.module')
            .then(m => m.ContactModule)
      }
     /*  {
        path: 'login', loadChildren: () =>
          import('./login/login.module')
            .then(m => m.LogintModule)
      }
      {
        path: 'about', loadChildren: () =>
          import('./about/about.module')
            .then(m => m.AboutModule)
      } */
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class PublicRoutingModule { }
