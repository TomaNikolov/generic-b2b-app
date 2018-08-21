"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var HideNavBar = /** @class */ (function () {
    function HideNavBar(page) {
        this.page = page;
    }
    HideNavBar.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    HideNavBar = __decorate([
        core_1.Directive({
            selector: "[hideNavBar]"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HideNavBar);
    return HideNavBar;
}());
exports.HideNavBar = HideNavBar;
