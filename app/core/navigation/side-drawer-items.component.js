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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLG1FQUFpRztBQUVqRyxrREFBb0Q7QUFFcEQscURBQW1EO0FBQ25ELGtEQUF5QztBQU16QztJQUNDLGtDQUFvQixrQkFBc0MsRUFDL0MsZ0JBQWtDO1FBRHpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUM3QyxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLFFBQWdCO1FBQ3BCLElBQU0sT0FBTyxHQUF1QjtZQUNuQyxPQUFPLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLHNCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUF2QixDQUF1QixDQUFDLENBQUMsS0FBSzthQUNuRTtZQUNELFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDdkMsQ0FBQztRQUVjLEdBQUcsQ0FBQyxXQUFXLEVBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGdDQUFjLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQWpCVyx3QkFBd0I7UUFKcEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLG9EQUFvRDtTQUNqRSxDQUFDO3lDQUV1Qyw0QkFBa0I7WUFDN0IsdUJBQWdCO09BRmpDLHdCQUF3QixDQWtCcEM7SUFBRCwrQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9yb3V0ZXMtY29uZmlnXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNpZGUtZHJhd2VyLWl0ZW1zXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9jb3JlL25hdmlnYXRpb24vc2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlckl0ZW1zQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsRGlhbG9nU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG5cdFx0XHRcdHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG5cdH1cclxuXHJcblx0b3BlbihwYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcblx0XHRcdGNvbnRleHQ6IHtcclxuXHRcdFx0XHRwYXRoOiBwYWdlTmFtZSxcclxuXHRcdFx0XHR0aXRsZTogY29uZmlnLm1vZGFscy5maW5kKChyb3V0ZSkgPT4gcm91dGUucGF0aCA9PT0gcGFnZU5hbWUpLnRpdGxlXHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bGxzY3JlZW46IHRydWUsXHJcblx0XHRcdHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZlxyXG5cdFx0fTtcclxuXHJcblx0XHQoPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCkpLmNsb3NlRHJhd2VyKCk7XHJcblx0XHR0aGlzLm1vZGFsRGlhbG9nU2VydmljZS5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXHJcblx0fVxyXG59Il19