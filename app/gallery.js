"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("./shared/shared.module");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent = __decorate([
        core_1.Component({
            selector: "Gallery",
            template: "\n<GridLayout hideNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Gallery\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", component: GalleryComponent }
                ])
            ],
            declarations: [
                GalleryComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], GalleryModule);
    return GalleryModule;
}());
exports.GalleryModule = GalleryModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0U7QUFDdEUsc0RBQXVFO0FBQ3ZFLHdEQUFzRDtBQVl0RDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBVjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsZ0lBTWI7U0FDQSxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQjtBQWM3QjtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQVp6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2lCQUM1QyxDQUFDO2FBQ0w7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0JBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJHYWxsZXJ5XCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48R3JpZExheW91dCBoaWRlTmF2QmFyPlxyXG5cdDxTY3JvbGxWaWV3PlxyXG5cdFx0PExhYmVsIHRleHQ9XCJHYWxsZXJ5XCIgY2xhc3M9XCJoMlwiPjwvTGFiZWw+XHJcblx0PC9TY3JvbGxWaWV3PlxyXG48L0dyaWRMYXlvdXQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgeyB9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICAgICAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogR2FsbGVyeUNvbXBvbmVudCB9XHJcbiAgICAgICAgXSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBHYWxsZXJ5Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kdWxlIHsgfVxyXG4iXX0=