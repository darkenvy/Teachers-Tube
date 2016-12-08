System.register(['@angular/core', '@angular/platform-browser', 'ng2-youtube-player', '@angular/platform-browser-dynamic', './pages/index.js', './pipes/timeform.pipe.js', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, ng2_youtube_player_1, platform_browser_dynamic_1, index_js_1, timeform_pipe_js_1, forms_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ng2_youtube_player_1_1) {
                ng2_youtube_player_1 = ng2_youtube_player_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (timeform_pipe_js_1_1) {
                timeform_pipe_js_1 = timeform_pipe_js_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_youtube_player_1.YoutubePlayerModule],
                        declarations: [index_js_1.AppComponent, timeform_pipe_js_1.TimeForm],
                        bootstrap: [index_js_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});

//# sourceMappingURL=app.component.js.map
