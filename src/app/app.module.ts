import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ShortInterceptor } from './shared/services/short.interceptor';
import { NoHaveImageDirective } from './directivas/no-have-image.directive';

const MODULES = [
  PagesModule,
  SharedModule
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
    HttpClientModule,
    MODULES
  ],
  providers: [
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: ShortInterceptor,
      multi:true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
