import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';

import { CommonModule } from '@angular/common'; /* Es para *ngIf etc */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './@admin/pages/admin.module';

import { ShortInterceptor } from './shared/services/short.interceptor';
import { NoHaveImageDirective } from './directivas/no-have-image.directive';


const MODULES = [
  PagesModule,
  SharedModule
]

const FIREBASE = [
  AngularFireModule.initializeApp (environment.firebaseConfig),
  AngularFirestoreModule
]
@NgModule({
  declarations: [
    AppComponent,
    NoHaveImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FIREBASE,
    ...MODULES,
    
    BrowserAnimationsModule, /*  required animations module */
    ToastrModule.forRoot({
      timeOut:5000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates:true
    }), // ToastrModule added
  ],

  providers: [
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: ShortInterceptor,
      multi:true
    } */
    AngularFireAuth
  ],

  bootstrap: [AppComponent],

})

export class AppModule { }
