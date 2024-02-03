import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root' //Forma automatica de importar servicios, sin necesidad de incorporarlos en el app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' //Agregar token obtenido de https://accounts.spotify.com/api/token
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( (data: any) => data.albums.items ));
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`)
              .pipe( map( (data: any) => data.artists.items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ar`)
              .pipe(map((data: any) => data['tracks']));
  }
}
