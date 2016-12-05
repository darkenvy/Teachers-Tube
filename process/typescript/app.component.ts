import {Component} from 'angular2/core';


@Component({
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
    // Yea, that's a evaluation statement!
    // It's on the todo list to convert Plyr into a NG2 library.
    // Otherwise, it's a delayed evaluation to init it for now.
    eval(`
      var instances;
      setTimeout(()=>{
        instances = plyr.setup();
      },2000);
      `);
  }
}

