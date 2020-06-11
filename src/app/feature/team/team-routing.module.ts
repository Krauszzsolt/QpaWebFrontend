import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTeamListComponent } from './page/page-team-list/page-team-list.component';
import { PageTeamDetailComponent } from './page/page-team-detail/page-team-detail.component';


const routes: Routes = [
  {path: '', component: PageTeamListComponent},
  {path: 'details', component: PageTeamDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
