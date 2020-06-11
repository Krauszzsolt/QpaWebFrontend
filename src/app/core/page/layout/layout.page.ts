import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNews(){
    this.router.navigate(['main/hirek'])
  }

  navigateToTeams(){
    this.router.navigate(['main/csapatok'])
  }

  navigateToSormeres(){
    this.router.navigate(['main/sormeres'])
  }

  navigateToProfil(){
    this.router.navigate(['main/profil'])
  }

  navigateToRiddle(){
    this.router.navigate(['main/riddle'])
  }

}
