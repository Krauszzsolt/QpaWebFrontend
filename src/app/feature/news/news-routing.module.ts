import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDetailNewsComponent } from './page/page-detail-news/page-detail-news.component';
import { PageListNewsComponent } from './page/page-list-news/page-list-news.component';
import { PageAddNewsComponent } from './page/page-add-news/page-add-news.component';


const routes: Routes = [
  {path: '', component: PageListNewsComponent},
  {path: 'detail', component: PageDetailNewsComponent},
  {path: 'add', component: PageAddNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
