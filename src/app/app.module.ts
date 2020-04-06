import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag4Component } from './pag4/pag4.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: 'pag1', component: Pag1Component },
  { path: 'pag2', component: Pag2Component },
  { path: 'pag3', component: Pag3Component },
  { path: 'pag4', component: Pag4Component },
];


@NgModule({
  declarations: [
    AppComponent,
    Pag1Component,
    Pag2Component,
    Pag3Component,
    Pag4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
