import { Component } from '@angular/core';

@Component({
  selector: 'gamerdetails',
  templateUrl: './gamerdetails.component.html',
  styleUrls: ['./gamerdetails.component.css']
})

export class GamerDetailsComponent {
  gamertag: String;

  constructor() {
    this.gamertag = "RealAngryMonkey";
  }
}