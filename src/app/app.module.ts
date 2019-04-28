import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GamerDetailsComponent } from './gamerdetails/gamerdetails.component';
import { GameClipsComponent } from './gameclips/gameclips.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

@NgModule({
  declarations: [
    AppComponent,
    GamerDetailsComponent,
    GameClipsComponent,
    MessagesComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    GamerDetailsComponent,
    GameClipsComponent
  ]
})
export class AppModule { }
