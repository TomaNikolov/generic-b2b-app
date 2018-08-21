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
