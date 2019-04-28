import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class XboxapiService {
  private apiUrl = "https://xboxapi.k8s.dustinrue.com";

  constructor(
    private http: HttpClient,
    ) { }

  private encodeGamertag(gamertag: string): string {
    return encodeURI(gamertag.toString().trim());
  }
  getGameClips(gamertag: string): Observable<[]> {
    let escapedGamertag = this.encodeGamertag(gamertag);
    return this.http.get<[]>(`${this.apiUrl}/gameclips/gamertag/${escapedGamertag}`);
  }

  getScreenshots(gamertag: string): Observable<[]> {
    let escapedGamertag = this.encodeGamertag(gamertag);
    return this.http.get<[]>(`${this.apiUrl}/screenshots/gamertag/${escapedGamertag}`);
  };

  lookupGamertag(gamertag: string): Observable<[]> {
    let escapedGamertag = this.encodeGamertag(gamertag);
    return this.http.get<[]>(`${this.apiUrl}/userdetails/gamertag/${escapedGamertag}`);
  }
}
