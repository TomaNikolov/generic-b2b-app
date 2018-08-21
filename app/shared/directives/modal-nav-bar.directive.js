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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtbmF2LWJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC1uYXYtYmFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxrRUFBc0U7QUFDdEUsNkRBQTJEO0FBQzNELGlEQUFnRDtBQUtoRDtJQUNJLDhCQUFvQixNQUF5QixFQUN6QixJQUFVO1FBRFYsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sMkNBQVksR0FBcEI7UUFBQSxpQkFZQztRQVhHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFFcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBbkJRLG9CQUFvQjtRQUhoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7U0FDNUIsQ0FBQzt5Q0FFOEIsZ0NBQWlCO1lBQ25CLFdBQUk7T0FGckIsb0JBQW9CLENBb0JoQztJQUFELDJCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6IFwiW21vZGFsTmF2QmFyXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbE5hdkJhckRpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gdGhpcy5wYXJhbXMuY29udGV4dC50aXRsZTtcclxuICAgICAgICB0aGlzLmFkZE5hdkJ1dHRvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTmF2QnV0dG9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IG5ldyBBY3Rpb25JdGVtKCk7XHJcblxyXG4gICAgICAgIGJhY2tCdXR0b24uaW9zLnBvc2l0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgICAgIGJhY2tCdXR0b24udGV4dCA9IFwiRG9uZVwiO1xyXG4gICAgICAgIGJhY2tCdXR0b24ub24oXCJ0YXBcIiwgKCkgPT4gdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci5hY3Rpb25JdGVtcy5hZGRJdGVtKGJhY2tCdXR0b24pO1xyXG4gICAgfVxyXG59Il19