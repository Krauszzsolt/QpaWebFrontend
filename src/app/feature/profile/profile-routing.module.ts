import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageProfileMainComponent } from './page/page-profile-main/page-profile-main.component';


const routes: Routes = [
  {path: '', component: PageProfileMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
