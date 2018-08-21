"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_nav_bar_directive_1 = require("./directives/modal-nav-bar.directive");
var hide_nav_bar_directive_1 = require("./directives/hide-nav-bar.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule
            ],
            exports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                hide_nav_bar_directive_1.HideNavBar,
                modal_nav_bar_directive_1.ModalNavBarDirective
            ],
            providers: [
                modal_dialog_1.ModalDialogService
            ],
            declarations: [
                hide_nav_bar_directive_1.HideNavBar,
                modal_nav_bar_directive_1.ModalNavBarDirective
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
