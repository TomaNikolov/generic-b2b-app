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
