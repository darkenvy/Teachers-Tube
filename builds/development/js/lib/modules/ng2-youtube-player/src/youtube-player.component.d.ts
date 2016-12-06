/// <reference types="youtube" />
import { EventEmitter, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import { YoutubePlayerService } from './youtube-player.service';
export declare class YoutubePlayer implements OnInit, AfterContentInit {
    playerService: YoutubePlayerService;
    private elementRef;
    videoId: string;
    height: number;
    width: number;
    ready: EventEmitter<YT.Player>;
    change: EventEmitter<{}>;
    private ytPlayerContainer;
    constructor(playerService: YoutubePlayerService, elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    playVideo(): void;
    pauseVideo(): void;
    togglePlayer(): void;
    playNextTrack(): void;
}
