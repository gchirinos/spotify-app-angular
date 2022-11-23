import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https:%2F%2Fmedia.insider.in%2F%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1554712022%2Fygmdapibzpwe00xraeir.png',
    album: 'Gioli & Assi',
    name: 'Bebe (Remix)',
    url:'https://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callBack.subscribe(
      (resposne: TrackModel) => {
        console.log('recibiendo cancion.....', resposne);
      });

      this.listObservers$ = [observer1$];
  }

  
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('✌✌✌✌');
  }

}
