"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("./shared/shared.module");
var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent = __decorate([
        core_1.Component({
            template: "\n<GridLayout modalNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Terms\" nsRouterLink=\"../terms2\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], TermsComponent);
    return TermsComponent;
}());
exports.TermsComponent = TermsComponent;
var Terms2Component = /** @class */ (function () {
    function Terms2Component() {
    }
    Terms2Component = __decorate([
        core_1.Component({
            template: "\n<GridLayout modalNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Terms 2\" nsRouterLink=\"../terms\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], Terms2Component);
    return Terms2Component;
}());
exports.Terms2Component = Terms2Component;
var TermsModule = /** @class */ (function () {
    function TermsModule() {
    }
    TermsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "terms" },
                    { path: "terms", component: TermsComponent },
                    { path: "terms2", component: Terms2Component }
                ])
            ],
            entryComponents: [
                TermsComponent,
                Terms2Component
            ],
            declarations: [
                TermsComponent,
                Terms2Component
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], TermsModule);
    return TermsModule;
}());
exports.TermsModule = TermsModule;
