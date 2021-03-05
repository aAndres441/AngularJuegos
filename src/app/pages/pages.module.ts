import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DadosComponent } from './dados/dados.component';
import { PianoComponent } from './piano/piano.component';
import { TareasComponent } from './tareas/tareas.component';
import { ConvertidorComponent } from './convertidor/convertidor.component';
import { BmiModule } from './calcularBMI/bmi.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { AgendarModule } from './agendar/agendar.module';
import { PresupuestoModule } from './presupuesto/presupuesto/presupuesto.module';
import { ClimaModule } from './clima/clima.module';
import { BitlyModule } from './bitly/bitly.module';
import { NoticiasModule } from './noticias/noticias.module';
import { PixabayModule } from './pixabay/pixabay.module';


const COMPONENTS = [
    DadosComponent,
    PianoComponent,
    TareasComponent,
    ConvertidorComponent
]

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  BmiModule,
  EmpleadosModule,
  AgendarModule,
  PresupuestoModule,
  ClimaModule,
  BitlyModule,
  NoticiasModule,
  PixabayModule
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES
  ],

  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
})
export class PagesModule { }
