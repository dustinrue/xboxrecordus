import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient }    from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class XboxapiService {
  private apiUrl = environment.apiUrl;

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
