import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './page/login/login.page';
import { LayoutComponent } from './page/layout/layout.page';
import { SharedModule } from '../shared/shared.module';






@NgModule({
  declarations: [LoginComponent, LayoutComponent, ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,


  ]
})
export class CoreModule { }
