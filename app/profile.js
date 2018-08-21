"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("./shared/shared.module");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        core_1.Component({
            template: "\n<GridLayout modalNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Profile\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", component: ProfileComponent }
                ])
            ],
            entryComponents: [
                ProfileComponent
            ],
            declarations: [
                ProfileComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0U7QUFDdEUsc0RBQXVFO0FBQ3ZFLHdEQUFxRDtBQVdyRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBVDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUlBTWI7U0FDQSxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQjtBQWlCN0I7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFmekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRCQUFZO2dCQUNaLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztvQkFDOUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtpQkFDNUMsQ0FBQzthQUNMO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLGdCQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDVixnQkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuL3NoYXJlZC9zaGFyZWQubW9kdWxlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuPEdyaWRMYXlvdXQgbW9kYWxOYXZCYXI+XHJcblx0PFNjcm9sbFZpZXc+XHJcblx0XHQ8TGFiZWwgdGV4dD1cIlByb2ZpbGVcIiBjbGFzcz1cImgyXCI+PC9MYWJlbD5cclxuXHQ8L1Njcm9sbFZpZXc+XHJcbjwvR3JpZExheW91dD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7IH1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH1cclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQcm9maWxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlTW9kdWxlIHsgfSJdfQ==