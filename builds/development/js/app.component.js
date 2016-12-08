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
                    this.timeList = [];
                    this.timeList = [
                        {
                            start: '120',
                            end: '840'
                        },
                        {
                            start: '924',
                            end: '926'
                        },
                        {
                            start: '1877',
                            end: '3754'
                        }
                    ];
                }
                // Interface Functions
                AppComponent.prototype.add = function () {
                    this.timeList.push({ start: '1776', end: '1777' });
                };
                AppComponent.prototype.delete = function (e) {
                    this.timeList.splice(0, 1);
                    console.log(this.timeList);
                };
                // Deep functions
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
                        styleUrls: ['css/app.css'],
                        templateUrl: 'partials/app.html'
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
