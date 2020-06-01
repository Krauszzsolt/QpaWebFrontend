import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAPage2Component } from './page/feature-a-page2/feature-a-page2.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FeatureAPage2Component],
  imports: [
    CommonModule,
    FeatureARoutingModule,
    SharedModule
  ]
})
export class FeatureAModule { }
