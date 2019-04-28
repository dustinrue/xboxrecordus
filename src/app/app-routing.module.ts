import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameClipsComponent } from './gameclips/gameclips.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'gameclips/:gamertag',                component: GameClipsComponent },
  { path: 'screenshots/:gamertag',              component: ScreenshotsComponent },
  { path: '',                                   component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
