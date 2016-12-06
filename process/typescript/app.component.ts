import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Main } from './main';

@NgModule({
  imports:[ BrowserModule, YoutubePlayerModule ],
  declarations: [ Main, ]
  // bootstrap: [ Main ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);