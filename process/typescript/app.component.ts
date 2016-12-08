//main entry point
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './pages/index.js';
import { TimeForm } from './pipes/timeform.pipe.js';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[ BrowserModule, FormsModule, YoutubePlayerModule ],
  declarations: [ AppComponent, TimeForm ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

