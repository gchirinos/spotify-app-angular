import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-cardplayer',
  templateUrl: './cardplayer.component.html',
  styleUrls: ['./cardplayer.component.css']
})
export class CardplayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
