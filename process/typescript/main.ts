import {Component} from 'angular2/core';

@Component({
  selector: 'main',
  templateUrl: 'partials/app.html',
  // styleUrls: ['../css/app.css', 'css/plyr.css'] // idk why this isn't working
})
export class Main {
  // player: YT.Player;
  player: any;
  private id: string = 'qDuKsiwS5xw';

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event){
    console.log('player state', event.data);
  }
}