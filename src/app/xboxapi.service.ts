import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient }    from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class XboxapiService {
  private gameClipUrl = "https://xboxapi.k8s.dustinrue.com/gameclips/gamertag/realangrymonkey";
  private screenshotsURL = "https://xboxapi.k8s.dustinrue.com/screenshots/gamertag";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getGameClips(): Observable<[]> {
    this.messageService.add('XboxApiService so triggered');
    return this.http.get<[]>(this.gameClipUrl);
  }

  getScreenshots(gamertag: string): Observable<[]> {
    console.log(gamertag);
    this.messageService.add('Grabbing screenshots...');
    return this.http.get<[]>(this.screenshotsURL + '/' + gamertag);
  };
}
