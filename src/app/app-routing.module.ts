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

  ],
  
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
