import { Component, OnInit } from '@angular/core';
import { XboxapiService } from '../xboxapi.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'gameclips',
  templateUrl: './gameclips.component.html',
  styleUrls: ['./gameclips.component.css']
})

export class GameClipsComponent implements OnInit {
  gameclips: Array<number>;
  error: Object;
  constructor(
    private xboxApiService: XboxapiService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getGameClips();
  }

  getGameClips(): void {
    const gamertag = this.route.snapshot.paramMap.get('gamertag');

    this.xboxApiService.getGameClips(gamertag)
    .subscribe(gameclips => this.gameclips = gameclips);
  }

}