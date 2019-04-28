import { Component, OnInit } from '@angular/core';
import { XboxapiService } from '../xboxapi.service';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { MessageService } from '../message.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.router.events.subscribe((event:RouterEvent) => {
      this.routerUpdated(event);
    });
  }

  ngOnInit() {
    this.getScreenshots();
  }

  routerUpdated(event: RouterEvent) {
    if (event instanceof NavigationEnd) {
      this.getScreenshots();
    }
  }

  getScreenshots(): void {
    console.log(`Getting screenshots for ${this.route.snapshot.paramMap.get('gamertag')}`);
    const gamertag = this.route.snapshot.paramMap.get('gamertag');
    
    if (gamertag) {
      this.messageService.add('Waiting on Xbox Live...');
      this.xboxApiService.getScreenshots(gamertag)
      .subscribe(screenshots => {
        this.messageService.add('Idle');
        this.screenshots = screenshots;
      });
    }
  }
}