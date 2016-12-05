import {Component} from 'angular2/core';
import { NgModule } from 'angular2/core';
import { YoutubePlayerModule } from 'ng2-youtube-player';


@Component({
// @NgModule({
  imports:[YoutubePlayerModule],
  selector: 'main',
  templateUrl: 'partials/app.html',
  // styleUrls: ['../css/app.css', 'css/plyr.css'] // idk why this isn't working
})
export class AppComponent {
  
  next() {
    console.log('success');

  }
  // onClick(myName) {
  //   this.name=myName;
  // }

  constructor() {
    
  }
}

