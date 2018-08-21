"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("tns-core-modules/platform");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.onTabViewLoaded = function (_a) {
        var tabView = _a.object;
        if (platform.isAndroid) {
            return;
        }
        tabView.eachChild(function (child) {
            var tabBarItem = child.__controller.tabBarItem;
            tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -11 };
        });
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            templateUrl: "./core/navigation/tabs.component.html"
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxvREFBc0Q7QUFNdEQ7SUFBQTtJQVdBLENBQUM7SUFWRyx1Q0FBZSxHQUFmLFVBQWdCLEVBQW1CO1lBQWpCLG1CQUFlO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNwQixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUNqRCxVQUFVLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVZRLGFBQWE7UUFKekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx1Q0FBdUM7U0FDdkQsQ0FBQztPQUNXLGFBQWEsQ0FXekI7SUFBRCxvQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidGFic1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb3JlL25hdmlnYXRpb24vdGFicy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IHtcclxuICAgIG9uVGFiVmlld0xvYWRlZCh7IG9iamVjdDogdGFiVmlldyB9KSB7XHJcbiAgICAgICAgaWYgKHBsYXRmb3JtLmlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJWaWV3LmVhY2hDaGlsZCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFiQmFySXRlbSA9IGNoaWxkLl9fY29udHJvbGxlci50YWJCYXJJdGVtO1xyXG4gICAgICAgICAgICB0YWJCYXJJdGVtLnRpdGxlUG9zaXRpb25BZGp1c3RtZW50ID0geyBob3Jpem9udGFsOiAwLCB2ZXJ0aWNhbDogLTExIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=