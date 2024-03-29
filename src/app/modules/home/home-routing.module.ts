import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesModule } from '../favorites/favorites.module';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path:  '**',
    redirectTo: '/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
