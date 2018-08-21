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
