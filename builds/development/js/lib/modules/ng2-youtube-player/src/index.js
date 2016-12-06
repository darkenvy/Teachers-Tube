"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var youtube_player_component_1 = require('./youtube-player.component');
var youtube_player_service_1 = require('./youtube-player.service');
var YoutubePlayerModule = (function () {
    function YoutubePlayerModule() {
    }
    YoutubePlayerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        youtube_player_component_1.YoutubePlayer
                    ],
                    exports: [
                        youtube_player_component_1.YoutubePlayer
                    ],
                    providers: [
                        youtube_player_service_1.YoutubePlayerService
                    ]
                },] },
    ];
    /** @nocollapse */
    YoutubePlayerModule.ctorParameters = [];
    return YoutubePlayerModule;
}());
exports.YoutubePlayerModule = YoutubePlayerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHlDQUE4Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzNELHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBR2hFO0lBQUE7SUFtQkEsQ0FBQztJQW5CeUMsOEJBQVUsR0FBMEI7UUFDOUUsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AscUJBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdDQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3Q0FBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsNkNBQW9CO3FCQUNyQjtpQkFDRixFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsa0NBQWMsR0FBNkQsRUFDakYsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSwyQkFBbUIsc0JBbUIvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFlvdXR1YmVQbGF5ZXIgfSBmcm9tICcuL3lvdXR1YmUtcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZb3V0dWJlUGxheWVyU2VydmljZSB9IGZyb20gJy4veW91dHViZS1wbGF5ZXIuc2VydmljZSc7XG5cblxuZXhwb3J0IGNsYXNzIFlvdXR1YmVQbGF5ZXJNb2R1bGUgeyBzdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBZb3V0dWJlUGxheWVyXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBZb3V0dWJlUGxheWVyXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFlvdXR1YmVQbGF5ZXJTZXJ2aWNlXG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=