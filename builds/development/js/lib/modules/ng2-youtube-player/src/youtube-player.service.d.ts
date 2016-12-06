/// <reference types="youtube" />
import { NgZone, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
export interface PlayerOutputs {
    ready?: EventEmitter<YT.Player>;
    change?: EventEmitter<Object | any>;
}
export interface PlayerSize {
    height?: number;
    width?: number;
}
export declare class YoutubePlayerService {
    private zone;
    api: ReplaySubject<any>;
    private isFullscreen;
    private defaultSizes;
    constructor(zone: NgZone);
    private createApi();
    loadPlayerApi(): void;
    setupPlayer(elementId: string, outputs: PlayerOutputs, sizes: PlayerSize, videoId: string): void;
    play(player: YT.Player): void;
    pause(player: YT.Player): void;
    playVideo(media: any, player: YT.Player): void;
    isPlaying(player: YT.Player): boolean;
    createPlayer(elementId: string, outputs: PlayerOutputs, sizes: PlayerSize, videoId: string): any;
    toggleFullScreen(player: YT.Player, isFullScreen: boolean | null | undefined): void;
    generateUniqueId(): string;
}
