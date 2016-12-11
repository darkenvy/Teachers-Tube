//our root app component
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['css/app.css'],
  templateUrl: 'partials/app.html'
})
export class AppComponent {
  id = 'qDuKsiwS5xw';
  private player;
  private ytEvent;
  time1 = '';
  time2 = '';
  timeListSelected : number;
  timeList = [
    {start: '02:00', end: '14:00'},
    {start: '15:24', end: '15:26'},
    {start: '31:17', end: '01:52:34'}
  ];
  // private secondsToHuman(seconds) {

  // }

  constructor() {
    this.timeListSelected = 0;
    this.edit(this.timeListSelected);
  }

  // Interface Functions
  add() {
    this.timeList.push({start:'00:00', end:'00:01'});
    this.timeListSelected = this.timeList.length-1;
    this.edit(this.timeListSelected);
    console.log(this.timeList);
  }

  delete(idx) {
    this.timeList.splice(idx, 1);
    console.log(this.timeList);
  }

  edit(idx) {
    this.timeListSelected=idx
    this.time1 = this.timeList[idx].start;
    this.time2 = this.timeList[idx].end;
  }

  metadataChanged(value, entryNumber) {
    console.log(value, entryNumber, this.timeListSelected)
    if (this.timeListSelected !== undefined) {
      if (entryNumber === 1) {
        this.timeList[this.timeListSelected].start = value;
      }
      if (entryNumber === 2) {
        this.timeList[this.timeListSelected].end = value;
      }
      if (entryNumber === 3) {}

    }
  }




  // Deep functions

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