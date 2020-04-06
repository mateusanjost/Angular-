import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag4Component } from './pag4/pag4.component';

const routes: Routes = [
  { path: 'pag1', component: Pag1Component },
  { path: 'pag2', component: Pag2Component },
  { path: 'pag3', component: Pag3Component },
  { path: 'pag4', component: Pag4Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
