import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRiddleMainComponent } from './page/page-riddle-main/page-riddle-main.component';


const routes: Routes = [
  {path: '', component: PageRiddleMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiddleRoutingModule { }
