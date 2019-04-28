import { Component, OnInit, Input } from '@angular/core';
import { XboxapiService } from '../xboxapi.service';
import { Gamer } from '../gamer';


@Component({
  selector: 'gamer-details',
  templateUrl: './gamerdetails.component.html',
  styleUrls: ['./gamerdetails.component.css']
})

export class GamerDetailsComponent implements OnInit {
  @Input() gamer: Gamer;
  gamertag: string;

  constructor(
    private xboxApiService: XboxapiService,
  ) { }

  ngOnInit() {
    this.getFormattedGamertag();
  }

  getFormattedGamertag() {
    this.gamertag = "test";
    //return this.gamer.gamertag;
  }
}