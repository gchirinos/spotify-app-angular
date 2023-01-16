import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-playlistbody',
  templateUrl: './playlistbody.component.html',
  styleUrls: ['./playlistbody.component.css']
})
export class PlaylistbodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = [];

  optionSort:{
    property: string | null,
    order: string
  } = {
    property: null,
    order: 'asc'
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
