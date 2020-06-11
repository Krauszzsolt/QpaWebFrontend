import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTeamDetailComponent } from '../team/page/page-team-detail/page-team-detail.component';


const routes: Routes = [
  {path: '', component: PageTeamDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
