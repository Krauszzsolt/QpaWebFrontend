import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { PageTeamListComponent } from './page/page-team-list/page-team-list.component';
import { PageTeamDetailComponent } from './page/page-team-detail/page-team-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageTeamListComponent, PageTeamDetailComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
  ]
})
export class TeamModule { }
