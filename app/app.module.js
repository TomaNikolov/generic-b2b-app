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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUVwRix3REFBcUQ7QUFDckQsMkRBQXVEO0FBQ3ZELGlEQUErQztBQUUvQyw2RkFBd0Y7QUFDeEYsbUVBQWdFO0FBQ2hFLHFFQUFtRTtBQXVCbkU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXJCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixlQUFlLEVBQUU7Z0JBQ2IsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw0QkFBWTtnQkFDWixxQ0FBZ0I7Z0JBRWhCLHdDQUE4QjthQUNqQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFFWixzREFBd0I7Z0JBQ3hCLDhCQUFhO2dCQUNiLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIlxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTaWRlRHJhd2VySXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb3JlL25hdmlnYXRpb24vc2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NvcmUvbmF2aWdhdGlvbi90YWJzLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29yZS9uYXZpZ2F0aW9uL21vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG5cclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG5cclxuICAgICAgICBTaWRlRHJhd2VySXRlbXNDb21wb25lbnQsXHJcbiAgICAgICAgVGFic0NvbXBvbmVudCxcclxuICAgICAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19