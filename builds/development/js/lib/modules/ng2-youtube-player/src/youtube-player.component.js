"use strict";
var core_1 = require('@angular/core');
var youtube_player_service_1 = require('./youtube-player.service');
var YoutubePlayer = (function () {
    function YoutubePlayer(playerService, elementRef) {
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.videoId = '';
        // player created and initialized - sends instance of the player
        this.ready = new core_1.EventEmitter();
        // state change: send the YT event with its state
        this.change = new core_1.EventEmitter();
    }
    YoutubePlayer.prototype.ngAfterContentInit = function () {
        var htmlId = this.playerService.generateUniqueId();
        var playerSize = { height: this.height, width: this.width };
        this.ytPlayerContainer.nativeElement.setAttribute('id', htmlId);
        this.playerService.loadPlayerApi();
        this.playerService.setupPlayer(htmlId, {
            ready: this.ready,
            change: this.change
        }, playerSize, this.videoId);
    };
    YoutubePlayer.prototype.ngOnInit = function () {
    };
    YoutubePlayer.prototype.playVideo = function () {
        // this.playerService.play();
        // this.play.next(this.player.media);
    };
    YoutubePlayer.prototype.pauseVideo = function () {
        // this.playerService.pause();
    };
    YoutubePlayer.prototype.togglePlayer = function () {
        // this.playerService.togglePlayer();
    };
    YoutubePlayer.prototype.playNextTrack = function () {
        // this.playNext.next(this.player);
    };
    YoutubePlayer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'youtube-player',
                    template: "\n\t\t<div id=\"yt-player-ng2-component\" #ytPlayerContainer></div>\n\t",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    YoutubePlayer.ctorParameters = [
        { type: youtube_player_service_1.YoutubePlayerService, },
        { type: core_1.ElementRef, },
    ];
    YoutubePlayer.propDecorators = {
        'videoId': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'ready': [{ type: core_1.Output },],
        'change': [{ type: core_1.Output },],
        'ytPlayerContainer': [{ type: core_1.ViewChild, args: ['ytPlayerContainer',] },],
    };
    return YoutubePlayer;
}());
exports.YoutubePlayer = YoutubePlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieW91dHViZS1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBaUksZUFBZSxDQUFDLENBQUE7QUFHakosdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFHaEU7SUFZQyx1QkFDUSxhQUFtQyxFQUNsQyxVQUFzQjtRQUR2QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWI5QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBSXRCLGdFQUFnRTtRQUMvRCxVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFhLENBQUM7UUFDdkMsaURBQWlEO1FBQ2hELFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVE3QixDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3JELElBQU0sVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNuQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNDLDZCQUE2QjtRQUM3QixxQ0FBcUM7SUFDdEMsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDQyw4QkFBOEI7SUFDL0IsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDQyxxQ0FBcUM7SUFDdEMsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDQyxtQ0FBbUM7SUFDcEMsQ0FBQztJQUNLLHdCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGdCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3pCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSx5RUFFVDtvQkFDRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtpQkFDL0MsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDRCQUFjLEdBQTZEO1FBQ2xGLEVBQUMsSUFBSSxFQUFFLDZDQUFvQixHQUFHO1FBQzlCLEVBQUMsSUFBSSxFQUFFLGlCQUFVLEdBQUc7S0FDbkIsQ0FBQztJQUNLLDRCQUFjLEdBQTJDO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzdCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzVCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO1FBQzNCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzVCLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQzdCLG1CQUFtQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRyxFQUFFLEVBQUU7S0FDekUsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxxQkFBYSxnQkFzRXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgWW91dHViZVBsYXllclNlcnZpY2UgfSBmcm9tICcuL3lvdXR1YmUtcGxheWVyLnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBZb3V0dWJlUGxheWVyIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblx0IHZpZGVvSWQ6IHN0cmluZyA9ICcnO1xuXHQgaGVpZ2h0OiBudW1iZXI7XG5cdCB3aWR0aDogbnVtYmVyO1xuXG5cdC8vIHBsYXllciBjcmVhdGVkIGFuZCBpbml0aWFsaXplZCAtIHNlbmRzIGluc3RhbmNlIG9mIHRoZSBwbGF5ZXJcblx0IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxZVC5QbGF5ZXI+KCk7XG5cdC8vIHN0YXRlIGNoYW5nZTogc2VuZCB0aGUgWVQgZXZlbnQgd2l0aCBpdHMgc3RhdGVcblx0IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQgcHJpdmF0ZSB5dFBsYXllckNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcGxheWVyU2VydmljZTogWW91dHViZVBsYXllclNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkge1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRJbml0ICgpIHtcblx0XHRjb25zdCBodG1sSWQgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuXHRcdGNvbnN0IHBsYXllclNpemUgPSB7IGhlaWdodDogdGhpcy5oZWlnaHQsIHdpZHRoOiB0aGlzLndpZHRoIH07XG5cdFx0dGhpcy55dFBsYXllckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBodG1sSWQpO1xuXHRcdHRoaXMucGxheWVyU2VydmljZS5sb2FkUGxheWVyQXBpKCk7XG5cdFx0dGhpcy5wbGF5ZXJTZXJ2aWNlLnNldHVwUGxheWVyKGh0bWxJZCwge1xuXHRcdFx0cmVhZHk6IHRoaXMucmVhZHksXG5cdFx0XHRjaGFuZ2U6IHRoaXMuY2hhbmdlXG5cdFx0fSwgcGxheWVyU2l6ZSwgdGhpcy52aWRlb0lkKTtcblx0fVxuXG5cdG5nT25Jbml0ICgpe1xuXHR9XG5cblx0cGxheVZpZGVvICgpIHtcblx0XHQvLyB0aGlzLnBsYXllclNlcnZpY2UucGxheSgpO1xuXHRcdC8vIHRoaXMucGxheS5uZXh0KHRoaXMucGxheWVyLm1lZGlhKTtcblx0fVxuXG5cdHBhdXNlVmlkZW8gKCkge1xuXHRcdC8vIHRoaXMucGxheWVyU2VydmljZS5wYXVzZSgpO1xuXHR9XG5cblx0dG9nZ2xlUGxheWVyICgpIHtcblx0XHQvLyB0aGlzLnBsYXllclNlcnZpY2UudG9nZ2xlUGxheWVyKCk7XG5cdH1cblxuXHRwbGF5TmV4dFRyYWNrICgpIHtcblx0XHQvLyB0aGlzLnBsYXlOZXh0Lm5leHQodGhpcy5wbGF5ZXIpO1xuXHR9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG5cdHNlbGVjdG9yOiAneW91dHViZS1wbGF5ZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgaWQ9XCJ5dC1wbGF5ZXItbmcyLWNvbXBvbmVudFwiICN5dFBsYXllckNvbnRhaW5lcj48L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSBbXG57dHlwZTogWW91dHViZVBsYXllclNlcnZpY2UsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ3ZpZGVvSWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naGVpZ2h0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3dpZHRoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3JlYWR5JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidjaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3l0UGxheWVyQ29udGFpbmVyJzogW3sgdHlwZTogVmlld0NoaWxkLCBhcmdzOiBbJ3l0UGxheWVyQ29udGFpbmVyJywgXSB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=