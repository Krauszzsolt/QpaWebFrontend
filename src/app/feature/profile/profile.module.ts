import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageProfileMainComponent } from './page/page-profile-main/page-profile-main.component';


@NgModule({
  declarations: [PageProfileMainComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
