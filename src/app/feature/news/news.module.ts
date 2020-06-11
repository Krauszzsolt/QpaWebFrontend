import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { PageDetailNewsComponent } from './page/page-detail-news/page-detail-news.component';
import { PageListNewsComponent } from './page/page-list-news/page-list-news.component';
import { PageAddNewsComponent } from './page/page-add-news/page-add-news.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageDetailNewsComponent, PageListNewsComponent, PageAddNewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
