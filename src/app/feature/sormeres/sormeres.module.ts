import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SormeresRoutingModule } from './sormeres-routing.module';
import { PageListSormeresComponent } from './page/page-list-sormeres/page-list-sormeres.component';


@NgModule({
  declarations: [PageListSormeresComponent],
  imports: [
    CommonModule,
    SormeresRoutingModule
  ]
})
export class SormeresModule { }
