"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var shared_module_1 = require("./shared/shared.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var side_drawer_items_component_1 = require("./core/navigation/side-drawer-items.component");
var tabs_component_1 = require("./core/navigation/tabs.component");
var modal_component_1 = require("./core/navigation/modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [
                modal_component_1.ModalComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                shared_module_1.SharedModule,
                app_routing_module_1.AppRoutingModule,
                angular_1.NativeScriptUISideDrawerModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                side_drawer_items_component_1.SideDrawerItemsComponent,
                tabs_component_1.TabsComponent,
                modal_component_1.ModalComponent,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
