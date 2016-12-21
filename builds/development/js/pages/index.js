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
                    this.time1 = '';
                    this.time2 = '';
                    this.vidUrl = '';
                    this.cmdLoopRunning = false;
                    var playerInstance = this.player;
                    this.nextCmd = [];
                    this.timeListSelected = -1;
                    this.timeList = [
                        { start: '20', end: '25', url: 'tNjsVTQ7Q3c' },
                        { start: '120', end: '130', url: 'jPcBU0Z2Hj8' },
                        { start: '5', end: '20', url: 'bFNjA9LOPsg' }
                    ];
                }
                // ------------ Interface Functions ------------ //
                AppComponent.prototype.add = function () {
                    this.timeList.push({ start: '5', end: '10', url: 'HUgE9L7V4oY' });
                    this.timeListSelected = this.timeList.length - 1;
                    this.edit(this.timeListSelected);
                    console.log(this.timeList);
                };
                // this.player.cueVideoById(this.timeList[idx].url);
                // this.player.seekTo(this.timeList[idx].start);
                AppComponent.prototype.playVideo = function (idx) {
                    this.nextCmd.push(['cueVideoById', this.timeList[idx].url]);
                    this.nextCmd.push(['seekTo', this.timeList[idx].start]);
                    this.cmdLoop();
                    // var playerInstance = this.player; // Lets see if we can remove this. 'this' keeps changing
                };
                AppComponent.prototype.cmdLoop = function () {
                    var _this = this;
                    if (this.cmdLoopRunning === true) {
                        console.log('already running. quit');
                        return;
                    }
                    this.cmdLoopRunning = true;
                    setInterval(function () {
                        if (_this.nextCmd && _this.nextCmd.length > 0) {
                            if (_this.player.getPlayerState() > 0) {
                                var cmd = _this.nextCmd[0][0];
                                // switch (cmd) {
                                //   case 'cueVideoById':
                                //     console.log('case1');
                                //     this.fn.cue(this.nextCmd[0][1]);
                                //     break;
                                //   case 'seek':
                                //     console.log('case2');
                                //     this.fn.seek(this.nextCmd[0][1]);
                                //     break;
                                // }
                                // this.nextCmd[0][0](this.nextCmd[0][1]); // run command in list
                                _this.nextCmd.splice(0, 1);
                            }
                        }
                    }, 1000);
                };
                // playerReady(playerInstance, fn) {
                //   return new Promise((resolve, reject) => {
                //     var check = () => {
                //       console.log('ran check');
                //       setTimeout(()=>{
                //         if (false) {check()} // repeat timeout
                //         else {
                //           console.log('resolving check', state);
                //           fn(playerInstance);
                //           resolve();
                //         }
                //       }, 100);
                //     }
                //     check(); // run first cycle
                //   })
                // }
                // playerReady = new Promise((resolve, reject)=>{
                //   return resolve;
                // })
                // playerReady(cb, params) {
                //   // Runs a function when the player says its ready.
                //   // Would love for this to be a Promise :P
                // setTimeout(() => {
                //   var state = this.player.getPlayerState();
                //   console.log('cycle');
                //   if (!state) {this.playerReady(cb, params)}
                //   else {cb("tNjsVTQ7Q3c")}
                // }, 100);
                // }
                AppComponent.prototype.edit = function (idx) {
                    this.timeListSelected = idx;
                    this.time1 = this.timeList[idx].start;
                    this.time2 = this.timeList[idx].end;
                    this.vidUrl = this.timeList[idx].url;
                };
                AppComponent.prototype.delete = function (idx) {
                    this.timeList.splice(idx, 1);
                    console.log(this.timeList);
                };
                // ------------ Deep functions ------------ //
                AppComponent.prototype.onStateChange = function (event) {
                    this.waitState = 1;
                    this.ytEvent = event.data;
                };
                AppComponent.prototype.metadataChanged = function (value, entryNumber) {
                    console.log(value, entryNumber, this.timeListSelected);
                    if (this.timeListSelected !== undefined) {
                        if (entryNumber === 1) {
                            this.timeList[this.timeListSelected].start = value;
                        }
                        if (entryNumber === 2) {
                            this.timeList[this.timeListSelected].end = value;
                        }
                        if (entryNumber === 3) { }
                        this.timeList[this.timeListSelected].url = value;
                    }
                };
                AppComponent.prototype.savePlayer = function (player) {
                    this.player = player;
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

//# sourceMappingURL=index.js.map
