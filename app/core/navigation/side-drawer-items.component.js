"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var app = require("tns-core-modules/application");
var modal_component_1 = require("./modal.component");
var routes_config_1 = require("../routes-config");
var SideDrawerItemsComponent = /** @class */ (function () {
    function SideDrawerItemsComponent(modalDialogService, viewContainerRef) {
        this.modalDialogService = modalDialogService;
        this.viewContainerRef = viewContainerRef;
    }
    SideDrawerItemsComponent.prototype.open = function (pageName) {
        var options = {
            context: {
                path: pageName,
                title: routes_config_1.config.modals.find(function (route) { return route.path === pageName; }).title
            },
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };
        app.getRootView().closeDrawer();
        this.modalDialogService.showModal(modal_component_1.ModalComponent, options);
    };
    SideDrawerItemsComponent = __decorate([
        core_1.Component({
            selector: "side-drawer-items",
            templateUrl: "./core/navigation/side-drawer-items.component.html"
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], SideDrawerItemsComponent);
    return SideDrawerItemsComponent;
}());
exports.SideDrawerItemsComponent = SideDrawerItemsComponent;
