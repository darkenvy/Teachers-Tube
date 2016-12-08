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
                    this.items = ['apple', 'dairy', 'cow'];
                }
                AppComponent.prototype.add = function () {
                    this.items.push('new');
                    console.log(this.items);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n  \n  "],
                        template: "\n    <button (click)=\"add()\">Add</button>\n    <div *ngFor=\"let item of items\">\n      <p>$ {{item}}</p>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// //our root app component
// import {Component} from '@angular/core';
// @Component({
//   selector: 'my-app',
//   styleUrls: ['css/app.css'],
//   // templateUrl: 'partials/app.html'
//   template: `
//     <button (click)="add()">Add</button>
//     <div *ngFor="let item of items">
//       <p>$ {{item}}</p>
//     </div>
//   `
// })
// export class AppComponent {
//   id = 'qDuKsiwS5xw';
//   private player;
//   private ytEvent;
//   timeList = [
//     {
//       start: '120',
//       end: '840'
//     },
//     {
//       start: '924',
//       end: '926'
//     },
//     {
//       start: '1877',
//       end: '3754'
//     }
//   ];
//   items = ['apple','dairy','cow'];
//   constructor() {}
//   // Interface Functions
//   add() {
//     // this.timeList.push({start:'1776', end:'1777'});
//     this.items.push('new');
//     console.log(this.items);
//   }
//   // delete(e) {
//   //   this.timeList.splice(0, 1);
//   //   console.log(this.timeList);
//   // }
//   // // Deep functions
//   // onStateChange(event) {
//   //   this.ytEvent = event.data;
//   // }
//   // savePlayer(player) {
//   //   this.player = player;
//   // }
//   // playVideo() {
//   //   this.player.playVideo();
//   // }
//   // pauseVideo() {
//   //   this.player.pauseVideo();
//   // }
//   // deets() {
//   //   console.log('++++ PLAYER:', this.player);
//   //   console.log('current time', this.player.getCurrentTime());
//   //   // console.log('thi');
//   // }
//   // seek() {
//   //   this.player.seekTo(20)
//   // }
//   // change() {
//   //   this.player.cueVideoById('6twEdvyvadg')
//   // }
// } 

//# sourceMappingURL=main.js.map
