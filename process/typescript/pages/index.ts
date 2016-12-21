//our root app component
import {Component} from '@angular/core';
import {Promise} from 'es6-promise';

interface timeItem {
  start: string;
  end: string;
  url: string;
}

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
  vidUrl = '';
  timeListSelected : number;
  timeList : timeItem[]
  nextCmd : any[]; // function
  cmdLoopRunning = false;
  playerInstance;

  constructor() {
    var playerInstance = this.player;
    this.nextCmd = [];
    this.timeListSelected = -1;
    this.timeList = [
      {start: '20', end: '25', url: 'tNjsVTQ7Q3c'},
      {start: '120', end: '130', url: 'jPcBU0Z2Hj8'},
      {start: '5', end: '20', url: 'bFNjA9LOPsg'}
    ];
  }

  // ------------ Interface Functions ------------ //
  add() {
    this.timeList.push({start:'5', end:'10', url: 'HUgE9L7V4oY'});
    this.timeListSelected = this.timeList.length-1;
    this.edit(this.timeListSelected);
    console.log(this.timeList);
  }

  // this.player.cueVideoById(this.timeList[idx].url);
  // this.player.seekTo(this.timeList[idx].start);
  playVideo(idx) {
    this.nextCmd.push(['cueVideoById', this.timeList[idx].url])
    this.nextCmd.push(['seekTo', this.timeList[idx].start])
    this.cmdLoop();
    // var playerInstance = this.player; // Lets see if we can remove this. 'this' keeps changing
    
  }

  cmdLoop() {
    if (this.cmdLoopRunning === true) {console.log('already running. quit'); return}
    this.cmdLoopRunning = true;
    setInterval(()=>{
      if (this.nextCmd && this.nextCmd.length > 0) {
        if (this.player.getPlayerState() > 0) {
          let cmd = this.nextCmd[0][0];
          // switch (cmd) {
          //   case 'cueVideoById':
          //     console.log('case1');
          //     this.fn.cue(this.nextCmd[0][1]);
          //     break;
          //   case 'seek':
          //     console.log('case2');
          //     this.fn.seek(this.nextCmd[0][1]);
          //     break;
          // }
          // this.nextCmd[0][0](this.nextCmd[0][1]); // run command in list
          this.nextCmd.splice(0,1);
        }
      }
    }, 1000);
  }


  // playerReady(playerInstance, fn) {
  //   return new Promise((resolve, reject) => {
  //     var check = () => {
  //       console.log('ran check');
  //       setTimeout(()=>{
  //         if (false) {check()} // repeat timeout
  //         else {
  //           console.log('resolving check', state);
  //           fn(playerInstance);
  //           resolve();
  //         }
  //       }, 100);
  //     }
  //     check(); // run first cycle
  //   })
  // }

  // playerReady = new Promise((resolve, reject)=>{
  //   return resolve;
  // })

  // playerReady(cb, params) {
  //   // Runs a function when the player says its ready.
  //   // Would love for this to be a Promise :P
    // setTimeout(() => {
    //   var state = this.player.getPlayerState();
    //   console.log('cycle');
    //   if (!state) {this.playerReady(cb, params)}
    //   else {cb("tNjsVTQ7Q3c")}
    // }, 100);
  // }

  edit(idx) {
    this.timeListSelected=idx
    this.time1 = this.timeList[idx].start;
    this.time2 = this.timeList[idx].end;
    this.vidUrl = this.timeList[idx].url;
  }

  delete(idx) {
    this.timeList.splice(idx, 1);
    console.log(this.timeList);
  }

  // ------------ Deep functions ------------ //

  onStateChange(event) {
    this.waitState = 1;
    this.ytEvent = event.data;
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
        this.timeList[this.timeListSelected].url = value;
    }
  }
  
  savePlayer(player) { // Whos executing this? W/O it, it breaks.
    this.player = player;
  }
  
  // ------------ Helper Functions ------------ //

  // pauseVideo() {
  //   this.player.pauseVideo();
  // }
}