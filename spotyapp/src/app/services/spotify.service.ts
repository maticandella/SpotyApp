import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Forma automatica de importar servicios, sin necesidad de incorporarlos en el app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' //Agregar token
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .subscribe( data => {
      console.log(data);
    });
  }
}
