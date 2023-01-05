import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { TrackModel } from '../../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {
  }

  /** 
   * @returns CANCIONES
   */

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, project) => {
      const listTemp = listTracks.filter(a => a._id != id)
      resolve(listTemp)
    });
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    );
  }
  
  /**
   * @returns CANCIONES RANDOM
   *  */

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      // map((dataRevertida) => {
      //   return dataRevertida.filter((track: TrackModel) => track._id != 1)
      // })
    );
  }

}
