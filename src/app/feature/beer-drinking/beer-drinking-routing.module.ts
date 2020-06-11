import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBeerDrinkingListComponent } from './page/page-beer-drinking-list/page-beer-drinking-list.component';


const routes: Routes = [
  {path: '', component: PageBeerDrinkingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerDrinkingRoutingModule { }
