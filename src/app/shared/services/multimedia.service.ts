import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callBack: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaning$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatu$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {
      if(responseOk) { 
        this.setAudio(responseOk);
      }
    });

    this.listenAllEvents();

  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime ,false);
    this.audio.addEventListener('playing', this.setPlayerStatus ,false);
    this.audio.addEventListener('play', this.setPlayerStatus ,false);
    this.audio.addEventListener('pause', this.setPlayerStatus ,false);
    this.audio.addEventListener('ended', this.setPlayerStatus ,false);
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatu$.next('play');
        break
      case 'playing':
        this.playerStatu$.next('playing');
      break
      case 'ended':
        this.playerStatu$.next('ended');
        break
      default:
        this.playerStatu$.next('paused');
        break;
    }
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaning(currentTime, duration);
    this.setPercentage(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaning(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;

    this.timeRemaning$.next(displayFormat);
  }

  private setPercentage(currentTime: number, duration: number): void {
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  public setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }

}
