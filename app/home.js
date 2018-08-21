"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("./shared/shared.module");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n<GridLayout hideNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Kinvey Studio\" nsRouterLink=\"../home2\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var Home2Component = /** @class */ (function () {
    function Home2Component() {
    }
    Home2Component = __decorate([
        core_1.Component({
            template: "\n<GridLayout hideNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Kinvey Studio 2\" nsRouterLink=\"../home\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], Home2Component);
    return Home2Component;
}());
exports.Home2Component = Home2Component;
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "home", component: HomeComponent },
                    { path: "home2", component: Home2Component }
                ])
            ],
            declarations: [
                HomeComponent,
                Home2Component
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
