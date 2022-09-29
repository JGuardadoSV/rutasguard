import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ruta1Component } from './rutas/ruta1/ruta1.component';
import { Ruta2Component } from './rutas/ruta2/ruta2.component';
import { Sub1Component } from './rutas/ruta2/sub1/sub1.component';
import { Sub2Component } from './rutas/ruta2/sub2/sub2.component';
import { Sub3Component } from './rutas/ruta2/sub3/sub3.component';
import { ProhibidoComponent } from './prohibido/prohibido.component';

@NgModule({
  declarations: [
    AppComponent,
    Ruta1Component,
    Ruta2Component,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    ProhibidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
