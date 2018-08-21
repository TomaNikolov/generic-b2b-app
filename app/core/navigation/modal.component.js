"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(routerExtensions, activatedRoute, params) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.params = params;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.routerExtensions.navigate(["/" + this.params.context.path], { relativeTo: this.activatedRoute });
    };
    ModalComponent = __decorate([
        core_1.Component({
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            router_1.ActivatedRoute,
            modal_dialog_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0Qsa0VBQXNFO0FBS3RFO0lBQ0Msd0JBQW9CLGdCQUFrQyxFQUMzQyxjQUE4QixFQUM5QixNQUF5QjtRQUZoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNwQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFSVyxjQUFjO1FBSDFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsMkNBQTJDO1NBQ3JELENBQUM7eUNBRXFDLHlCQUFnQjtZQUMzQix1QkFBYztZQUN0QixnQ0FBaUI7T0FIeEIsY0FBYyxDQVMxQjtJQUFELHFCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcblx0XHRcdFx0cHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRcdFx0cHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbYC8ke3RoaXMucGFyYW1zLmNvbnRleHQucGF0aH1gXSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlIH0pO1xyXG5cdH1cclxufSJdfQ==