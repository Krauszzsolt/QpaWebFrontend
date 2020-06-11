import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerDrinkingRoutingModule } from './beer-drinking-routing.module';
import { PageBeerDrinkingListComponent } from './page/page-beer-drinking-list/page-beer-drinking-list.component';


@NgModule({
  declarations: [PageBeerDrinkingListComponent],
  imports: [
    CommonModule,
    BeerDrinkingRoutingModule
  ]
})
export class BeerDrinkingModule { }
