import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListSormeresComponent } from './page/page-list-sormeres/page-list-sormeres.component';


const routes: Routes = [
  {path: '', component: PageListSormeresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SormeresRoutingModule { }
