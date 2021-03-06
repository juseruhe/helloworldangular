import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TablaComponent } from './dashboard/tabla/tabla.component';
import { ListaComponent } from './dashboard/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,DashboardComponent, NavbarComponent, FooterComponent, TablaComponent, ListaComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
