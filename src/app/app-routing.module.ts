import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameClipsComponent } from './gameclips/gameclips.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

const routes: Routes = [
  { path: 'gameclips/:gamertag',                component: GameClipsComponent },
  { path: 'gameclip/:gamertag/:clipid',         component: GameClipsComponent },
  { path: 'screenshots/:gamertag',              component: ScreenshotsComponent },
  { path: 'screenshot/:gamertag/:screenshotid', component: ScreenshotsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
