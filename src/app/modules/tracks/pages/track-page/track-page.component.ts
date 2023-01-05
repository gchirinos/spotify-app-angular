import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  loadDataAll(): void {
    this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    });

  }

  ngOnDestroy(): void {
  }

}