import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  
  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }

  artists: any[] = [];
  loading: boolean;

  search(artist: string) {
    console.log(artist);
    this.loading = true;
    this.spotify.getArtists(artist)
      .subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }
}
