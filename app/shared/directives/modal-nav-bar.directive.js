"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var action_bar_1 = require("tns-core-modules/ui/action-bar");
var page_1 = require("tns-core-modules/ui/page");
var ModalNavBarDirective = /** @class */ (function () {
    function ModalNavBarDirective(params, page) {
        this.params = params;
        this.page = page;
        this.page.actionBar.title = this.params.context.title;
        this.addNavButton();
    }
    ModalNavBarDirective.prototype.addNavButton = function () {
        var _this = this;
        if (this.page.actionBar.navigationButton) {
            return;
        }
        var backButton = new action_bar_1.ActionItem();
        backButton.ios.position = "right";
        backButton.text = "Done";
        backButton.on("tap", function () { return _this.params.closeCallback(); });
        this.page.actionBar.actionItems.addItem(backButton);
    };
    ModalNavBarDirective = __decorate([
        core_1.Directive({
            selector: "[modalNavBar]"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page])
    ], ModalNavBarDirective);
    return ModalNavBarDirective;
}());
exports.ModalNavBarDirective = ModalNavBarDirective;
