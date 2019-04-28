import { Component, OnInit } from '@angular/core';
import { XboxapiService } from '../xboxapi.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})

export class ScreenshotsComponent implements OnInit {


  screenshots: Array<number>;
  error: Object;
  constructor(
    private xboxApiService: XboxapiService, 
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getScreenshots();
  }

  getScreenshots(): void {
    const gamertag = this.route.snapshot.paramMap.get('gamertag');
    console.log(gamertag);
    if (gamertag) {
      this.xboxApiService.getScreenshots(gamertag)
      .subscribe(screenshots => this.screenshots = screenshots);
    }
    
  }
}