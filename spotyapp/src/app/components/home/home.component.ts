import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  newSongs: any[] = [];
  loading: boolean;
  error: boolean = false;
  messageError: string = '';

  constructor( private spotify: SpotifyService ){
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService.error.error.message);
        this.messageError = errorService.error.error.message;
      });
  }

  ngOnInit() {
    
  }
}
