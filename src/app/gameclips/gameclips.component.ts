import { Component, OnInit } from '@angular/core';
import { XboxapiService } from '../xboxapi.service';
import { MessageService } from '../message.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'gameclips',
  templateUrl: './gameclips.component.html',
  styleUrls: ['./gameclips.component.css']
})

export class GameClipsComponent implements OnInit {
  gameclips: Array<number>;
  error: Object;
  constructor(private xboxApiService: XboxapiService, private messageService: MessageService) { }

  ngOnInit() {
    //this.getGameClips();
  }

  getGameClips(): void {
    this.xboxApiService.getGameClips()
    .subscribe(gameclips => this.gameclips = gameclips);
  }

}