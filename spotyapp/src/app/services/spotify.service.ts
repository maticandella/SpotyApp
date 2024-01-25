import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //forma automatica de importar servicios, sin necesidad de incorporarlos en el app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDUBzuOo5npTBqraQJuFJwb---lsqND9tm0btM8GtLPO0OHD-H7-qqZJs1d64VHphzYkUxCZ0kvZKcx8_-G-FDnjpNo2TnX4XDiHtQ2GWnq0ZpKpvg'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .subscribe( data => {
      console.log(data);
    });
  }
}
