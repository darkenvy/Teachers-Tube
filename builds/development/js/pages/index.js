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
                // private secondsToHuman(seconds) {
                // }
                function AppComponent() {
                    this.id = 'qDuKsiwS5xw';
                    this.time1 = '';
                    this.time2 = '';
                    this.timeList = [
                        { start: '02:00', end: '14:00' },
                        { start: '15:24', end: '15:26' },
                        { start: '31:17', end: '01:52:34' }
                    ];
                }
                // Interface Functions
                AppComponent.prototype.add = function () {
                    this.timeList.push({ start: '1776', end: '1777' });
                    console.log(this.timeList);
                };
                AppComponent.prototype.delete = function (idx) {
                    this.timeList.splice(idx, 1);
                    console.log(this.timeList);
                };
                AppComponent.prototype.edit = function (idx) {
                    this.timeListSelected = idx;
                    this.time1 = this.timeList[idx].start;
                    this.time2 = this.timeList[idx].end;
                };
                AppComponent.prototype.timeChanged = function (value, entryNumber) {
                    console.log(value, entryNumber, this.timeListSelected);
                    if (this.timeListSelected !== undefined) {
                        if (entryNumber === 1) {
                            this.timeList[this.timeListSelected].start = value;
                        }
                        if (entryNumber === 2) {
                            this.timeList[this.timeListSelected].end = value;
                        }
                    }
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
