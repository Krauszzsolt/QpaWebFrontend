import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRoutingModule } from '../../news-routing.module';

@Component({
  selector: 'app-page-list-news',
  templateUrl: './page-list-news.component.html',
  styleUrls: ['./page-list-news.component.scss']
})
export class PageListNewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  add(){
    this.router.navigate(['main/hirek/add']);
  }

  detail(){
    this.router.navigate(['main/hirek/detail'])
  }

}
