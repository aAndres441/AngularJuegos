import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitasComponent } from './pages/agendar/container';
import { BitlyComponent } from './pages/bitly/container/bitly/bitly.component';
import { CalculoComponent, ResultadoComponent } from './pages/calcularBMI/components';
import { ClimaComponent } from './pages/clima/container/clima/clima.component';
import { ConvertidorComponent } from './pages/convertidor/convertidor.component';
import { DadosComponent } from './pages/dados/dados.component';
import { EmpleadosComponent } from './pages/empleados/container';
import { DetailComponent } from './pages/empleados/components/detail/detail.component';
import { NoticiasComponent } from './pages/noticias/container/noticias/noticias.component';
import { PianoComponent } from './pages/piano/piano.component';
import { PixabayComponent } from './pages/pixabay/container/pixabay/pixabay.component';
import { GastosComponent } from './pages/presupuesto/components';
import { PresupuestoComponent } from './pages/presupuesto/container/presupuesto/presupuesto.component';
import { LayoComponent } from './pages/routings/components';
import { DashComponent } from './pages/routings/container';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TarjetaCreditoComponent } from './pages/tarjeta/container/index';
import { DashboardTableComponent } from './shared/dashboard';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './shared/home/home.component';

const myRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'dashboard', component: DashboardTableComponent},
  {path: 'clima', component: ClimaComponent},
  {path: 'tareas', component: TareasComponent},
  {path: 'dados', component: DadosComponent},
  {path: 'piano', component: PianoComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'empleados/:id', component: DetailComponent},
  {path: 'agenda', component: CitasComponent},
  {path: 'tarjeta', component: TarjetaCreditoComponent},
  
   {path: 'myRoutServ', component: DashComponent},
  {path: 'myRoutingLayout', component: LayoComponent},
   
/*  {path:'myLazyRoutes', loadChildren:()=>
    import('./pages/routings/container/dash/dash.component')
  .then(m=>m.DashComponent)},*/

  {path:'createCli',loadChildren:()=>import('./pages/client/create/create-routing.module')
.then(m=>m.CreateRoutingModule)},
  {path:'detailsCli',loadChildren:()=>import('./pages/client/details/details-routing.module')
.then(m=>m.DetailsRoutingModule)},
  {path:'editCli',loadChildren:()=>import('./pages/client/edit/edit-routing.module')
.then(m=>m.EditRoutingModule)},
  
  {path: 'news', component: NoticiasComponent},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  {path: 'convertidor', component: ConvertidorComponent},
  {path: 'bitly', component: BitlyComponent},
  {path: 'pixabay', component: PixabayComponent},
  {path: 'BMI', component: CalculoComponent},
  {path: 'resultado/:valor', component: ResultadoComponent},
 /*  {path: 'BMI', component: CalculoComponent, children: [
    {path: 'resultado', component: ResultadoComponent},
  ]}, */
  {path: '', redirectTo: 'home' , pathMatch: 'full'},  // determinada para cuando se carga la app
  {path: '**', redirectTo: 'error' , pathMatch: 'full'},  // determinada por si n o coincide ninguna direccion y siempre al final,+

];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
