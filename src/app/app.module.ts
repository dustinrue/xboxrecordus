import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GamerDetailsComponent } from './gamerdetails/gamerdetails.component';
import { GameClipsComponent } from './gameclips/gameclips.component';
import { MessagesComponent } from './messages/messages.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { HomeComponent } from './home/home.component';
import { UserlookupComponent } from './userlookup/userlookup.component';

@NgModule({
  declarations: [
    AppComponent,
    GamerDetailsComponent,
    GameClipsComponent,
    MessagesComponent,
    ScreenshotsComponent,
    HomeComponent,
    UserlookupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
