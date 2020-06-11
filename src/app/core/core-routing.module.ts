import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.page';
import { LayoutComponent } from './page/layout/layout.page';



const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'login/verifyEmail' , component: LoginComponent},
  {path: 'login/oauth2/code/google' , component: LoginComponent},
  {path: 'login/oauth2/code/github' , component: LoginComponent},
  {path : 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
