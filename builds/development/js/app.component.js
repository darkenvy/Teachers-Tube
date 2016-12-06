System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.id = 'qDuKsiwS5xw';
                }
                AppComponent.prototype.onStateChange = function (event) {
                    this.ytEvent = event.data;
                };
                AppComponent.prototype.savePlayer = function (player) {
                    this.player = player;
                };
                AppComponent.prototype.playVideo = function () {
                    this.player.playVideo();
                };
                AppComponent.prototype.pauseVideo = function () {
                    this.player.pauseVideo();
                };
                AppComponent.prototype.deets = function () {
                    console.log('++++ PLAYER:', this.player);
                    console.log('current time', this.player.getCurrentTime());
                    // console.log('thi');
                };
                AppComponent.prototype.seek = function () {
                    this.player.seekTo(20);
                };
                AppComponent.prototype.change = function () {
                    this.player.cueVideoById('6twEdvyvadg');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n  \n  "],
                        template: "\n    <div class=\"container\">\n      <section class=\"panel\">\n        <div class=\"panel-heading\">Ng2 Youtube Player Component</div>\n        <div class=\"panel-body\">\n          <youtube-player \n            [videoId]=\"id\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\"\n          >\n          </youtube-player>\n        </div>\n      </section>\n      \n      <div class=\"col-md-12\">\n        <div class=\"btn-group\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"playVideo()\">Play</button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"pauseVideo()\">Pause</button>\n        </div>\n      </div>\n      \n      <div class=\"col-md-12\">\n        <section class=\"panel\">\n          <div class=\"panel-title\">Player State</div>\n          <div class=\"panel-body\">\n            <pre>{{ ytEvent }}</pre>\n          </div>\n        </section>\n      </div>\n    </div>\n\n    <button (click)=\"deets()\">details</button>\n    <button (click)=\"seek()\">seek to 0:20</button>\n    <button (click)=\"change()\">change</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
