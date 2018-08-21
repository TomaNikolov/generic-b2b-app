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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS1uYXYtYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpZGUtbmF2LWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaURBQWdEO0FBS2hEO0lBQ0ksb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFOUSxVQUFVO1FBSHRCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztTQUMzQixDQUFDO3lDQUU0QixXQUFJO09BRHJCLFVBQVUsQ0FPdEI7SUFBRCxpQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogXCJbaGlkZU5hdkJhcl1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZU5hdkJhciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==