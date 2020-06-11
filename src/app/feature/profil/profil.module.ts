import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { PageProfilMainComponent } from './page/page-profil-main/page-profil-main.component';


@NgModule({
  declarations: [PageProfilMainComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
