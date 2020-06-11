import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import {CoreModule} from './core/core.module'
import { LayoutComponent } from './core/page/layout/layout.page';



const routes: Routes = [
 {
  path: '',
  loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
 },

 { path: 'main',
   component: LayoutComponent,
   children: [
    {
      path: 'hirek',
     loadChildren: () => import('./feature/news/news-routing.module').then(m => m.NewsRoutingModule)
     },

     {
      path: 'csapatok',
     loadChildren: () => import('./feature/team/team-routing.module').then(m => m.TeamRoutingModule)
     },

     {
      path: 'sormeres',
     loadChildren: () => import('./feature/sormeres/sormeres-routing.module').then(m => m.SormeresRoutingModule)
     },

     {
      path: 'riddle',
     loadChildren: () => import('./feature/riddle/riddle-routing.module').then(m => m.RiddleRoutingModule)
     },

     {
      path: 'profil',
     loadChildren: () => import('./feature/profil/profil-routing.module').then(m => m.ProfilRoutingModule)
     },

  ],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
