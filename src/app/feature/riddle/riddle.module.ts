import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiddleRoutingModule } from './riddle-routing.module';
import { PageRiddleMainComponent } from './page/page-riddle-main/page-riddle-main.component';


@NgModule({
  declarations: [PageRiddleMainComponent],
  imports: [
    CommonModule,
    RiddleRoutingModule
  ]
})
export class RiddleModule { }
