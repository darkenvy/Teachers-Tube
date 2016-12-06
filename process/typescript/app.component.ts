//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  styles: [`
  
  `],
  template: `
    <div class="container">
      <section class="panel">
        <div class="panel-heading">Ng2 Youtube Player Component</div>
        <div class="panel-body">
          <youtube-player 
            [videoId]="id" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)"
          >
          </youtube-player>
        </div>
      </section>
      
      <div class="col-md-12">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" (click)="playVideo()">Play</button>
          <button type="button" class="btn btn-default" (click)="pauseVideo()">Pause</button>
        </div>
      </div>
      
      <div class="col-md-12">
        <section class="panel">
          <div class="panel-title">Player State</div>
          <div class="panel-body">
            <pre>{{ ytEvent }}</pre>
          </div>
        </section>
      </div>
    </div>

    <button (click)="deets()">details</button>
    <button (click)="seek()">seek to 0:20</button>
    <button (click)="change()">change</button>
  `
})
export class AppComponent {
  id = 'qDuKsiwS5xw';
  private player;
  private ytEvent;

  constructor() {}
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  deets() {
    console.log('++++ PLAYER:', this.player);
    console.log('current time', this.player.getCurrentTime());
    // console.log('thi');
  }
  seek() {
    this.player.seekTo(20)
  }
  change() {
    this.player.cueVideoById('6twEdvyvadg')
  }


}