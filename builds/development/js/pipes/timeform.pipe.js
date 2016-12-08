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
    var TimeForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TimeForm = (function () {
                function TimeForm() {
                }
                TimeForm.prototype.transform = function (value, args) {
                    if (!value)
                        return value;
                    var hour = Math.floor(value / 3600), min = Math.floor(value / 60), sec = (value % 60);
                    var format = function (int) { return int < 10 ? '0' + int : int; };
                    var hideHour = function (int) { return hour > 0 ? format(hour) + ':' : ''; };
                    return hideHour(hour) + format(min) + ":" + format(sec);
                };
                TimeForm = __decorate([
                    core_1.Pipe({ name: 'TimeForm' }), 
                    __metadata('design:paramtypes', [])
                ], TimeForm);
                return TimeForm;
            }());
            exports_1("TimeForm", TimeForm);
        }
    }
});

//# sourceMappingURL=timeform.pipe.js.map
