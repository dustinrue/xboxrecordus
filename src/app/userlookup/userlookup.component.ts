import { Component, OnInit } from '@angular/core';
import { XboxapiService } from "../xboxapi.service";
import {Router} from "@angular/router";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-userlookup',
  templateUrl: './userlookup.component.html',
  styleUrls: ['./userlookup.component.css']
})
export class UserlookupComponent implements OnInit {
  gamertag: string;
  formattedGamertag: string;

  constructor(
    private xboxApiService: XboxapiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  lookupGamertag(gamertag: string) {
    this.formattedGamertag = '';
    let trimmedGamertag = gamertag.toString().trim();
    let escapedGamertag = encodeURI(trimmedGamertag);

    this.messageService.add("Waiting on Xbox Live...");
    this.xboxApiService.lookupGamertag(escapedGamertag)
    .subscribe((data: any) => {
      this.messageService.add("Idle");
      if (data.status === "success") {
        console.log(`Found ${gamertag} as ${data.userDetails[0].value}`);
        this.formattedGamertag = data.userDetails[0].value;
        this.router.navigate([`/screenshots/${trimmedGamertag}`])
      }
      else {
        console.log(`${gamertag} doesn't exist`);
      }
    });
  }
}
