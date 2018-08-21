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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHNEQUF1RTtBQUN2RSxrRUFBdUU7QUFFdkUsZ0ZBQTJFO0FBQzNFLDhFQUFnRTtBQXVCaEU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFyQnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjtnQkFFeEIsbUNBQVU7Z0JBQ1YsOENBQW9CO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGlDQUFrQjthQUNyQjtZQUNELFlBQVksRUFBRTtnQkFDVixtQ0FBVTtnQkFDViw4Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsTmF2QmFyRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9tb2RhbC1uYXYtYmFyLmRpcmVjdGl2ZVwiXHJcbmltcG9ydCB7IEhpZGVOYXZCYXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2hpZGUtbmF2LWJhci5kaXJlY3RpdmVcIlxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcblxyXG4gICAgICAgIEhpZGVOYXZCYXIsXHJcbiAgICAgICAgTW9kYWxOYXZCYXJEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIaWRlTmF2QmFyLFxyXG4gICAgICAgIE1vZGFsTmF2QmFyRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9Il19