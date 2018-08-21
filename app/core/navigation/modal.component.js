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
