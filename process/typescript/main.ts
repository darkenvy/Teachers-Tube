//main entry point
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component.js';
import { TimeForm } from './pipes/timeform.pipe'

@NgModule({
  imports:[ BrowserModule, YoutubePlayerModule ],
  declarations: [ AppComponent, TimeForm ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);