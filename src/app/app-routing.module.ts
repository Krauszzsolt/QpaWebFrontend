import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreModule} from './core/core.module'


const routes: Routes = [
 {
    path: 'login',
  loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
