import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes';
import { HomeModule } from './home';
import { ModulosModule } from './modulos';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './shared';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ServicosModule } from './servicos';
import { DiretivasModule } from './diretivas';
import { DataBindingModule } from './data-binding';
import { RotasModule } from './rotas';
import { RxjsModule } from './rxjs';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ModulosModule,
    ComponentesModule,
    ServicosModule,
    DiretivasModule,
    DataBindingModule,
    RotasModule,
    RxjsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
